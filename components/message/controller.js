import socket from '../../socket.js';
import store from './storage.js';
function addMessage(chat,user, message){
    return new Promise((resolve,reject) =>{
        if( !chat ||!user || !message){
            console.error('[MessageController] nothing user ');
            return reject('the dates incorrect');

        }
        const fullMessage ={
            chat:chat,
            user:user,
            message:message,
            date: new Date(),
        }
        store.add(fullMessage);

        socket.socket.io.emit('message',fullMessage);
        resolve(fullMessage);

    })

}
function getMessages(userFilter){
  return new Promise((resolve, reject) =>{
        resolve(store.list(userFilter));
    
    })
}
function  updateMessage(id,message){
    return new Promise(async (resolve, reject)=>{
        if(!id || !message)
        {
            reject('invalid Data');
        }
        const result = await store.update(id,message);
        resolve(result);
    })
}
function deleteMessage(id){
    return new Promise((resolve, reject)=>{
        if(!id)
        {
            reject('Id invalid');
            return false;
        }
        store.remove(id)
            .then(()=>{
                resolve();
            })
            .catch(e=>{
                reject(e);
            })
    })
}

export default {addMessage,getMessages,updateMessage,deleteMessage}