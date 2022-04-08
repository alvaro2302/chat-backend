import { Server } from "socket.io";
const socket = {};
function connect(server){
    socket.io = new Server(server,{
        allowRequest: (req, callback) => {
            const noOriginHeader = req.headers.origin === undefined;
            callback(null, noOriginHeader);
        }
    });
}

export default { socket,connect};