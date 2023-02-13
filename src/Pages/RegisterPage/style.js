import styled from "styled-components";

export const Main = styled.main`
    padding-top: 30px;
    background-color: black;
    width: 100%;
    min-height: 100vh;
    color: white;
    align-items: center;
    text-align: center;
    input, select{
        border: none;
        border-radius: 3px;
        display: block;
        margin: auto;
        width: 85%;
        height: 48px;
        padding: 0px 13px;
        background-color: #212529;
        margin-top: 10px;
       
    }
    
     h2{
        
     }
     button{
        background-color: #59323F;
        color: white;
        border: none;
        border-radius: 3px;
        width: 90%;
        height: 48px;
        padding: 0px 15px;
        margin-top: 20px;
        cursor: pointer;
        margin-left: 15px;
     }
     select option{
        color: gray;
     }
     p{
        color: gray;
     }
     section{
        background-color: transparent;
        border: 1px solid gray;
        width: 80%;
        padding: 34px 18px;
        height: 400px;
        margin: auto;
        height: 820px;
        border-radius: 3px;
        max-width: 440px;
     }
     form{
        text-align: left;
     }
     label{
        margin-left: 25px;
     }
     span{
      color: red;
      font-size: 12px;
      margin-left: 20px;
      
      
     }
     .divInput_Error{
      

     }
`