import express from 'express';
import controller from '../user/controller.js';
import { success,error } from '../../network/response.js';

const router = express.Router();

router.post('/', function(req, res){
    
    controller.addUser(req.body.name)
        .then((data)=>{
            success(req,res,data,201);

        })
        .catch((err)=>{
            error(req,res,err,500,'error interno');
        })

})
router.get('/',function(req,res){
    const nameFilter = req.query.name;
    controller.getAllUsers(nameFilter)
        .then((data)=>{
            success(req,res,data,200);
        })
        .catch((err)=>{
            error(req,res,err,500,'error interno');
        })
})

export default router;