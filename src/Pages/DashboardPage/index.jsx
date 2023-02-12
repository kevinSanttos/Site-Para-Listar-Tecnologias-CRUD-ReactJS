import { useNavigate } from "react-router-dom"
import { Main } from "./style"
export function DashboardPage({userLogado, setUserLogado}){
    const navigate = useNavigate()
    function sair(){
        setUserLogado({name: '', module: ''})
        localStorage.clear()
        navigate(-1)
    }
    return(
        <Main>
            <header><h1>Kenzie Hub</h1> <button onClick={sair}>Sair</button></header>
            <section>
                <div>
                    <h2>Olá, {userLogado.name}</h2>
                    <p>{userLogado.module}</p>
                </div>
            </section>
            <div className="div">
                <h2>Que pena estamos em desenvolvimento :{"("}</h2>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </div>
           
           
        </Main>
    )
}