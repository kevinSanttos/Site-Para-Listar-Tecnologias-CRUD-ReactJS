import { useContext } from "react"
import { TecnologiasContext } from "../../../contexts/TecnologiasContext"
import { Modal } from "./style"
import { Fundo } from "./style"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
export function ModalEditaTecnologia(){
    const {editTech, deleteTech, openCloseEditModal, infosModal} = useContext(TecnologiasContext)
    console.log(infosModal)

    const formSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        status: yup.string().required('Status obrigatório')    

    }).required()

    const { 
        edit,
        handleSubmit,
        formState: { errors } ,
        } = useForm({
        resolver: yupResolver(formSchema),
    }
    ) 
    return(
        <Fundo>
            <Modal>
                <header><h3>Tecnologia Detalhes</h3> <button onClick={openCloseEditModal}>X</button></header>
                <form action="" onSubmit={handleSubmit(()=>editTech(infosModal.id))}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" defaultValue={infosModal.title} {...('name')} />
                    <span>{ errors.name && errors.name.message}</span>
                    <label htmlFor="status">Selecionar status</label>
                    <select name="" id="status" {...('status')}>
                    
                        <option data="" type="">Iniciante</option>
                        <option data="" type="">Intermediário</option>
                        <option data="" type="">Avançado</option>
                    
                    </select>
                    
                    <button className="editbtn" type="submit">Salvar alterações</button> <button onClick={()=>deleteTech(infosModal.id)}>Excluir</button>
                </form>
                
            </Modal>
        </Fundo>
    )
}