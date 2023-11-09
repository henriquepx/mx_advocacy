import styled from 'styled-components';
import { primaryColor, fontPrimary } from '../../GlobalStyles';

const ContainerAboutMainPage = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
`;

const ImgAboutMainPage = styled.img`
  position: absolute;
  right: 0;
  height: 50%;
`;
const TextAboutMainPage = styled.div`
  position: relative;
  z-index: 100;
  left: 0;
  width: 49%;
  height: 55%;
  background-color: #ffffff;
`;
const TextsAbout = styled.div`
  position: absolute;
  right: 0;
  text-align: left;
  padding: 2rem 1.5rem;
  h2 {
    font-family: ${fontPrimary};
    color: ${primaryColor};
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    max-width: 50ch;
    margin-bottom: .4rem;
    &:last-of-type {
        margin-bottom: 2rem;
    }
  }
  a {
    margin-top: 2rem;
    font-family: ${fontPrimary};
    position: relative;
    color: ${primaryColor};
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.2);
	transition: all 0.3s ease 0s;
    &::before, &::after {
        content: "";
        width: 18px;
        height: 18px;
        border-width: 2px 0 0 2px;
        border-style: solid;
        border-color: rgba(255, 255, 255, 0.2);
        position: absolute;
        top: -6px;
        left: -6px;
        transition: all 0.3s ease 0s;
    }
    &::after {
        top: auto;
        bottom: -6px;
        left: auto;
        right: -6px;
        border-width: 0 2px 2px 0;
    }
    &:hover::before, &:hover::after {
        width: calc(100% + 22px);
        height: calc(100% + 22px);
        transform: rotateY(180deg);
        border-color: ${primaryColor};
    }
  }
`;

const AboutMainPage = () => {
  return (
    <ContainerAboutMainPage>
      <TextAboutMainPage>
        <TextsAbout>
          <h2>⚖️ Quem somos</h2>  
          <p>A Monteiro Xavier Advocacia é liderada pela Dras. Lívia Monteiro e Evangelina Xavier que unirão suas expertíses para criar um escritório com visão humanizada com o objetivo de fornecer a seus clientes mais do que apenas orientação legal.</p>      
          <p>Nossa equipe compreende as preocupações de nossos clientes está pronta para ser seu parceiro estratégico.</p>
          <p>Do planejamento previdenciário, as questões de cláusulas contratuais e ao Direito de família e sucessões estamos comprometidas em ser sua linha de defesa para que tenha proteção, crescimento e prosperidade.</p>
          <a href="#">Ver mais sobre</a>
        </TextsAbout>
      </TextAboutMainPage>
      <ImgAboutMainPage src="/bg2.jpg" alt="" />
    </ContainerAboutMainPage>
  );
};

export default AboutMainPage;
