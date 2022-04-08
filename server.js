import { routes } from './network/routes.js';
import express from 'express';
import bodyParser from 'body-parser';
import socket from './socket.js';
import db from './db.js';
import 'dotenv/config';
import http from 'http';
import cors from 'cors';
const uri = process.env.URI_DATABASE;
const app = express();
const server = http.Server(app);


db.connect(uri);
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
socket.connect(server);
routes(app);



app.use('/app', express.static('public'));
server.listen(3000,function(){
    console.log('la aplicacion esta escuchando');
});
console.log("the app  running and listening ");