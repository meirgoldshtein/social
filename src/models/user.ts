import { v4 } from "uuid";
import IUser from "../interfaces/IUser";
import { v4 as uuidv4} from 'uuid';

export default class User {
    
    public user_id: string
    public followers_id: string[] = []
    public following_id: string[] = []
    public posts_id: string[] = []
    public likes_id: string[] = []
    public dislikes_id: string[] = []

    constructor(
        
        public name: string,
        public email: string,
        public phone: string,
        public password: string,
        public createdAt: Date,
        public nickname: string,
        public description : string,
        public image_url : string,
        
    ) {
        this.user_id = uuidv4();
    }
}