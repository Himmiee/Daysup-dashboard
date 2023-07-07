import express from "express";
import {
  UserModel,
  createUserOrAdmin,
  getUserByRegNumber,
  getUsersByMail,
  updatedUser,
} from "../models/authSchema";
import { random, authentication } from "../helpers";
import { verify } from "../middleware/authMiddleware";
import { tokenModel } from "../models/token";

export const RegisterUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name, email, password, regNumber } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("Invalid credentials");
    }

    const existingUser = await getUsersByMail(email);

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const salt = random();
    const token = verify(email);
    const user = await createUserOrAdmin(
      {
        name,
        regNumber,
        email,
        authentication: {
          password: authentication(salt, password),
          salt,
          accessToken: token,
        },
      },
      false
    );

    return res.status(200).json(user).end();
  } catch (err) {
    return res.sendStatus(400);
  }
};

export const registerAdmin = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name, email, password, regNumber } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("Invalid credentials");
    }

    const existingUser = await getUsersByMail(email);

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const salt = random();
    const token = verify(email);
    const admin = await createUserOrAdmin(
      {
        name,
        email,
        regNumber,
        authentication: {
          password: authentication(salt, password),
          salt,
          accessToken: token,
        },
        is_admin: true,
      },
      false
    );

    return res.status(200).json(admin).end();
  } catch (err) {
    return res.sendStatus(400);
  }
};

export const userLogin = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Invalid email or password");
    }

    const user = await getUsersByMail(email).select(
      "+authentication.salt +authentication.password"
    );
    if (!user) return res.status(400).send("Invalid email or password");
    let hashedPassword = authentication(user.authentication.salt, password);

    if (user.authentication.password !== hashedPassword)
      return res.status(400).send("Invalid Password");
    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );
    const token = verify(email);
    user.authentication.accessToken = token;
    await user.save();

    res.cookie(
      process.env.COOKIE_SECRET_KEY,
      user.authentication.sessionToken,
      { domain: "localhost", path: "/" }
    );
    return res.status(200).json(user).end();
  } catch (err) {
    res.status(400);
  }
};

export const resetPassword = async (
  req: express.Request,
  res: express.Response
) => {
  const { email, password } = req.body;
  const user = await getUsersByMail(email).select(
    "+authentication.salt +authentication.password"
  );
  let result;

  if (!email || !password) {
    let result = {
      error: true,
      message: "Invalid Credentials",
    };
    return res.status(401).send(result);
  }
  if (!user) {
    let result = {
      error: true,
      message: "User not found.",
    };
    return res.status(400).json(result);
  }

  try {
    const salt = random();

    UserModel.findOneAndUpdate(
      { email },
      {
        $set: {
          authentication: {
            password: authentication(salt, password),
            salt,
          },
        },
      }
    );
    user.authentication.password = authentication(salt,password)
    let hashedPassword = authentication(salt, user.authentication.password);
    if (password !== hashedPassword) {
      let result = {
        main: user.authentication.password,
        next: hashedPassword,
        other: user.authentication.salt,
      };
      return res.status(400).send(result);
    }

    res.send("done");
  } catch (err) {
    res.send(err.message);
  }
};
