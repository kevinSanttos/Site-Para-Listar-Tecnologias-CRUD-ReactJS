import { Div } from "./style"
export function HeaderRegisterPage({voltar}){
    return(
        <Div>

            <header>
                <h1>KenzieHub</h1> <button className='btnVoltar' onClick={voltar}>Voltar</button>
            </header>

        </Div>
           
    )
}