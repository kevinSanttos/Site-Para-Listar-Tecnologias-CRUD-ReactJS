import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { api } from '../../Services/api'
import { Main } from './style'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Conteudo_RegisterPage } from './Conteudo_RegisterPage'
import { HeaderRegisterPage } from './HeaderRegisterPage'

export function RegisterPage(){
    function notifyError(){
        toast.error('Ops! Erro no cadastro')
    }
   function notifySucess(){
    toast.success('Cadastro efetuado com sucesso!')
   }
   
    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
        password: yup.string().required('Senha obrigatória').matches(/(\d)/, 'Deve conter ao menos 1 número')
        .matches(/([a-z])/, 'Deve conter ao menos 1 letra')
        .matches(/(\W|_)/, 'deve conter ao menos um caractér especial')
        .matches(/.{8,}/, 'Deve conter no mínimo 8 caractéres'),
        confirmPassword: yup.string().required('Confirme a senha').oneOf([yup.ref('password')], 'Confirmação de senha precisa ser igual á senha'),
        bio: yup.string().required('Bio obrigatória'),
        contact: yup.string().required('Contato obrigatório'),
        course_module: yup.string().required('Módulo obrigatório')
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
            
                'name': data.name,
                'email': data.email,
                'password': data.password,
                'bio': data.bio,
                'contact': data.contact,
                'course_module': data.course_module
                
            
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
            <HeaderRegisterPage voltar={voltar}/>

            <Conteudo_RegisterPage register={register} notifyError={notifyError} notifySucess={notifySucess} handleSubmit={handleSubmit} registerUser={registerUser}/>
        </Main>
    )
}