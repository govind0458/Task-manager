import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Navgationbar from './Component/Navgationbar';
import Dashbord from './Component/Dashbord';
import { Route } from 'react-router-dom';
import CreateTask from './Component/CreateTask';
import ViewTask from './Component/ViewTask';

function App() {
  return (
  <BrowserRouter>
  <Navgationbar></Navgationbar>
  <Routes>
    <Route path='/' element={<Dashbord></Dashbord>}></Route>
    <Route path='/createtask' element={<CreateTask></CreateTask>}></Route>
    <Route path='/viewtask' element={<ViewTask></ViewTask>}></Route>
  </Routes>
  </BrowserRouter>    
  )
}
export default App;
