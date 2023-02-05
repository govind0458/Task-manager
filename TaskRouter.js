import express from 'express';
import { DeleteTask, MarkTask_as_Compleated, completedTask, fetchTask, incompleteTask, saveTask } from '../controller/Taskcontroller.js';

const TaskRouter=express.Router();

TaskRouter.post('/save/task',saveTask);
TaskRouter.get('/fetch/task',fetchTask);
TaskRouter.get('/task/completed',completedTask);
TaskRouter.get('/task/incompleted',incompleteTask);
TaskRouter.delete('/task/delete/:id',DeleteTask);
TaskRouter.put('/task/markcomplete/:id',MarkTask_as_Compleated);

export default TaskRouter;