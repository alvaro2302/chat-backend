import express from "express";
import message from "../components/message/network.js";
import notification from "../components/notification/network.js";
import user from "../components/user/network.js";
import chat from "../components/chat/network.js";
const routes = function(server){
    server.use('/message',message);
    server.use('/notification',notification);
    server.use('/user',user);
    server.use('/chat',chat);

}

export {routes};