import styled, {css} from 'styled-components'

type PropsType = {
    active?: boolean
}

export const NavigationContainer = styled.div`
    background: #040412;
    border-radius: 10px;
    /* display: flex;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;

    ul {
        display: flex;
        gap: 20px;
        list-style: none;
        margin: 0;
        padding: 1rem;
    }
    
    h1{
        text-align: center;
    }

    ul:last-of-type {
        justify-self: flex-end;
        li{
            padding: 1rem;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 1.2rem;
        }
        img{
        width: 24px;
        height: 24px;
    }
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
