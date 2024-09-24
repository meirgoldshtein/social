
import exp, {Router, Request} from 'express';

const router : Router = exp.Router();

router.post('/login',async (req : Request, res : exp.Response):Promise<void> => {
    try {
        res.status(200).json({
            err: false,
            message: 'login ok',
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

router.delete('/logout',async (req : Request, res : exp.Response):Promise<void> => {
    try {
        res.status(200).json({
            err: false,
            message: 'logout ok',
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