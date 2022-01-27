import express from "express";
import { addStudents } from "../controller/user-controller.js";

const route = express.Router();
route.post("/add", addStudents);

export default route;
