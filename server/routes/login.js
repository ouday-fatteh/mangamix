import express from "express";
import { userRegister , userLogin } from "../controllers/auth.js";
import bodyParser from "body-parser";

const jsonParser = bodyParser.json()
const router = express.Router();
 
router.post('/register',jsonParser, userRegister);
router.get('/login',jsonParser, userLogin);

export default router;