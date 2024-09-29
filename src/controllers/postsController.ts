
import exp, {Router, Request, Response} from 'express';
import PostService from '../services/postsService';
import postDTO from '../interfaces/postDTO';
import editPostDTO from '../interfaces/editPostDTO';
import e from 'express';
import verifyUser from '../midlewares/verifyUser';

const router : Router = exp.Router();

router.get('/search/:filterString',async (req : Request, res : Response):Promise<void> => {
    try {
        const result = await PostService.searchPost(req.params.filterString);
        if (result){
            console.log(req.params.filterString)
            res.status(200).json({
                err: false,
                message: 'success search', 
                data: result
            });
        }
        else throw new Error('can not add new post');      
    }
    catch(err) {
        res.status(500).json({
            err: true,
            message: err,
            data: null
        });
    }
})



router.get('/',async (req : Request, res : Response):Promise<void> => {
    try {
        const postsArray = await PostService.getPosts();
        if (postsArray){
            res.status(200).json({
                err: false,
                message: 'success to get posts',
                data: postsArray
            });
        }
      
    }
    catch(err) {
        res.status(400).json({
            err: true,
            message: err,
            data: null
        });
    }
})

router.post('/',verifyUser ,async (req : Request<any, any, postDTO>, res : exp.Response):Promise<void> => {
    try {
        const result = await PostService.savePost(req.body);
        if (result){
            res.status(200).json({
                err: false,
                message: 'new post added',
                data: {post_id: result}
            });
        }
        else throw new Error('can not add new post');   
        
    }
    catch(err) {
        res.status(500).json({
            err: true,
            message: err,
            data: null
        });
    }
})


router.patch('/like',async (req : Request<any,any,any, {post_id: string, user_id: string}>, res : Response):Promise<void> => {
    try {
        const{post_id, user_id} = req.query
        if (!post_id || !user_id) {
            throw new Error('post_id and user_id are required');
        }
        const registerInPost = await PostService.addLikeToPost(post_id, user_id);
        const registerInUser = await PostService.registerLikeInUser(post_id, user_id);
        if (registerInPost && registerInUser){
            res.status(200).json({
                err: false,
                message: 'new like added',
                data: null
            });
        }
        else throw new Error('can not add new like');
    
    }
    catch(err: any) {
        console.log(err)
        res.status(400).json({
            err: true,
            message: err.message,
            data: null
        });
    }
})


router.delete('/:id',async (req : Request, res : exp.Response):Promise<void> => {
    try {
        const result = await PostService.deletePost(req.params.id);
        if (result){
            res.status(200).json({
                err: false,
                message: 'delete ok',
                data: undefined
            });
        }
        else throw new Error('can not delete post');        
    }
    catch(err) {
        res.status(400).json({
            err: true,
            message: err,
            data: null
        });
    }
})

router.patch('/edit',async (req : Request<any, any, editPostDTO>, res : exp.Response):Promise<void> => {
    try {
        const result = await PostService.editPost(req.body);
        if (result)
        {
            res.status(200).json({
                err: false,
                message: 'update ok',
                data: undefined
            });
        }
        else throw new Error('can not update post');
        
    }
    catch(err) {
        res.status(400).json({
            err: true,
            message: err,
            data: null
        });
    }
})


export default router