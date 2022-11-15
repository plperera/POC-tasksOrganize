import express from 'express';
import { getActiveTasks, insertSingleTask, switchActiveStatusTask, getDoneTasks, getAllTasks, deleteSingleTask} from './controllers/tasks.controller.js';

const server = express()
server.use(express.json())

server.get("/status", (req, res) => {
    res.send("de boas")
})

server.get("/tasks", getActiveTasks)
server.get("/tasks/done", getDoneTasks)
server.get("/tasks/all", getAllTasks)
server.post("/tasks", insertSingleTask)
server.put("/tasks", switchActiveStatusTask)
server.delete("/tasks", deleteSingleTask)

server.listen(4000, () => console.log(`To rodando na porta ${4000}...`))