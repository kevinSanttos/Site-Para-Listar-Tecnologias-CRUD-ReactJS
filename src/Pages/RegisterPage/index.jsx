import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { api } from "../../Services/api"
import { Main } from "./style"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function RegisterPage(){
    function notifyError(){
        toast.error("Ops! Erro no cadastro")
    }
   function notifySucess(){
    toast.success("Cadastro efetuado com sucesso!")
   }
   
    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória").matches(/(\d)/, "Deve conter ao menos 1 número")
        .matches(/([a-z])/, 'Deve conter ao menos 1 letra')
        .matches(/(\W|_)/, "deve conter ao menos um caractér especial")
        .matches(/.{8,}/, "Deve conter no mínimo 8 caractéres"),
        confirmPassword: yup.string().required("Confirme a senha").oneOf([yup.ref('password')], "Confirmação de senha precisa ser igual á senha"),
        bio: yup.string().required("Bio obrigatória"),
        contact: yup.string().required("Contato obrigatório"),
        course_module: yup.string().required("Módulo obrigatório")
       }).required()

    const { 
        register,
        handleSubmit,
        formState: { errors } ,
        } = useForm({
        resolver: yupResolver(formSchema),
    }
    )
    async function registerUser(data){
        console.log(data)
        const newData = {
            
                "name": data.name,
                "email": data.email,
                "password": data.password,
                "bio": data.bio,
                "contact": data.contact,
                "course_module": data.course_module
                
            
        }
       
            try {
                const response = await api.post('/users', newData)
                notifySucess()
                
                navigate('/')
                
                
            } catch (error) {
                console.error(error)
                if(error){
                    notifyError()
                }
                
            }
       
        
    }
    function voltar(){
        navigate(-1)
       }

      
    return(
        <Main>
            
            
            <header>
                <h1>KenzieHub</h1> <button className="btnVoltar" onClick={voltar}>Voltar</button>
            </header>
            
            <section>
                <h2>Crie sua conta</h2>
                <p>Rápido e grátis, vamos nessa</p>
                <form onSubmit={handleSubmit(registerUser)}>
                    <label htmlFor="nome">Nome</label>
                    <div className="divInput_Error">
                        <input type="text" placeholder="Digite aqui seu nome" {...register("name")}/>
                        <span>{ errors.name && errors.name.message}</span>
                    </div>
                    
                    <label htmlFor="email">E-mail</label>
                    <div className="divInput_Error">
                        <input type="text" placeholder="Digite aqui seu E-mail" {...register("email")}/>
                        <span>{ errors.email && errors.email.message}</span>
                    </div>
                    
                    <label htmlFor="password">Senha</label>
                    <div className="divInput_Error">
                        <input type="password" placeholder="Digite aqui sua senha" {...register("password")}/>
                        <span>{ errors.password && errors.password.message}</span>
                    </div>
                    
                    <label htmlFor="confirmPassword">Confirmar senha</label>
                    <div className="divInput_Error">
                        <input type="password" placeholder="Repita sua senha" {...register("confirmPassword")}/>
                        <span>{ errors.confirmPassword && errors.confirmPassword.message }</span>
                    </div>
                    
                    <label htmlFor="bio">Bio</label>
                    <div className="divInput_Error">
                        <input type="text" placeholder="Fale sobre você" {...register("bio")}/>
                        <span>{ errors.bio && errors.bio.message}</span>
                    </div>
                   
                    <label htmlFor="contact">Contato</label>
                    <div className="divInput_Error">
                        <input type="text" placeholder="Opção de contato" {...register("contact")}/>
                        <span>{ errors.contact && errors.contact.message}</span>
                    </div>
                    
                    <label htmlFor="nome">Selecionar módulo</label>
                    <select {...register("course_module")}>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
                        
                    </select>
                    { errors.course_module && errors.course_module.message}
                    <button type="submit">Cadastrar</button>
                </form>
            </section>
            
        </Main>
    )
}