import styled from 'styled-components';
import { primaryColor, fontPrimary } from '../GlobalStyles';
import { FaInstagram, FaWhatsapp, FaSearch } from 'react-icons/fa';

const ContainerHeader = styled.header`
  background-color: ${primaryColor};
  width: 100%;
`;
const SizeHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ContentHeader1 = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: #b8b7b7;
  font-size: 0.8rem;
  font-family: ${fontPrimary};
  align-items: center;
  margin-top: .6rem;
`;
const ContentDivisor1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const LinksHeaderContent1 = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  div {
    display: flex;
    gap: 10px;
    a {
      position: relative;
      &::before {
        content: '|';
        position: absolute;
        left: 2.7rem;
        color: #a3a3a3;
      }
      &:first-child::before {
        content: '';
      }
    }
  }
`;
const ConsultoriaButtonHeader = styled.a`
  margin-left: 2rem;
`
const TextsHeaderContent1 = styled.div`
  display: flex;
  justify-content: space-between;
  p {
      &:first-of-type {
        padding-left: 1rem;
      }
      &:not(:last-child)::after {
        content: '|';
        margin: 0 30px;
        color: #a3a3a3;
      }
    }
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #555555;
  margin: .6rem 0rem;
`
const ContentHeader2 = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: .6rem;
  padding: .5rem 0rem;
`
const SeparateMenuSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  a {
    cursor: pointer;
    margin-top: 3px;
  }
`
const Title = styled.h1`
  font-family: ${fontPrimary};
  font-size: 1.2rem;
  color: #ffffff;
`;
const MenuHamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
        <ContentHeader1>
          <ContentDivisor1>
            <LinksHeaderContent1>
              <div>
                <a href="#"><FaInstagram style={{ color: '#b8b7b7', fontSize: '17px' }} /></a>
                <a href="#"><FaWhatsapp style={{ color: '#b8b7b7', fontSize: '17px' }} /></a>
              </div>
              <ConsultoriaButtonHeader>Consultoria</ConsultoriaButtonHeader>
            </LinksHeaderContent1>
            <TextsHeaderContent1>
              <p>(21) 9 0000-0000</p>
              <p>mxadvocacia@gmail.com</p>
              <p>Centro da Cidade, Rio de Janeiro.</p>
            </TextsHeaderContent1>
          </ContentDivisor1>
        </ContentHeader1>

        <Line></Line>

        <ContentHeader2>
          <Title>MX Advocacia</Title>
          <SeparateMenuSearch>
            <a href="#"><FaSearch style={{ color: '#ffffff', fontSize: '20px' }} /></a>
            <MenuHamburger>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </MenuHamburger>
          </SeparateMenuSearch>
        </ContentHeader2>

      </SizeHeader>
    </ContainerHeader>
  );
};

export default Header;
