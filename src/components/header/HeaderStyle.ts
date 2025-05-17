import styled from "styled-components";

interface HeaderProps {
    open: boolean;
}

export const HeaderContainer = styled.header`
    display:block;
    position: sticky;
    font-family: Open Sans, sans-serif;
    z-index: 50;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
    top: 0;
    background-color: #fff;
`;
export const Container = styled.nav`
    display: flex;
    padding: 0 1rem;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    max-width: 1280px;
    @media (min-width: 600px) {
        padding: 0px 1.5rem; 
    }
`
export const HeaderLogo = styled.div`
    float: left;
    a {
        display: flex;
        color: rgb(109, 201, 50);
        text-decoration: none;
        span {
            margin-left: 0.5rem;
            font-size: 1.25rem;
            font-weight: 600;
            }
        }
`
export const HeaderContainerDesktop = styled.div`
    display: none;
    align-items: center;
    @media (min-width: 769px) {
        display: flex;
    }
        a {
            display: flex;
            align-items: center;
            color: rgb(53, 102, 26);
            text-decoration: none;
            margin: 0 .5rem;
            padding: 0.5rem .9rem;
            border-radius: 0.375rem;
            transition: 0.15s ease-in-out;
            &:hover {
                background-color: rgb(230, 250, 207);
                }
            svg {
                margin-right: 0.25rem;
            }
        }
    
`
export const HeaderContainerMobile = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            color: green;
            background: transparent;
            border: none;
        }  
    }   
`;
export const MenuContainer = styled.div<HeaderProps>`
    @media (max-width: 768px) {
        display: ${(props) => (props.open ? "block" : "none")};
        border-top: 1px solid rgb(224, 247, 197);
        animation: 0.3s ease-out 0s 1 normal none running fadeIn;
    }
`;
export const MenuItem = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
        padding: 0.5rem 1rem 1rem;
        margin: 0 auto;
        a {
            display: block;
            padding: 0.5rem 1rem;
            color: rgb(53, 102, 26);
            text-decoration: none;
            margin-bottom: 0.25rem;
            div {
                display: flex;
                align-items: center;
                svg {
                    margin-right: 0.5rem;
                }
            }
        }
        
    }
`
export const PublishButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: 0.15s ease-in-out;
    font-size: 1rem;
    background-color: rgb(109, 201, 50);
    border: none;
    color: white;
    border-radius: 0.375rem;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
        background-color: rgb(81, 175, 44);
    }
`