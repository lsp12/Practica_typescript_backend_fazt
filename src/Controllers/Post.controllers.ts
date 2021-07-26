import { Request, Response } from "express";
import { connect } from "../database";
import { IPosts } from "../Interface/IPosts";

export const getPost = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const conn = await connect();
  const post = await conn.query("SELECT * FROM posts ORDER BY `posts`.`created_at` DESC");
  return res.json(post[0]);
};

export const postPost = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const reqBody: IPosts = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO posts SET ?", [reqBody]);
  return res.json({ reqBody });
};

export const getPostById = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const id = req.params.id;
  const conn = await connect();
  const post= await conn.query("SELECT * FROM posts WHERE id=?", [id]);
  return res.json(post[0]);
};

export const delPost = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const id = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM posts WHERE id=?", [id]);
  return res.json("Post deleted");
};

export const updatePost = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  const id = req.params.id;
  const reqBody: IPosts = req.body;
  const conn = await connect();
  const re =await conn.query("UPDATE posts SET ? WHERE id=?", [reqBody,reqBody.id]);
  if(re){
    return res.json({messege: "post update", reqBody });
  }else{
    return res.json({messege: "post update error", reqBody });
  }
  
};
