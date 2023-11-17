import styled from 'styled-components';
import { fontPrimary } from '../GlobalStyles';

const ContainerConsulting = styled.div`
    height: 30vh;
    background-color: #795a51;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
`
const PointerToCenter = styled.div`
    position: absolute;
    top: -5%;
    width: 25px;
    height: 25px;
    rotate: 45deg;
    background-color: #f8f8f8;
`
const TextConsulting = styled.div`
    text-align: center;
    h1 {
        font-family: ${fontPrimary};
        color: #fff;
        font-size: 1.5rem;
    }
    p {
        font-family: ${fontPrimary};
        color: #fff;
        font-size: 1rem;
        margin-bottom: 2rem;
    }
    a {
        font-family: ${fontPrimary};
        color: #fff;
        font-size: 1rem;
        background-color: #5c3c2c;
        padding: 1.1rem 2rem;
    }
`

export const Consulting = () => {
  return (
      <ContainerConsulting>
          <PointerToCenter></PointerToCenter>
          <TextConsulting>
              <h1>Nossa equipe está preparada para solucionar seu problema.</h1>
              <p>Clique abaixo no botão e entre em contato:</p>
              <a href="#">Contato</a>
          </TextConsulting>
    </ContainerConsulting>
  )
}
