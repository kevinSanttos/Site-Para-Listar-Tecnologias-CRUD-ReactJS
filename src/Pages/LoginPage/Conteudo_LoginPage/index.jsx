import { Main } from './style'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'

export function ConteudoLoginPage({loginUser}){

    const formSchema = yup.object().shape({
        email: yup.string().required('Digite o E-mail').email('E-mail inválido'),
        password: yup.string().required('Digite a senha')
    }).required()
    
    const navigate = useNavigate()
    const { register, handleSubmit, formState: {errors} } = useForm( { resolver: yupResolver(formSchema),})

    return (
        <Main>
            <h1>KenzieHub</h1>
            <section>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(loginUser)}>
                <label htmlFor='inputEmail'>E-mail</label>
                <div className='errorInput'>
                    <input id='inputEmail' placeholder='Digite seu E-mail' type='text' {...register('email')} />
                    <span>{ errors.email && errors.email.message}</span>
                </div>
               
                <label htmlFor='inputPAssword'>Senha</label>
                <div className='errorInput'>
                    <input id='inputPAssword' placeholder='Digite sua senha' type='password' {...register('password')} />
                    <span>{ errors.password && errors.password.message}</span>
                </div>
                
                <button type='submit'>Entrar</button>
            </form>
            <p>Ainda não possui uma conta?</p>
            <Link className='link' to={'/Register'}>Cadastre-se</Link>
            </section>
        </Main>
    )
}