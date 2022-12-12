const express = require("express");

const route = express.Router();

const groupController = require("../app/controllers/GroupController");

route.post("/create", groupController.createGroup);
route.get("/list", groupController.showGroup);
route.get("/list/:id", groupController.showOneGroup);

module.exports = route;
