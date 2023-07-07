import express from "express";
import { createMessage, leaveApplication } from "../models/messageSchema";

export const announcement = async (
  req: express.Request,
  res: express.Response
) => {
  const { announcement } = req.body;
  if (!announcement) return res.status(404);
  try {
    const news =  createMessage({
      announcement,
    });
    return res.status(200).json(news).end();
  } catch (err) {
    res.send(err);
  }
};


export const leaveNote = async (
    req: express.Request,
    res: express.Response
  ) => {
    const { leave } = req.body;
    if (!leave) return res.status(404);
    try {
      const leaveDetail =  leaveApplication({
        leave,
      });
      res.status(200).json(leaveDetail).end();
    } catch (err) {
      res.send(err);
    }
  };
