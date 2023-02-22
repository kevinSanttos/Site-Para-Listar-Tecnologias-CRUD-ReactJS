import styled from "styled-components"

export const Fundo = styled.div`
    background-color: black;
    opacity: 0.8;
    min-width: 100vw;
    min-height: 100vh;
    position: absolute;
   
`

export const Modal = styled.div`
    background-color: #212529;
    width: 90%;
    height: 342px;
    color: white;
    margin: auto;
    position: absolute;
    left: 5%;
    top: 50%;
    margin-top: -171px;
    opacity: 1;
   
    @media(min-width: 400px){
        width: 368px;
        left: 50%;
        margin-left: -184px;
    }
    header{
        background-color: #343B41;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        padding: 0px;
        margin-bottom: 30px;
        
        h3{
            margin-top: 10px;
            font-size: 20px;
            margin-left: 3%;
        }
        button{
            padding: 0px;
            border: none;
            margin-top: 5px;
            background-color: transparent;
            cursor: pointer;
        }
    }
    form{
        input{
            display: block;
            margin: auto;
            width: 90%;
            height: 38.5px;
            border-radius: 4px;
            padding: 0px;
           
        }
        label{
            display: block;
            margin-top: 15px;
            margin-bottom: 5px;
        }
        select{
            display: block;
            margin: auto;
            width: 90%;
            height: 44px;
            border-radius: 4px;
            margin-bottom: 10px;
            
        }
        button{
            display: inline;
            height: 44px;
            border-radius: 4px;
            background-color: #868E96;
            width: 30%;
        }
        .editbtn{
            height: 44px;
            background-color: #59323F;
            width: 50%;
        }
        span{
            color: red;
            font-size: 12px;
            margin-left: 20px;
        }
       
    }
`