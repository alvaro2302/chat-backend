import Model from './model.js';
function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}
async function getAllUsers(parameter){
    let filter = {};
    if(parameter)
    {
        filter = {name: parameter};
    }
    const users = await Model.find(filter);
    return users;
}
export default {
    add:addUser,
    getAllUsers
};