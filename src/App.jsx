import { Routes, Route, Outlet, BrouserRouter } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { DashboardPage } from './Pages/DashboardPage';
import { RegisterPage } from './Pages/RegisterPage';
import { ToastContainer, Zoom } from 'react-toastify';
import { TecnologiasProvider } from './contexts/TecnologiasContext';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from './Pages/ProtectedRoute';

function App() {

  return (
    <main className='App'>
      <ToastContainer autoClose={6000} draggable={false} transition={Zoom}/>
        <Routes>
            <Route exact path='/' element={<LoginPage></LoginPage>}/>
            <Route exact path='/Register' element={<RegisterPage></RegisterPage>}/>
           
                <Route exact path='/Dashboard' element={ <ProtectedRoute/>}>
                    <Route index element={
                        <TecnologiasProvider>
                          <DashboardPage></DashboardPage>
                        </TecnologiasProvider>
                    }/>
                  
                </Route>
            
        </Routes>
    </main>
  );
}

export default App;
