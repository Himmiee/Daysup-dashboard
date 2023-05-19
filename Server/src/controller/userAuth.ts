import express from "express";
import { createUser, getUsersByMail } from "../models/authSchema";
import { random, authentication } from "../helpers";

export const Register = async (req: express.Request, res: express.Response) => {
    try {
      
        const {name, email, regNumber, password} = req.body

        if(!name || !email || !password || !regNumber) {
           return res.sendStatus(400)
        }

        const existingUser = await getUsersByMail(email)

        if (existingUser) {
           return res.sendStatus(400)
        }

       const salt = random()
       const user = await createUser({
        name,
        regNumber,
        email,
        authentication: {
          password: authentication(salt, password),
          salt,
        },
       })

       return res.status(200).json(user).end()
    } catch (err) {
       return res.sendStatus(400)
    }

}