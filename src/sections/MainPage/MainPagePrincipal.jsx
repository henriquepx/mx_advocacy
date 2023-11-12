import styled from 'styled-components';
import { fontPrimary, primaryColor } from '../../GlobalStyles';

const Container = styled.main`
  background-color: #fff;
  height: 70vh;
  width: 100%;
  display: flex;
`;

const MainContent = styled.div`
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: ${props => props.backgroundColor};
  &:hover {
    width: 80%;
  }
`;

const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  text-align: ${props => (props.align === 'right' ? 'right' : 'left')};
`;

const ImgContainer = styled.img`
  width: 30%;
`;

const Title = styled.h1`
  font-family: ${fontPrimary};
  color: #fff;
  font-size: 2rem;
`;

const Description = styled.p`
  max-width: 50ch;
  margin-left: 0;
  text-align: ${props => (props.align === 'left' ? 'left' : 'right')};
`;

const Button = styled.a`
  padding: 0.9rem 1.4rem;
  background-color: #fff;
  color: ${primaryColor};
  font-family: ${fontPrimary};
  margin-top: 2rem;
  max-width: 159px;
  margin-left: ${props => (props.align === 'right' ? 'auto' : '0')};
  margin-right: ${props => (props.align === 'left' ? 'auto' : '0')};
`;

const MainPagePrincipal = () => {
  return (
    <Container>
      <MainContent backgroundColor="#d40404">
        <ImgContainer src="png1.png" alt="Imagem 1" />
        <DescriptionContent>
          <TextContainer align="right">
            <Title>Advocacia para mulheres.</Title>
            <Description align="right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim itaque corporis, perspiciatis vero corrupti obcaecati est quo aspernatur reiciendis?</Description>
          </TextContainer>
          <Button align="right">Conheça mais</Button>
        </DescriptionContent>
      </MainContent>
      <MainContent backgroundColor="#660000">
        <DescriptionContent>
          <TextContainer align="left">
            <Title>Advocacia para empresas.</Title>
            <Description align="left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta vero architecto ea reiciendis earum unde fugit odio!</Description>
          </TextContainer>
          <Button align="left">Conheça mais</Button>
        </DescriptionContent>
        <ImgContainer src="png2.png" alt="Imagem 2" />
      </MainContent>
    </Container>
  );
};

export default MainPagePrincipal;
