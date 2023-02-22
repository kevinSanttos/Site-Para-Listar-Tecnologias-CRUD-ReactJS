import styled from "styled-components";

export const Main = styled.main`
    padding-top: 30px;
    background-color: black;
    width: 100%;
    min-height: 100vh;
    color: white;
    align-items: center;
    text-align: center;
    header{
        display: flex;
        justify-content: space-between;
        width: 95%;
        padding: 0px 10px;
        max-width: 800px;
            margin: auto;
            @media(min-width: 800px){
            padding: 0px;
        }
    }
    h1{
        color: #FF577F;
    }
    button{
        background-color: #212529;
        border: 1px solid gray;
        padding: 0x 16px;
        height: 40px;
        color: white;
        cursor: pointer;
        width: 70px;
        margin-top: 20px;
    }
    section{
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
        width: 95%;
        padding: 50px 10px;
        @media(min-width: 800px){
            padding: 0px;
            width: 100%;
        }

        div{
            width: 100%;
            max-width: 800px;
            margin: auto;
            display: block;
            text-align: left;
            justify-content: space-between;
            @media(min-width: 800px){
                display: flex;
            }


            p{
                color: gray;
                margin-top: 30px;
            }
        }
    }
    .div{
        width: 100%;
        max-width: 800px;
        text-align: left;
        margin: auto;
    }
   
`