import styled, {css} from 'styled-components'

type PropsType = {
    active?: boolean
}

export const NavigationContainer = styled.div`
    background: #040412;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 1rem;
    }  
`

export const NavElement = styled.li<PropsType>`
${props => {
    return css`
        a{
        display: inline-block;
        padding: 1rem;
        color: #4B4B78;
        text-decoration: none;
    }
    transition: all 0.1s ease-in-out;

    &:hover{
        a{
            color: #fff;
        }
        box-shadow:inset 0px -2px 0px 0px #474de9;
    }

    ${props.active == true && `
    &:nth-child(1){
        a{
            color: #fff;
        }
        box-shadow:inset 0px -2px 0px 0px #474de9;
    }
    `
    }

    ${props.active == false && `
    &:nth-child(2){
        a{
            color: #fff;
        }
        box-shadow:inset 0px -2px 0px 0px #474de9;
    }
    `
    }
    `
}}

`
