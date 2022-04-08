import Model from './model.js';

function addChat(users){
    const chat = new Model(users);
    chat.save();
}

function list(idUser){
    return new Promise((resolve,reject)=>{
        let filter = {};
        if(idUser)
        {
            filter = {
                users: idUser
            }
        }
        Model.find(filter)
        .populate('users')
        .exec((err, populated)=>{
            if(err)
            {
                reject(err);
                return false;
            }
            resolve(populated);
        })
   
    })
}


export default {addChat,list};
