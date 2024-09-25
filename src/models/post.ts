import { v4 as uuidv4} from 'uuid';
import IPost from '../interfaces/IPost';
export default class Post implements IPost {

    public post_id : string
    public created_at : Date
    public comments_count : number = 0
    public responses_id : string[] = []
    public views_count : number = 0
    public likes_count : number = 0
    public dislikes_count : number = 0
    public dislikes_by : string[] = []
    public likes_by : string[] = []
    public is_root: boolean = true
    public is_tailed: boolean = true
    constructor(
        
        public user_id: string,
        public content: string,  
        public response_to : string | undefined   

    ) {
        this.post_id = uuidv4();
        this.created_at = new Date();
    }
}