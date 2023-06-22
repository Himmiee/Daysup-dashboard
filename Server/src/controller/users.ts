import express from 'express'
import { deleteUserById, getUsers } from '../models/authSchema'

export const getAllUsers = async (req: express.Request, res: express.Response) => {

    try{
        const users = await getUsers();
        return res.status(200).json(users).end();

    } catch(err) {
        res.status(400)
    }
}

export const deleteUser = async ( req : express.Request, res : express.Response) => {
    try{
     const { id } = req.params
     const deleteUser = await deleteUserById(id)
     return res.status(200).json(deleteUser)
    } catch (err) {
     return res.status(400)
    }
}