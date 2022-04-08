const list = [];
import db from '../../db.js';
import Model from './model.js';



function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(userFilter){
    return new Promise((resolve, reject)=>{
        let filterMessages = {};
        if(userFilter)
        {
            filterMessages = { user: userFilter };
        }
        Model.find(filterMessages)
            .populate('user')
            .exec((error,populated)=>{
                if(error)
                {
                    reject(error);
                    return false;
                }
                resolve(populated);

            })
           
    })
    
}
async function updateMessage(id, message){
    const foundMessage = await Model.findById(id);
    foundMessage.message = message;
    const messageUpdate = foundMessage.save();
    return messageUpdate;
}
function removeMessage(id){
    return Model.deleteOne({_id:id})
}

export default {add:addMessage, list: getMessages, update: updateMessage ,remove: removeMessage};
