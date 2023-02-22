import { createContext, useState } from "react";
import { useEffect } from "react";
import { api } from "../Services/api";
import { toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const Navigate = useNavigate()
    const [techs, setTechs] = useState([])
    const [userLogado, setUserLogado] = useState({
        name: "",
        course_module: "",
        techs: []
    })

      useEffect( ()=>{
        async function loadUsers(){
          try {
            const response = await api.get('/users')
            
          } catch (error) {
            console.log(error)
          }
        }
        loadUsers()
      }, [] )

      function notifyError(){
        toast.error('Dados incorretos!')
        }
        function notifySucess(){
            toast.success('Logado com sucesso!')
    }

    function notifyErrorRegister(){
        toast.error('Ops! Erro no cadastro')
    }
   function notifySucessRegister(){
    toast.success('Cadastro efetuado com sucesso!')
   }

            async function registerUser(data){
                const newData = {
                    
                        'name': data.name,
                        'email': data.email,
                        'password': data.password,
                        'bio': data.bio,
                        'contact': data.contact,
                        'course_module': data.course_module,
                        'techs': data.techs
                }
            
                    try {
                        const response = await api.post('/users', newData)
                        notifySucessRegister()
                        
                        Navigate('/')
                        
                        
                    } catch (error) {
                        console.error(error)
                        if(error){
                            notifyErrorRegister()
                        }
                        
                    }
            
                
            }
            function voltar(){
                Navigate(-1)
            }


    async function loginUser(data){
        const newData= {
            'email': data.email,
            'password': data.password
        } 
        try {
            const response = await api.post('/sessions', newData)
            localStorage.setItem('TOKEN', JSON.stringify(response.data.token));
            localStorage.setItem('USERID', JSON.stringify(response.data.user.id));
            notifySucess()
            Navigate('/Dashboard')
            getUserLogado()
            
        } catch (error) {
            console.error(error)
            if(error){
                notifyError()
            }
        }
       
    } 
        async function getUserLogado(){
            const token = JSON.parse(localStorage.getItem("TOKEN")) 
            try {
                const response = await api.get('/profile', 
                {
                    headers: {Authorization: `Bearer ${token}`} 
                }
              )
              console.log(response)
              setUserLogado({
                name: response.data.name,
                course_module: response.data.course_module,
                techs: response.data.techs
            })
            setTechs(response.data.techs)
            } catch (error) {
              console.log(error)
            }
          }

          function sair(){
            setUserLogado({name: '', course_module: ''})
            localStorage.clear()
            Navigate('/')
        }
    return (
        <UserContext.Provider value={{userLogado, setUserLogado, notifyError, notifySucess, notifyErrorRegister, notifySucessRegister, loginUser, registerUser, voltar, sair, getUserLogado, techs, setTechs}}>
            {children}
        </UserContext.Provider>
    )

}

