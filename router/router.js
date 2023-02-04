import { Router } from "express";
import {
  controllerCreatePost,
  controllerDeletePost,
  controllerGetAll,
  controllerGetOne,
  controllerUpdatePost,
} from "../controller/PostController.js";

const router = new Router();

router.post("/posts", controllerCreatePost);
router.get("/posts", controllerGetAll);
router.get("/posts/:id", controllerGetOne);
router.put("/posts/:id", controllerUpdatePost);
router.delete("/posts/:id", controllerDeletePost);

export default router;
