import express from "express";
import { success,error } from '../../network/response.js';
const router = express.Router();


router.get('/', function(req,res){
    success(req,res,"otro path ", 200);
})


export default router;