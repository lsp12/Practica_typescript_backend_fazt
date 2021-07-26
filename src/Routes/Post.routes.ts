import { Router } from "express";
import {
  delPost,
  getPost,
  getPostById,
  postPost,
  updatePost,
} from "../Controllers/Post.controllers";

const router = Router();

router.get("/api/get", getPost).post("/api/post", postPost);

router.get("/api/get/:id", getPostById)
.delete("/api/delete/:id", delPost)
.put("/api/update/:id", updatePost);

export default router;
