const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router.js');

const server = express();

// use logger
server.use(helmet());
// use json
server.use(express.json());

// use server url,
server.use('/api/cars', carsRouter);

// export to index
module.exports = server;
