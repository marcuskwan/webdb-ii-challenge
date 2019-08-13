const express = require('express');
const helmet = require('helmet');

const fruitsRouter = require('../fruits/fruits-router.js');

const server = express();

// use logger
server.use(helmet());
// use json
server.use(express.json());

// use server url,
server.use('/api/fruits', fruitsRouter);

// export to index 
module.exports = server;
