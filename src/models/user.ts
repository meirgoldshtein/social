import { v4 } from "uuid";
import IUser from "../interfaces/IUser";
import { v4 as uuidv4} from 'uuid';

export default class User implements IUser {
    
    public user_id : string
    public created_at : Date
    public followers_id : string[] = []
    public following_id : string[] = []
    public posts_id : string[] = []
    public like_posts_id : string[] = []
    public dislike_posts_id : string[] = []
    public token? : string



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