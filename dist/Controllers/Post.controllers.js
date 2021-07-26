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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.delPost = exports.getPostById = exports.postPost = exports.getPost = void 0;
const database_1 = require("../database");
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield database_1.connect();
    const post = yield conn.query("SELECT * FROM posts");
    return res.json(post[0]);
});
exports.getPost = getPost;
const postPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqBody = req.body;
    const conn = yield database_1.connect();
    yield conn.query("INSERT INTO posts SET ?", [reqBody]);
    return res.json({ reqBody });
});
exports.postPost = postPost;
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const conn = yield database_1.connect();
    const post = yield conn.query("SELECT * FROM posts WHERE id=?", [id]);
    return res.json(post[0]);
});
exports.getPostById = getPostById;
const delPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const conn = yield database_1.connect();
    yield conn.query("DELETE FROM posts WHERE id=?", [id]);
    return res.json("Post deleted");
});
exports.delPost = delPost;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const reqBody = req.body;
    const conn = yield database_1.connect();
    yield conn.query("UPDATE posts SET ? WHERE id=?", [reqBody, reqBody.id]);
    return res.json({ messege: "post update", reqBody });
});
exports.updatePost = updatePost;
