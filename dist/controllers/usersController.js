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
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("../services/userService"));
const router = express_1.default.Router();
router.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: '',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: err,
            data: null
        });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: '',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: err,
            data: null
        });
    }
}));
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userService_1.default.createNewUser(req.body);
        if (result) {
            res.status(200).json({
                err: false,
                message: 'new user added',
                data: undefined
            });
        }
        else
            throw new Error('can not add new user');
    }
    catch (err) {
        res.status(500).json({
            err: true,
            message: err,
            data: null
        });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: 'delete ok',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: err,
            data: null
        });
    }
}));
exports.default = router;
