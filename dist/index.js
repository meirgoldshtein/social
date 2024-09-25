"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const authController_1 = __importDefault(require("./controllers/authController"));
const usersController_1 = __importDefault(require("./controllers/usersController"));
const postsController_1 = __importDefault(require("./controllers/postsController"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/auth', authController_1.default);
app.use('/users', usersController_1.default);
app.use('/posts', postsController_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//@ts-ignore
app.listen(process.env.PORT, _ => console.log(`Example app listening at http://localhost:${process.env.PORT}`));
