import express from "express";
import { createUserOrAdmin, getUsersByMail } from "../models/authSchema";
import { random, authentication } from "../helpers";
import { verify } from "../helpers";
import { responseHandler } from "../helpers/errorHandler";

export const RegisterUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("Invalid credentials");
    }

    const existingUser = await getUsersByMail(email);

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const salt = random();
    const user = await createUserOrAdmin(
      {
        name,
        email,
        authentication: {
          password: authentication(salt, password),
          salt,
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
    const { name, email, password,  } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("Invalid credentials");
    }

    const existingUser = await getUsersByMail(email);

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const salt = random();
    const admin = await createUserOrAdmin(
      {
        name,
        email,
        authentication: {
          password: authentication(salt, password),
          salt,
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

