import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { api } from '../../Services/api';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ConteudoLoginPage } from './Conteudo_LoginPage';


export function LoginPage({setUserLogado}){
     function notifyError(){
        toast.error('Dados incorretos!')
    }
   function notifySucess(){
    toast.success('Logado com sucesso!')
   }


    const formSchema = yup.object().shape({
        email: yup.string().required('Digite o E-mail').email('E-mail inválido'),
        password: yup.string().required('Digite a senha')
    }).required()
    
    const navigate = useNavigate()
    const { register, handleSubmit, formState: {errors} } = useForm( { resolver: yupResolver(formSchema),})
    async function loginUser(data){
        const newData= {
            'email': data.email,
            'password': data.password
        }
        try {
            const response = await api.post('/sessions', newData)
            setUserLogado({
                name: response.data.user.name,
                module: response.data.user.course_module
            })
            localStorage.setItem('TOKEN', JSON.stringify(response.data.token));
            localStorage.setItem('USERID', JSON.stringify(response.data.user.id));
            notifySucess()
            navigate('/Dashboard')
            
        } catch (error) {
            console.error(error)
            if(error){
                notifyError()
            }
        }
    } 
    return(
        <ConteudoLoginPage loginUser={loginUser}/>
    )
}