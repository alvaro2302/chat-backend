import store from './storage.js';

function addUser(name)
{
    if(!name)
    {
        return Promise.reject('Invalid name');
    }
    const myUser = {
        name,
    };
    return store.add(myUser);
    
}
function getAllUsers(parameter)
{
  return new Promise( (resolve,reject)=>{
      resolve(store.getAllUsers(parameter));
  });
}

export default {addUser,getAllUsers}