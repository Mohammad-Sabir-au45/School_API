import { Router } from "express";
import { 
  createUser,
  createClass,
  createStudent,
  updateUser,
  findAllUsers,
  findAllStudents,
  deleteUser,
  deleteStudent,
} from "../controllers/user.controller.js"

const router = Router();

router.post("/user", createUser);

router.post("/class", createClass);

router.post("/student", createStudent);

router.get("/users", findAllUsers);

router.get("/students", findAllStudents);

router.delete("/user/:id", deleteUser);

router.delete("/student/:id", deleteStudent);

router.put("/user/:id", updateUser);

export default router;
