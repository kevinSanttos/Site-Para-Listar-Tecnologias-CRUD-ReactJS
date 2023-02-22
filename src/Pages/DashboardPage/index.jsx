import { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Main } from './style'
import { Dashboard_Conteudo } from './Dashboard_Conteudo'
import { TecnologiasContext } from '../../contexts/TecnologiasContext'
import { ModalCriaTech } from './ModalCriaTech'
import { ModalEditaTecnologia } from './ModalEditaTecnologia'
export function DashboardPage(){
    const {userLogado, sair, getUserLogado} = useContext(UserContext)
    const {modalCriaTech, editModal} = useContext(TecnologiasContext)
    useEffect(()=>{
        getUserLogado()
    }, [])
    
    return(
        <Main>
            {modalCriaTech && (<ModalCriaTech></ModalCriaTech>)}
            {editModal && (<ModalEditaTecnologia></ModalEditaTecnologia>)}
            <header><h1>Kenzie Hub</h1> <button onClick={sair}>Sair</button></header>
            <section>
                <div>
                    <h2>Olá, {userLogado.name}</h2>
                    <p>{userLogado.course_module}</p>
                   
                </div>
            </section>
            <div className='div'>
                <Dashboard_Conteudo></Dashboard_Conteudo>
            </div>
           
           
        </Main>
    )
}