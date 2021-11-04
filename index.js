require("dotenv").config();
const inquirer = require("inquirer");
const dataBase = require("./database/index");

const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT || 5000;

initializeServer(port);
dataBase(process.env.MONGODB_STRING);
