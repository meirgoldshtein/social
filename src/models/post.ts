import { v4 as uuidv4} from 'uuid';
import IPost from '../interfaces/IPost';
export default class Post implements IPost {

    public post_id
    public created_at
    public comments_count = 0
    public response_to = undefined
    public responses_id = []
    public views_count = 0
    public likes_count = 0
    public dislikes_count = 0
    public dislikes_by = []
    public likes_by = []
    constructor(
        
        public user_id: string,
        public content: string,     
        public is_root: boolean,
        public is_tailed: boolean,

    ) {
        this.post_id = uuidv4();
        this.created_at = new Date();
    }
}