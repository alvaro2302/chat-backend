import express from 'express';
import { success,error } from '../../network/response.js';
import controller from '../chat/controller.js';
const router = express.Router();

router.post('/',function(req,res){
    const users = req.body.users;
    controller.addUsersToChat(users)
        .then((data)=>{
            success(req,res,data,201);
        })
        .catch((err)=>{
            error(req,res,err,500,'Error Interno');
        })
})
router.get('/:idUser',function(req,res){
    
    controller.listChats(req.params.idUser)
    .then((data)=>{
        success(req,res,data,200);
    })
    .catch((err)=>{
        error(req,res,err,500,'Error Interno');
    })
})
router.get('/',function(req,res){
    controller.listChats(null)
    .then((data)=>{
        success(req,res,data,200);
    })
    .catch((err)=>{
        error(req,res,err,500,'Error Interno');
    })
})

export default router;