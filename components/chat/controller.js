import store from './storage.js';
function addUsersToChat(users){
    return new Promise((resolve,reject)=>{
        if(!users || !Array.isArray(users))
        {
            reject('Invalid user list');
        }
        const chat = {
            users:users
        }

        resolve(store.addChat(chat));
    })
}

function listChats(idUser){
    return store.list(idUser);
}
export default {addUsersToChat,listChats}