import {StatusCodes} from 'http-status-codes'
import { TaskModel } from '../model/model.js'

export async function saveTask(req,res){
    try {
        req.body[`CreatedOn`]=new Date();
        req.body[`deadline`]=new Date(req.body.deadline);
       const data=new TaskModel(req.body);
       const task=await data.save();
       res.status(StatusCodes.CREATED).json(task);
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Error in saving task"});
    }
}

export async function fetchTask(req,res){
    try {
       const fetch= await TaskModel.find();
       res.status(StatusCodes.OK).json(fetch);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Error in fetching task"});
    }
}
export async function completedTask(req,res){
    try {
        const filter={IsCompleated:true}
       const complet= await TaskModel.find(filter);
       res.status(StatusCodes.OK).json(complet);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Error in completeing task",error:error});
    }
}

export async function incompleteTask(req, res){
    try {
        const filter={IsCompleated:false}
       const incomplete=await TaskModel.find(filter)
       res.status(StatusCodes.OK).json(incomplete);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Error in incomplete task"});
    }
}

export async function DeleteTask(req,res){
    try {
       await TaskModel.findByIdAndDelete(req.params.id);
        res.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Error deleting task"});
    }
} 


export async function MarkTask_as_Compleated(req,res){
    try {
        let newdate = new Date();
       const mark= await   TaskModel.findByIdAndUpdate(req.params.id , { CompletedOn:newdate,IsCompleted:true})
        res.status(StatusCodes.NO_CONTENT).json(mark);
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Error in updating request"});
    }
}