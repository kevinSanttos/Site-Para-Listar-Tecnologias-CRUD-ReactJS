import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import 'react-toastify/dist/ReactToastify.css';
import { ConteudoLoginPage } from './Conteudo_LoginPage';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';


export function LoginPage(){
    const {setUserLogado, notifyError, notifySucess} = useContext(UserContext)
    
   
    const formSchema = yup.object().shape({
        email: yup.string().required('Digite o E-mail').email('E-mail inválido'),
        password: yup.string().required('Digite a senha')
    }).required()
    
    
    return(
        <ConteudoLoginPage/>
    )
}