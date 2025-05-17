import { Container, HeaderContainer, HeaderContainerMobile, HeaderLogo, MenuContainer, MenuItem, PublishContainer } from './HeaderStyle';
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
                <HeaderContainerMobile onClick={toggleMenu}>
                    <button> {headerToggler} </button>
            </HeaderContainerMobile>
            </Container>
            <MenuContainer open={menuOpen}>
                <MenuItem>
                    <a href=''><div> {logo} <span>Ocorrências</span></div></a>
                    <a href=''><div> {calendarIcon} <span>Eventos</span></div></a>
                    <a href=''><div> {bookOpenIcon} <span>Dicas</span></div></a>
                    <PublishContainer>
                        <button>Nova Publicação</button>
                    </PublishContainer>
                </MenuItem>
            </MenuContainer>
        </HeaderContainer>
    </>
    );
}