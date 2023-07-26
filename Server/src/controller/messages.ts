import express from "express";
import {
  LeaveModel,
  createMessage,
  deleteMessageById,
  getMessage,
  getMessageById,
  leaveApplication,
  leaveList,
  updateLeaveStatus,
} from "../models/messageSchema";
import { getUsersById, getUsersByMail } from "../models/authSchema";

export const announcement = async (
  req: express.Request,
  res: express.Response
) => {
  const { announcement } = req.body;
  if (!announcement) return res.status(404);
  try {
    const news = createMessage({
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
  try {
    const { leave, name, email } = req.body;
    if (!leave || !name || !email) return res.send("Invalid Credentials");
    const leaveDetail = await leaveApplication({
      name,
      email,
      leave,
    });
    return res.status(200).json(leaveDetail).end();
  } catch (err) {
    res.send(err);
  }
};

export const viewLeave = async (req: express.Request, res:express.Response) => {
  try{
    const { email } = req.params
    const message = await getMessage(email)
    if (!message) return res.send("not found")
    return res.send(message)
  } catch (err) {
    res.send(err);
  }
}
export const viewAllLeave = async (req: express.Request, res: express.Response) => {

  try{
      const messages = await leaveList();
      return res.status(200).json(messages).end();

  } catch(err) {
      res.status(400)
  }
}

export const UpdateLeave = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    let result = {
      error: true,
      message: "Invalid Credentials",
    };
    res.send(result);
  }
  const message = await getMessageById(id);
  if (!message) return res.send("User not found");
  try {
    await LeaveModel.findByIdAndUpdate({ _id: id }, { status });
    res.send("done");
  } catch (err) {
    console.log(err);
  }
};

export const deleteLeave = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const message = await getMessageById(id);
  if (!message) return res.send("User not found");
  try {
    const deleteMessage = await deleteMessageById(id);
    return res.status(200).json(deleteMessage);
  } catch (err) {
    return res.status(400);
  }
};
