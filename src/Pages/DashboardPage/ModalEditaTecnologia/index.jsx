import { useContext } from "react"
import { TecnologiasContext } from "../../../contexts/TecnologiasContext"
import { Modal } from "./style"
import { Fundo } from "./style"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
export function ModalEditaTecnologia(){
    const {editTech, deleteTech, openCloseEditModal, infosModal, setInfosModal} = useContext(TecnologiasContext)

    const formSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        status: yup.string().required('Status obrigatório')    

    }).required()

    const { 
        register,
        handleSubmit,
        formState: { errors } ,
        } = useForm({
        resolver: yupResolver(formSchema),
    }
    ) 
    function close(){
        openCloseEditModal()
        setInfosModal({})
    }
     function teste(data){
        
        editTech(data, infosModal.id) 
    }
    return(
        <Fundo>
            <Modal>
                <header><h3>Tecnologia Detalhes</h3> <button onClick={close}>X</button></header>
                <form action="" onSubmit={handleSubmit(teste)}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" defaultValue={infosModal.title} {...register('name')} />
                    
                    <label htmlFor="status"></label>
                    <select name="" id="status" {...register('status')}>
                    
                        <option data="" type="">Iniciante</option>
                        <option data="" type="">Intermediário</option>
                        <option data="" type="">Avançado</option>
                    
                    </select>
                    
                    <button className="editbtn" type="submit">Salvar alterações</button> <button type="button" onClick={()=>deleteTech(infosModal.id)}>Excluir</button>
                </form>
                
            </Modal>
        </Fundo>
    )
}