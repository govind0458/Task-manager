import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    
    name:{type:String,required:true},
    description:{type:String,required:true},
    CreatedOn:{type:Date},
    deadline:{type:Date,required:true},
    CompletedOn:{type:Date},
    IsCompleted:{type:Boolean,default:false}

})

export const TaskModel=mongoose.model('TaskModel',TaskSchema);