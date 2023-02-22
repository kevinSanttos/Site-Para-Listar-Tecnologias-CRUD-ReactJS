import styled from "styled-components";

export const Main = styled.main`
    margin: 0;
    padding: 0;
    header{
        margin-bottom: 20px;
    }
    header > button{
        width: 50px;
    }
`

export const Container = styled.div`

        background-color: #212529;
        width: 90%;
        height: 400px;
        overflow-y: auto;
        margin: auto;
        @media (min-width: 800px) {
            padding: 0px 30px;
        }
`
export const Card = styled.div`
 background-color: #121214;
 width: 85%;
 height: 50px;
 margin-top: 20px;
 margin-left: 5%;
 border-radius: 4px;
 color: white;
 display: flex;
justify-content: space-between;
padding: 0px 10px;
:hover{
    background-color: #343B41;
    cursor: pointer;
}
@media (min-width: 800px) {
            width: 93%;
            margin-left: 2.5%;
        }
.title_card{
    color:white;
    font-size: 23px;
    margin-top: 12px;
}
p{
    color: #868E96;
}

`