import express from "express";
import {
  UserModel,
  createStudent,
  createUserOrAdmin,
  getUserByRegNumber,
  getUsersById,
  getUsersByMail,
  updatedUser,
} from "../models/authSchema";
import { updateUserPasswordAndSalt } from "../middleware/authMiddleware";
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
      "+authentication.salt +authentication.password +is_admin +is_active"
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

export const addStudent = async (
  req: express.Request,
  res: express.Response
) => {
  const { email, regNumber, name, password } = req.body;
  if (!email || !regNumber || !name) {
    let result = {
      error: "true",
      value: "Invalid email or registration",
    };
    return res.status(400).send(result);
  }
  try {
    const salt = random();
    const user = await getUsersByMail(email);
    if (user) return res.status(400).send("User already exists");
    const checkRegNo = await getUserByRegNumber(regNumber);
    if (checkRegNo) return res.status(400).send("RegNo already exists");
    const student = createStudent({
      name,
      email,
      regNumber,
      authentication: {
        password: authentication(salt, password),
        salt,
      },
    });
    return res.status(200).send("created successfully");
  } catch (err) {
    console.log(err);
  }
};

export const resetPassword = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Invalid input data");
    }

    const user = await getUsersByMail(email);

    if (!user) {
      return res.status(404).send("User not found");
    }

    const newSalt = random();
    const newPasswordHash = authentication(newSalt, password);

    await updateUserPasswordAndSalt(email, newPasswordHash, newSalt);

    return res.status(200).send("Password reset successfully");
  } catch (err) {
    return res.status(500).send("Internal server error");
  }
};
