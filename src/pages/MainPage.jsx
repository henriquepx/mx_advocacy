import styled from 'styled-components';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import MainPagePrincipal from '../sections/MainPage/MainPagePrincipal';
import AboutMainPage from '../sections/MainPage/AboutMainPage';

const ContainerMainPage = styled.div`

`

const MainPage = () => {
  return (
      <ContainerMainPage>
        <Header />
        <MainPagePrincipal />
        <AboutMainPage />
        <Footer />
      </ContainerMainPage>
  )
}

export default MainPage