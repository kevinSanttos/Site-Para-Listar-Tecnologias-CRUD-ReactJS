import { useForm } from 'react-hook-form'
import { Main } from './style'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Conteudo_RegisterPage } from './Conteudo_RegisterPage'
import { HeaderRegisterPage } from './HeaderRegisterPage'
import { UserContext } from '../../contexts/UserContext'
import { useContext } from 'react'

export function RegisterPage(){

    const {notifyErrorRegister, notifySucessRegister} = useContext(UserContext)
   
    
    
      
    return(
        <Main>
            <HeaderRegisterPage/>

            <Conteudo_RegisterPage />
        </Main>
    )
}