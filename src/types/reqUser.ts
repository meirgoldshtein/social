import {Request} from 'express';
import tokenPayloadDTO from '../interfaces/tokenPayloadDTO';

export default interface reqUser extends Request {
    user: tokenPayloadDTO
}