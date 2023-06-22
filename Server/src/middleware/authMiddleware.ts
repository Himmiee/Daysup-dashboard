import { get, identity, merge } from "lodash";
import dotenv from "dotenv";
import express, { NextFunction } from "express";
import jwt from "jsonwebtoken";
import {
  getUsersById,
  getUsersByMail,
  getUsersBySessionToken,
  getUsersByAccessToken
} from "../models/authSchema";

dotenv.config();

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies[process.env.COOKIE_SECRET_KEY];

    if (!sessionToken) {
      return res.status(404).send("Invalid session token");
    }

    const existingUser = await getUsersBySessionToken(sessionToken);

    if (!existingUser) {
      return res.status(403).send("Nil");
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (err) {
    res.status(400);
  }
};


export const verify = (email: string) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: "60m" });
  return token
};

export const verifyToken = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const authHeader = req.headers.authorization;
  let result;

  if (!authHeader) {
    return res.status(401);
  }

  const accessToken = req.headers.authorization.split(" ")[1];

  try {
  let user = await getUsersByAccessToken(accessToken)
  if (!user) {
    result = {
      error: true,
      message : "Access token not found",
    }
    res.sendStatus(400)
  }

  result = jwt.verify(accessToken, process.env.JWT_SECRET_KEY)
 
  next()

  } catch (err) {
    res.send(err)
  }
};



export const verifyAdmin = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const authHeader = req.headers.authorization;
  let result;

  if (!authHeader) {
    return res.status(401);
  }

  const accessToken = req.headers.authorization.split(" ")[1];

  try {
  let user = await getUsersByAccessToken(accessToken).select("+is_admin");
  if (user.is_admin === false) {
    result = {
      error: true,
      message : "No Permission to access",
    }
    res.send(result)
  } else {
    result = jwt.verify(accessToken, process.env.JWT_SECRET_KEY)
    res.send("verified")
  }


    
  next()

  } catch (err) {
    res.send("omo")
  }
};
