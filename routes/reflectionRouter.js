import { Router } from "express";
import {
  userAddReflection,
  userGetAllReflections,
  userEditReflection,
  userDeleteReflection,
} from "../controller/reflectionController.js";

const router = Router();

router.post("/", userAddReflection);
router.get("/", userGetAllReflections);
router.put("/:id", userEditReflection);
router.delete("/:id", userDeleteReflection);

export default router;
