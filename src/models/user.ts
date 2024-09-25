import { v4 } from "uuid";
import IUser from "../interfaces/IUser";
import { v4 as uuidv4} from 'uuid';

export default class User implements IUser {
    
    public user_id
    public created_at
    public followers_id = []
    public following_id = []
    public posts_id = []
    public like_posts_id = []
    public dislike_posts_id = []



    constructor(
        
        public name: string,
        public email: string,
        public phone: string,
        public password: string,     
        public nickname: string,
        public description : string,
        public image_url : string

        
    ) {
        this.user_id = uuidv4();
        this.created_at = new Date();
    }
}