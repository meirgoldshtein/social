import exp from 'express';
import 'dotenv/config';
const app = exp();
app.use(exp.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
