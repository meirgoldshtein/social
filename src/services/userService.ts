
import fs from 'fs/promises';
import  User  from '../models/user';
import newUserDTO from '../interfaces/newUserDTO';
import { getFileData, writeFileData } from '../config/fileDAL';
import bcrypt from 'bcrypt';

export default class UserService {
    public static async createNewUser(newUser: newUserDTO) : Promise<boolean> {
        const hashPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashPassword;
        const { name, email, phone, password, nickname, description, image_url } = newUser;
        const user: User = new User(name, email, phone, password, nickname, description, image_url);
        const data = await getFileData<User>('users');
        if (!data) {
            return await writeFileData<User>('users', [user]);
        }
        data.push(user);
        return await writeFileData<User>('users', data);
    }
}