import LoginDTO from '../interfaces/LoginDTO';
import  Post  from '../models/post';
import { getFileData, writeFileData } from '../config/fileDAL';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import tokenPayloadDTO from '../interfaces/tokenPayloadDTO';
import { compare } from 'bcrypt';

export default class AuthService {
    public static async login(userData: LoginDTO) : Promise<boolean | string | User | Error> {
        
        const {username, password} = userData;
        console.log(username, password)
        const users = await getFileData<User>('users') as User[];
        if (!users) throw new Error('500: users not found');
        const user = users.find((user) => user.name === username);
        if (!user) throw new Error('401: user not found');
        if (! await compare(password, user.password)) throw new Error('403: wrong password');
        const payload : tokenPayloadDTO = {
            username: user.name,
            password: user.password,
            user_id: user.user_id,
            email: user.email
        }
        return jwt.sign(payload , process.env.JWT_SECRET as string, {expiresIn: '10m'});
    }


}