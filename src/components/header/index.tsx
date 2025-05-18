import { Container, HeaderContainer, HeaderContainerDesktop, HeaderContainerMobile, HeaderLogo, MenuContainer, MenuItem, PublishButton } from './HeaderStyle';
import { useState } from 'react';
import { bookOpenIcon, calendarIcon, headerToggler, logo } from '../../assets/headerAssets';
export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
    <>
        <HeaderContainer>
            <Container>
                <HeaderLogo>
                    <a href=''>{logo} <span>EcoViva</span></a>
                </HeaderLogo>
                <HeaderContainerDesktop>
                    <a href=''> {logo} <span>Ocorrências</span></a>
                    <a href=''> {calendarIcon} <span>Eventos</span></a>
                    <a href=''> {bookOpenIcon} <span>Dicas</span></a>
                    <PublishButton> Nova Publicação</PublishButton>
                </HeaderContainerDesktop>
                <HeaderContainerMobile onClick={toggleMenu}>
                    <button> {headerToggler} </button>
                </HeaderContainerMobile>
            </Container>
            <MenuContainer open={menuOpen}>
                <MenuItem>
                    <a href=''><div> {logo} <span>Ocorrências</span></div></a>
                    <a href=''><div> {calendarIcon} <span>Eventos</span></div></a>
                    <a href=''><div> {bookOpenIcon} <span>Dicas</span></div></a>
                    <div style={{padding: "0.5rem 1rem 0px"}}><PublishButton> Nova Publicação</PublishButton></div>
                </MenuItem>
            </MenuContainer>
        </HeaderContainer>
    </>
    );
}