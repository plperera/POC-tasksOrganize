import { Request, Response } from 'express';
import { TaskType } from '../protocols/TaskType.js';
import { TaskSchema } from '../schemas/joi.schemas.js';

const tasks: TaskType[] = 
    [
        {
            id:1,
            description:"Limpar Sala",
            answerable: "Pedro",
            until:"2022/12/12",
            active:true,
        },
        {
            id:2,
            description:"Limpar Cozinha",
            answerable: "Pedro",
            until:"2022/12/12",
            active:true,
        },
        {
            id:3,
            description:"Limpar Quarto",
            answerable: "Pedro",
            until:"2022/12/12",
            active:true,
        }
    ]

function getActiveTasks (req: Request, res: Response): void {
    res.send(tasks.filter(e => e.active === true))
}
function getDoneTasks (req: Request, res: Response): void {
    res.send(tasks.filter(e => e.active === false))
}
function getAllTasks (req: Request, res: Response): void {
    res.send(tasks)
}
function getAllTasksByAnswerable (req: Request, res: Response): void {
    const {answerable} = req.params
    res.send(tasks.filter(e => e.answerable.toLowerCase() === answerable.toLowerCase()))
}

function insertSingleTask (req: Request, res: Response) {
    
    const {description, answerable, until} = req.body

    const newTask: TaskType = {
        id: tasks.length + 1,
        description,
        answerable,
        until,
        active:true
    }

    const { error } = TaskSchema.validate(newTask)

    if (error) {
        return res.status(400).send({
            message: error.message
        })
    }

    tasks.push(newTask)

    res.sendStatus(200)
    
}

function switchActiveStatusTask (req: Request, res: Response): void {
    
    const {id} = req.query 
    tasks.map(e => {
        if(e.id === Number(id)){
            e.active = !e.active
        }
    })
    res.sendStatus(200)
    
}

function deleteSingleTask (req: Request, res: Response): void {
    
    const {id} = req.query 

    const indexId = tasks.findIndex( e => e.id === Number(id))
    tasks.splice(indexId, 1)
    res.sendStatus(200)
    
}

export { getActiveTasks, getDoneTasks, insertSingleTask, switchActiveStatusTask, getAllTasks, deleteSingleTask, getAllTasksByAnswerable}