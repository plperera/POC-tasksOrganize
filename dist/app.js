import express from 'express';
import { getActiveTasks } from './controllers/tasks.controller.js';
var server = express();
server.get("/status", function (req, res) {
    res.send("de boas");
});
server.get("/tasks", getActiveTasks);
server.listen(4000, function () { return console.log("To rodando na porta " + 4000); });
