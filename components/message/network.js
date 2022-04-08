import express from 'express';
import { success,error } from '../../network/response.js';
import controller from '../message/controller.js';
const router = express.Router();

router.get('/',function(req,res){
    const userFilter = req.query.user;
    controller.getMessages(userFilter)
        .then((messageList)=>{
            success(req,res,messageList,200);
        })
        .catch((err)=>{
            error(req,res,'unexpected',500,err);
        })
    
})

router.post('/',function(req,res){
    controller.addMessage(req.body.chat,req.body.user, req.body.message)
    .then((fullMessage)=>{
        success(req,res,fullMessage,201);
    })
    .catch((err)=>{
        error(req,res, "error inesperado:" + err,500,"simulacion de los errores");
    })
    
    

})
router.delete('/',function(req,res){
    console.log(req.query);
    console.log(req.body);
    
    res.status(201).send({error:'', body:'creado correctamente'});
})

router.patch('/:id',function(req,res){
    console.log(req.params.id);
    controller.updateMessage(req.params.id,req.body.message)
    .then((data)=>{
        success(req,res,data,200);
    })
    .catch((err)=>{
        error(req,res,'error interno',500,err);
    })

})

router.delete('/:id',function(req,res){
    controller.deleteMessage(req.params.id)
    .then(()=>{
        success(req,res,`user id ${req.params.id} delete `,200)
    })
    .catch((err)=>{
        error(req,res,`Error interno `,500,err);
    })
})

export default router;