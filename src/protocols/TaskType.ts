export type TaskType = {

    //createdBy?:string,

    id:number,
    description:string,
    answerable: string,
    until: string | Date,
    active: boolean
    
}
export type TaskTypeWithoutUntil = Omit<TaskType, "until">