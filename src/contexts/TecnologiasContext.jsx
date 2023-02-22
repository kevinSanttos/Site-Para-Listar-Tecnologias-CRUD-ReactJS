import { createContext, useContext, useState } from "react";
import { api } from "../Services/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
export const TecnologiasContext = createContext({})

export const TecnologiasProvider = ({children}) => {
    const {techs, setTechs} = useContext(UserContext)
    
    const [modalCriaTech, setModalCriaTech] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [infosModal, setInfosModal] = useState({})

    
    
    function openCloseModal(){
        setModalCriaTech(!modalCriaTech)
    }
    function openCloseEditModal(){
        setEditModal(!editModal)
    }
    async function registerTech(data){
        try {
            const token = JSON.parse(localStorage.getItem("TOKEN")) 
            const newdata = {
                
                    "title": data.name,
                    "status": data.status
                  
            }
            const response = await api.post('/users/techs', newdata, {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            setModalCriaTech(!modalCriaTech)
            setTechs([...techs, newdata])
            toast.success("Tecnologia criada com sucesso!")
        } catch (error) {
            toast.error("Erro ao criar tecnologia!")
        }
    }
    async function editTech(data, id){
        const newdata = {
                
            "title": data.name,
            "status": data.status
          
    }
        try {
            const token = JSON.parse(localStorage.getItem("TOKEN")) 
            const response = await api.put(`/users/techs/${id}`, newdata, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            } )
          
            setEditModal(!editModal)
            toast.success("Tecnologia editada com sucesso!")
        } catch (error) {
            toast.error("Erro ao editar tecnologia!")
        }
    }
    async function deleteTech(id){
        try {
            const token = JSON.parse(localStorage.getItem("TOKEN")) 
            const response = await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newTechs = techs.filter( tech => tech.id !== id)
            setTechs(newTechs)
            setEditModal(!editModal)
            toast.success("Tecnologia excluida com sucesso!")
        } catch (error) {
            toast.error("Erro ao excluir tecnologia!")
        }
    }
    
    return(
        <TecnologiasContext.Provider value={{editTech, deleteTech, openCloseModal, modalCriaTech, setModalCriaTech, openCloseEditModal, editModal, setEditModal, registerTech, infosModal, setInfosModal}}>
                {children}
        </TecnologiasContext.Provider>
    )
    }