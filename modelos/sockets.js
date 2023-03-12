class Sockets
{   
    // el io viene como argumento desde server.js
    constructor( io )
    {
        this.io = io;
        this.eventosSockets();
    }

    eventosSockets()
    {
        this.io.on('connection',(socket)=>
        {

            //recibimos la respuesta del front
            socket.on('mensajeHaciaElFront',(data)=>
            {
                console.log(data);
                this.io.emit('mensajeDesdeElFront',data)
            })

        });
    }
}

module.exports = Sockets;