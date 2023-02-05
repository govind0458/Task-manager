import axios from 'axios';
export function saveTask(task){
    return axios.post('http://localhost:9900/save/task',task);
}

export function GetTask(){
    return axios.get('http://localhost:9900/fetch/task');
}

export function DeleteTask(id){
    return axios.delete(`http://localhost:9900/task/delete/${id}`);
}
export function incompleated(){
    return axios.get('http://localhost:9900/task/incompleated');
}

export function MarkAscompleated(id){
    return axios.put(`http://localhost:9900/task/markcomplete/${id}`);
}