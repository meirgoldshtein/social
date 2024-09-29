import AuthService from '../services/authService';
import LoginDTO from '../interfaces/LoginDTO';
import exp, {Router, Request} from 'express';


const router : Router = exp.Router();

router.post('/login',async (req : Request<any, any, LoginDTO>, res : exp.Response):Promise<void> => {
    try {
        const token = await AuthService.login(req.body);
        console.log(token)
        if (token instanceof Error) throw token;
        res.cookie('token', token).status(200).json({
            err: false,
            message: 'hear is your token',
            data: token
        });
        
    }
    catch(err) {
        const [status, message] = (err as Error).message.split(':');
        console.log(status, message);
        res.status(Number(status)).json({
            err: true,
            message: message || 'Sorry not token generated, please try again',
            data: null
        });
    }
})



export default router