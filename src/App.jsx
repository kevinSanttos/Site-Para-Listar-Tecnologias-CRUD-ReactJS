import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { DashboardPage } from './Pages/DashboardPage';
import { RegisterPage } from './Pages/RegisterPage';
import { ToastContainer, Zoom } from 'react-toastify';
import { TecnologiasProvider } from './contexts/TecnologiasContext';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <main className='App'>
      <ToastContainer autoClose={6000} draggable={false} transition={Zoom}/>
        <Routes>
            <Route path='/' element={<LoginPage></LoginPage>}/>
            <Route path='/Register' element={<RegisterPage></RegisterPage>}/>
           
                <Route path='/Dashboard' element={
                <TecnologiasProvider>
                  <DashboardPage></DashboardPage>
                </TecnologiasProvider>}/>
           
          
        </Routes>
    </main>
  );
}

export default App;
