import { useContext, useEffect, useState } from "react"
import { setCommentRange } from "typescript"
import { TecnologiasContext } from "../../../contexts/TecnologiasContext"
import { UserContext} from "../../../contexts/UserContext"
import { Container, Main, Card } from "./style"
export function Dashboard_Conteudo(){
    const {techs} = useContext(UserContext)
   const { openCloseModal, openCloseEditModal, setInfosModal} = useContext(TecnologiasContext)
    function openModal(tech){
        setInfosModal(tech)
        openCloseEditModal()
        
    }
    return (
        <Main>
        <header>
            <h2>Técnologias</h2> <button onClick={openCloseModal}>+</button>
        </header>
        <Container>
                     {techs.length > 0 ? (
                     <> {techs.map(tech => (
                        <Card key={tech.id} onClick={()=>openModal(tech)}>
                            <p className="title_card">{tech.title}</p>
                            <p>{tech.status}</p>
                        </Card>))
                        }
                    
                    </>
                    )
                    :
                    (<><h2>Ainda não há tecnologias</h2></>)
                    }         
        </Container>

            
        </Main>
    )

}