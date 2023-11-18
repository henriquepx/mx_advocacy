import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fontPrimary } from '../GlobalStyles';

const menuOpenAnimation = keyframes`
  from {
    transform: translate3d(200%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const MenuHamburgerContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 20rem;
  right: ${({ isOpen }) => (isOpen ? '0' : '-20rem')};
  top: 0;
  z-index: 500;
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  animation: ${({ isOpen }) => (isOpen ? menuOpenAnimation : 0 )} 0.4s ease-in-out;
  padding: 5rem 1.5rem;
  h1 {
    text-align: center;
    font-family: ${fontPrimary};
    color: #000000;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const Menu = ({ isOpen }) => {
  return (
    <MenuHamburgerContainer isOpen={isOpen}>
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
  );
};

Menu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};

export default Menu;
