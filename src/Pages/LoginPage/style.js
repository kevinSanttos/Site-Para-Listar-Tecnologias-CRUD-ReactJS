import styled from "styled-components";

export const Main = styled.main`
    padding-top: 30px;
    background-color: black;
    width: 100%;
    min-height: 100vh;
    color: white;
    align-items: center;
    text-align: center;
    input{
        border: 2px solid white;
        border-radius: 3px;
        display: block;
        margin: auto;
        width: 85%;
        height: 48px;
        padding: 0px 13px;
        background-color: transparent;
        margin-top: 10px;
        
    }
    label{
        margin-left: -70%;
    }
     h1{
        color: #FF577F;
        margin-top: 50px;
     }
     h2{
        margin-bottom: 45px;
     }
     button{
        background-color: #FF577F;
        color: white;
        border: none;
        border-radius: 3px;
        width: 90%;
        height: 48px;
        padding: 0px 15px;
        margin-top: 20px;
        cursor: pointer;
     }
     p{
        color:gray;
        margin: 50px 0px;
     }
     
     section{
        background-color: #212529;
        width: 80%;
        padding: 34px 18px;
        height: 400px;
        margin: auto;
        height: 500px;
        border-radius: 3px;
        @media(min-width: 600px){
            width: 450px;
        }

        .link{
            background-color: gray;
            color: white;
            text-decoration: none;
            padding: 15px 100px;
            border-radius: 3px;
     }
     }
     @media(min-width: 600px){
        input{
            width: 379px;
        }
        button{
            width: 379px;
        }
        .link{
            padding: 15px 200px;
        }
     }
     span{
      color: red;
      font-size: 12px;
      margin-left: 20px;
      
      
     }
     .errorInput{
        text-align: left;
     }
`