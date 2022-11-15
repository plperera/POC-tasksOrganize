import { Request, Response } from 'express';
import { TaskType } from '../protocols/TaskType';

const tasks: TaskType[] = 
    [
        {
            id:1,
            description:"Limpar Sala",
            active:true,
        },
        {
            id:2,
            description:"Limpar Cozinha",
            active:true,
        },
        {
            id:3,
            description:"Limpar Quarto",
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

function insertSingleTask (req: Request, res: Response): void {
    
    const {description} = req.body

    const newTask: TaskType = {
        id: tasks.length + 1,
        description,
        active:true
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

export { getActiveTasks, getDoneTasks, insertSingleTask, switchActiveStatusTask, getAllTasks, deleteSingleTask}