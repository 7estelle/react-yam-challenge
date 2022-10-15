import styled, { css } from 'styled-components'

export const CreditsElement = styled.p`
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    width: fit-content;
    text-align: center;
    padding: 2rem;
    left: 50%;
    transform: translateX(-50%);

    a{
        margin: 2px;
        color: #F7931A;
        transition: all 0.2s ease-in-out;

        &:hover{
            color: #F3D78A;
        }

    }
`