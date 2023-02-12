import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { api } from "../../Services/api";
import { Main } from "./style";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


export function LoginPage({setUserLogado}){


    const formSchema = yup.object().shape({
        email: yup.string().required("Digite o E-mail").email("E-mail inválido"),
        password: yup.string().required("Digite a senha")
    }).required()
    
    const navigate = useNavigate()
    const { register, handleSubmit, formState: {errors} } = useForm( { resolver: yupResolver(formSchema),})
    async function loginUser(data){
        const newData= {
            "email": data.email,
            "password": data.password
        }
        try {
            const response = await api.post('/sessions', newData)
            setUserLogado({
                name: response.data.user.name,
                module: response.data.user.course_module
            })
            localStorage.setItem('TOKEN', JSON.stringify(response.data.token));
            localStorage.setItem('USERID', JSON.stringify(response.data.user.id));
            //toast
            navigate('/Dashboard')
            
        } catch (error) {
            console.error(error)
            //toast
        }
    }
    return(
        <Main>
            <h1>KenzieHub</h1>
            <section>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(loginUser)}>
                <label htmlFor="inputEmail">E-mail</label>
                <div className="errorInput">
                    <input id="inputEmail" placeholder="Digite seu E-mail" type="text" {...register("email")} />
                    <span>{ errors.email && errors.email.message}</span>
                </div>
               
                <label htmlFor="inputPAssword">Senha</label>
                <div className="errorInput">
                    <input id="inputPAssword" placeholder="Digite sua senha" type="password" {...register("password")} />
                    <span>{ errors.password && errors.password.message}</span>
                </div>
                
                <button type="submit">Entrar</button>
            </form>
            <p>Ainda não possui uma conta?</p>
            <Link className="link" to={'/Register'}>Cadastre-se</Link>
            </section>
            
        </Main>
    )
}