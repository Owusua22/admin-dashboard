import React from 'react';
import "./App.css"
import Home from './Components/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';
import TopBar from './Components/Topbar/TopBar';
import {BrowserRouter as AppRouter, Routes, Route } from "react-router-dom";
import UserList from "./Components/UserList/UserList"
import User from './Components/Users/User';
import Newuser from './Components/newUser/Newuser';



const App = () => {
  return (
    <AppRouter>
      <TopBar />
      <div className='container'>
        <Sidebar />
        
         
        <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/users' element={< UserList />} />
        <Route path='users/user/:userId' element={<User />} />
        <Route path='users/user/newuser' element={<Newuser/>} />
 
        </Routes>
       
      </div>




    </AppRouter>
  );
}

export default App;
