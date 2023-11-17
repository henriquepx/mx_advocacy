import styled from 'styled-components';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import MainPagePrincipal from '../sections/MainPage/MainPagePrincipal';
import AboutMainPage from '../sections/MainPage/AboutMainPage';
import Areas from '../sections/MainPage/Areas';
import { Consulting } from '../components/Consulting';
const ContainerMainPage = styled.div`

`

const MainPage = () => {
  return (
      <ContainerMainPage>
        <Header />
        <MainPagePrincipal />
        <AboutMainPage />
        <Areas />
        <Consulting />
        <Footer />
      </ContainerMainPage>
  )
}

export default MainPage