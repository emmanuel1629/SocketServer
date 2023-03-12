const socketio = require('socket.io');
const express = require('express');
const path    = require('path');
const http    = require('http');
const Sockets = require('./sockets');

class Server
{
    constructor()
    {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = http.createServer(this.app);
        this.io     = socketio (this.server,{});
    }

    middlewares()
    {
        this.app.use(express.static(path.resolve(__dirname,'../public')));
    }

    configurarSockets()
    {
        //le enviamos como argumento el socket para realizar la conexion multiple
        new Sockets(this.io);
    }

    execute()
    {
    
        this.middlewares();
        this.configurarSockets();
        this.server.listen(this.port,()=>{console.log("servidor corriendo en el puerto "+this.port)});
    }
    
}

module.exports = Server;