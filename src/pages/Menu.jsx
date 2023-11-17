import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fontPrimary } from '../GlobalStyles';

const MenuHamburgerContainer = styled.div`
    position: fixed;
    height: 100%;
    width: 20rem;
    right: 0;
    top: 0;
    z-index: 999;

    background-color: #1b1b1b;

    display: flex;
    flex-direction: column;
    padding: 3rem 1.7rem;
    h1 {
        text-align: center;
        font-family: ${fontPrimary};
        color: #fff;
        font-size: 1.2rem;
    }
`

const Menu = ( ) => {
  return (
      <MenuHamburgerContainer>
          <h1>MX Advocacia</h1>
          <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profissionais">Profissionais</Link>
            </li>
            <li>
                <Link to="/areasatuacao">Áreas de Atuação</Link>
            </li>
            <li>
                <Link to="/contato">Contato</Link>
            </li>
            </ul>
        </nav>

    </MenuHamburgerContainer>
  )
}


export default Menu;