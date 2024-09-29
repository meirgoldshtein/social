import { NextFunction, Request, Response } from "express";
import jwt , {JwtPayload, VerifyErrors} from 'jsonwebtoken'
import reqUser from "../types/reqUser";
import tokenPayloadDTO from "../interfaces/tokenPayloadDTO";

const verifyUser = async (req: reqUser | Request, res: Response, next: NextFunction) => {

    try {
        if (!req.cookies) {
            return res.status(403).json({
                err: true,
                message: 'No cookies found, please login again',
                data: null
            });
        }
        const token = req.cookies.token;
       
        if (!token) {
            res.status(403).json({
                err: true,
                message: 'no token provided, please login again',
                data: null
            });
        }
        else {
            const payload : tokenPayloadDTO = jwt.verify(token, process.env.JWT_SECRET as string) as tokenPayloadDTO;
            (req as reqUser).user = payload;
            console.log(payload)
            next();
        }
    }
    catch (err) {
        console.log(err)
        if (err instanceof jwt.TokenExpiredError) {
            res.status(403).json({
                err: true,
                message: 'Token expired, please login again',
                data: null
            });}
        res.status(500).json({
            err: true,
            message: 'Token invalid, please login again',
            data: null
        });
    }
}

export default verifyUser