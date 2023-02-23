import { useContext } from "react"
import { TecnologiasContext } from "../../../contexts/TecnologiasContext"
import { Modal } from "./style"
import { Fundo } from "./style"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
export function ModalCriaTech(){
   const {openCloseModal, registerTech, setInfosModal} = useContext(TecnologiasContext)

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
    openCloseModal()
    setInfosModal({})
}
   
    return(
        <Fundo>
            <Modal>
            <header><h3>Cadastrar Tecnologia</h3> <button onClick={close}>X</button></header>
            <form onSubmit={handleSubmit(registerTech)}>
                <label htmlFor="name">Nome</label>
                    <input type="text" id="name" {...register('name')}/>
                    <span>{ errors.name && errors.name.message}</span>
                    <label htmlFor="status">Selecionar status</label>
                    <select name="" id="status" {...register('status')}>
                    
                        <option data="" type="">Iniciante</option>
                        <option data="" type="">Intermediário</option>
                        <option data="" type="">Avançado</option>
                    
                    </select>
                   
                    <button type="submit">Cadastrar Tecnologia</button>

            </form>
           
            </Modal>
        </Fundo>
        
    )
}