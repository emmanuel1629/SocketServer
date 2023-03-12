require('dotenv').config();

const { env } = require('process');
const Server = require('./modelos/server.js');
const server = new Server();
server.execute();


