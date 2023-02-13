import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { LoginPage } from './Pages/LoginPage';
import { DashboardPage } from './Pages/DashboardPage';
import { RegisterPage } from './Pages/RegisterPage';
import { api } from './Services/api';
import { useState } from "react";
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [userLogado, setUserLogado] = useState({
    name: '',
    module: ''
  })

  useEffect( ()=>{
    async function loadUsers(){
      try {
        const response = await api.get('/users')
      } catch (error) {
        console.log(error)
      }
    }
    loadUsers()
  }, [] )

  return (
    <main className='App'>
      <ToastContainer autoClose={6000} draggable={false} transition={Zoom}/>
        <Routes>
          <Route path='/' element={<LoginPage setUserLogado={setUserLogado}></LoginPage>}/>
          <Route path='/Register' element={<RegisterPage></RegisterPage>}/>
          <Route path='/Dashboard' element={<DashboardPage userLogado={userLogado} setUserLogado={setUserLogado}></DashboardPage>}/>
        </Routes>
    </main>
  );
}

export default App;
