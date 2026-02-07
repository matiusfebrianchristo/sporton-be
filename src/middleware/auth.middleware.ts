import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "1234"

export interface AuthRequest extends Request {
    user?: any
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction):void => {
    const token = req.header("Authorization")?.replace("Bearer ", "")

    if (!token) {
        res.status(401).json({message: "Authorization Required!"})
        return
    }

    try {
        // console.log(token,"ini")
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        console.error(error)
        res.status(401).json({message: "Invalid Token!"})
    }
}