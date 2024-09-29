"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authService_1 = __importDefault(require("../services/authService"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield authService_1.default.login(req.body);
        console.log(token);
        if (token instanceof Error)
            throw token;
        res.cookie('token', token).status(200).json({
            err: false,
            message: 'hear is your token',
            data: token
        });
    }
    catch (err) {
        const [status, message] = err.message.split(':');
        console.log(status, message);
        res.status(Number(status)).json({
            err: true,
            message: message || 'Sorry not token generated, please try again',
            data: null
        });
    }
}));
exports.default = router;
