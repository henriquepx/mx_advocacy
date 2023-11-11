import styled from 'styled-components';
import { fontPrimary, primaryColor } from '../../GlobalStyles';

const ContainerPrincipalPage = styled.main`
  background-color: #fff;
  height: 70vh;
  width: 100%;
  display: flex;
`;

const MainContent1 = styled.div`
  transition: all 0.3s ease;
  background-color: #660000;
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &:hover {
    width: 80%;
  }
`;
const DescriptionContentMain1 = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  padding: 0rem 5rem;
`
const ImgContainerMain1 = styled.img`
  width: 30%;
`
const MainContent2 = styled.div`
  transition: all 0.3s ease;
  background-color: #b40000;
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    width: 80%;
  }
`;
const DescriptionContentMain2 = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 0rem 5rem;
`
const TitleContentMain = styled.h1`
  font-family: ${fontPrimary};
  color: #fff;
  font-size: 2.5rem;
`
const DescriptionContent1 = styled.p`
  max-width: 50ch;
  margin-left: auto;
`
const DescriptionContent2 = styled.p`
  max-width: 50ch;
  text-align: left;
`
const ButtonContent = styled.a`
  padding: .9rem 1.4rem;
  background-color: #fff;
  color: ${primaryColor};
  font-family: ${fontPrimary};
  margin-top: 2rem;
  max-width: 159px;
  margin-left: ${props => (props.align === 'right' ? 'auto' : '0')};
  margin-right: ${props => (props.align === 'left' ? 'auto' : '0')};
`
const MainPagePrincipal = () => {
  return (
    <ContainerPrincipalPage>
      <MainContent1>
        <ImgContainerMain1 src="png1.png" alt="Imagem 1" />
        <DescriptionContentMain1>
          <TitleContentMain>Lorem, ipsum dolor.</TitleContentMain>
          <DescriptionContent1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim itaque corporis, perspiciatis vero corrupti obcaecati est quo aspernatur reiciendis?</DescriptionContent1>
          <ButtonContent align="right">Conheça mais</ButtonContent>
        </DescriptionContentMain1>
      </MainContent1>
      <MainContent2>
        <DescriptionContentMain2>
          <TitleContentMain>Lorem, ipsum dolor.</TitleContentMain>
          <DescriptionContent2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta vero architecto ea reiciendis earum unde fugit odio!</DescriptionContent2>
          <ButtonContent align="left">Conheça mais</ButtonContent>
        </DescriptionContentMain2>
        <ImgContainerMain1 src="png2.png" alt="Imagem 2" />
      </MainContent2>
    </ContainerPrincipalPage>
  );
};

export default MainPagePrincipal;
