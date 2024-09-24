
import exp, {Router, Request} from 'express';


const router : Router = exp.Router();

router.get('/search',async (req : Request, res : exp.Response):Promise<void> => {
    try {
        res.status(200).json({
            err: false,
            message: '',
            data: undefined
        });
        
    }
    catch(err) {
        res.status(400).json({
            err: true,
            message: err,
            data: null
        });
    }
})



router.get('/:id',async (req : Request, res : exp.Response):Promise<void> => {
    try {
        res.status(200).json({
            err: false,
            message: '',
            data: undefined
        });
        
    }
    catch(err) {
        res.status(400).json({
            err: true,
            message: err,
            data: null
        });
    }
})


router.post('/',async (req : Request, res : exp.Response):Promise<void> => {
    try {
        res.status(200).json({
            err: false,
            message: 'post ok',
            data: undefined
        });
        
    }
    catch(err) {
        res.status(400).json({
            err: true,
            message: err,
            data: null
        });
    }
})

router.delete('/:id',async (req : Request, res : exp.Response):Promise<void> => {
    try {
        res.status(200).json({
            err: false,
            message: 'delete ok',
            data: undefined
        });
        
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