import exp from 'express';
import 'dotenv/config';
import authController from './controllers/authController';
import usersController from './controllers/usersController';
import postsController from './controllers/postsController';

const app = exp();

app.use(exp.json());
app.use('/auth', authController);
app.use('/users', usersController);
app.use('/posts', postsController);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//@ts-ignore
app.listen(process.env.PORT, _ => console.log(`Example app listening at http://localhost:${process.env.PORT}`));
