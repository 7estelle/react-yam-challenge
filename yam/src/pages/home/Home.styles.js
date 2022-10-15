import styled from 'styled-components'

export const HomeContainer = styled.div`

    text-align: center;
    margin: 2rem;
    input{
        background-color: #060711;
        padding: 1rem;
        margin: 1rem;
        border: none;
        border-radius: 10px;
        color: #474de9;
        text-align: center;
        &:focus{
            outline: #4B4B78 solid 2px;
        }
    }

    button{
        cursor: pointer;
        background-color: #485CF3;
        color: #fff;
        padding: 1rem;
        margin: 1rem;
        max-width: 500px;
        width: 80%;
        border-radius: 10px;
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: 2px;
        transition: all 0.3s ease-in-out;
        &:hover{
            transform: scale(0.98);
        }
    }
`
