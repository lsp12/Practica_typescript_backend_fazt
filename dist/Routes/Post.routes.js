"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Post_controllers_1 = require("../Controllers/Post.controllers");
const router = express_1.Router();
router.get("/api/get", Post_controllers_1.getPost).post("/api/post", Post_controllers_1.postPost);
router.get("/api/get/:id", Post_controllers_1.getPostById)
    .delete("/api/delete/:id", Post_controllers_1.delPost)
    .put("/api/update/:id", Post_controllers_1.updatePost);
exports.default = router;
