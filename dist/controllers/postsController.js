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
const postsService_1 = __importDefault(require("../services/postsService"));
const router = express_1.default.Router();
router.get('/search/:filterString', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postsService_1.default.searchPost(req.params.filterString);
        if (result) {
            console.log(req.params.filterString);
            res.status(200).json({
                err: false,
                message: 'success search',
                data: result
            });
        }
        else
            throw new Error('can not add new post');
    }
    catch (err) {
        res.status(500).json({
            err: true,
            message: err,
            data: null
        });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postsArray = yield postsService_1.default.getPosts();
        if (postsArray) {
            res.status(200).json({
                err: false,
                message: 'success to get posts',
                data: postsArray
            });
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: err,
            data: null
        });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postsService_1.default.savePost(req.body);
        if (result) {
            res.status(200).json({
                err: false,
                message: 'new post added',
                data: { post_id: result }
            });
        }
        else
            throw new Error('can not add new post');
    }
    catch (err) {
        res.status(500).json({
            err: true,
            message: err,
            data: null
        });
    }
}));
router.patch('/like', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { post_id, user_id } = req.query;
        if (!post_id || !user_id) {
            throw new Error('post_id and user_id are required');
        }
        const registerInPost = yield postsService_1.default.addLikeToPost(post_id, user_id);
        const registerInUser = yield postsService_1.default.registerLikeInUser(post_id, user_id);
        if (registerInPost && registerInUser) {
            res.status(200).json({
                err: false,
                message: 'new like added',
                data: null
            });
        }
        else
            throw new Error('can not add new like');
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            err: true,
            message: err.message,
            data: null
        });
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postsService_1.default.deletePost(req.params.id);
        if (result) {
            res.status(200).json({
                err: false,
                message: 'delete ok',
                data: undefined
            });
        }
        else
            throw new Error('can not delete post');
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: err,
            data: null
        });
    }
}));
router.patch('/edit', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postsService_1.default.editPost(req.body);
        if (result) {
            res.status(200).json({
                err: false,
                message: 'update ok',
                data: undefined
            });
        }
        else
            throw new Error('can not update post');
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
