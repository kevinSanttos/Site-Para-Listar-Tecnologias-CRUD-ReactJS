import { useContext } from "react"
import { UserContext } from "../../../contexts/UserContext"
import { Div } from "./style"
export function HeaderRegisterPage(){
    const {voltar} = useContext(UserContext)
    return(
        <Div>
            <header>
                <h1>KenzieHub</h1> <button className='btnVoltar' onClick={voltar}>Voltar</button>
            </header>
        </Div>
           
    )
}