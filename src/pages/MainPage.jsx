import styled from 'styled-components';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import MainPagePrincipal from '../sections/MainPage/MainPagePrincipal';

const ContainerMainPage = styled.div`

`

const MainPage = () => {
  return (
      <ContainerMainPage>
          <Header />
          <MainPagePrincipal />
        <Footer />
      </ContainerMainPage>
  )
}

export default MainPage