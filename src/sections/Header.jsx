import styled from 'styled-components';
import { primaryColor, fontPrimary } from '../GlobalStyles';

const ContainerHeader = styled.header`
  background-color: ${primaryColor};
  width: 100%;
`;
const SizeHeader = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  height: 8vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-family: ${fontPrimary};
  font-size: 1.2rem;
  color: #ffffff;
`;
const Consultoria = styled.a`
  font-family: ${fontPrimary};
  font-size: .8rem;
  background-color: #fff;
  color: ${primaryColor};
  text-transform: uppercase;
  padding: .5rem 1.2rem;
`
const MenuHamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  span {
    width: 25px;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
    margin: 2px 0px;
  }
  span:nth-child(1) {
    width: 12px;
  }
  span:nth-child(2) {
    width: 16px;
  }
  span:nth-child(4) {
    width: 13px;
  }
  &:hover span {
    width: 25px;
  }
`;

const Header = () => {
  return (
    <ContainerHeader>
      <SizeHeader>
        <MenuHamburger>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </MenuHamburger>
        <Title>MX Advocacia</Title>  
        <Consultoria href="#">Contato →</Consultoria>
      </SizeHeader>
    </ContainerHeader>
  );
};

export default Header;
