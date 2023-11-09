import { useState } from 'react';
import styled from 'styled-components';
import { fontPrimary } from '../../GlobalStyles';

const ContainerPrincipalPage = styled.main`
  background-color: #fff;
  height: 70vh;
  width: 100%;
  position: relative;

  background: url('/bgmain.jpg') center center no-repeat, linear-gradient(90deg, rgba(126,1,1,1) 43%, rgba(158,65,65,1) 64%, rgba(255,255,255,1) 100%);
  background-size: cover;
`;

const TabContent = styled.div`  
  display: flex;
  justify-content: space-between;
`;

const TabItem = styled.div`
  width: 100%;
  transition: opacity 0.3s, padding 0.3s;
  display: ${({ active }) => (active ? 'block' : 'none')};

  padding: ${({ active }) => (active ? '12rem 0rem 0rem 12rem' : '0')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  h2 {
    font-family: ${fontPrimary};
    color: #fff;
    font-size: 3.3rem;
  }
  p {
    max-width: 60ch;
    font-family: ${fontPrimary};
    color: #fff;
    margin: 10px 0;
  }
`;

const Content1 = styled(TabItem)`
`;
const Content2 = styled(TabItem)`
`;
const Content3 = styled(TabItem)`
`;
const Content4 = styled(TabItem)`
`;

const TabMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  position: absolute;
  bottom: 10%;
  left: 47%;
`;

const TabSpan = styled.span`
  display: block;
  width: 13px;
  height: 13px;
  background-color: ${({ active }) =>
    active ? ` #ffffff` : '${primaryColor}'};
  border: 2px solid #fff;
  border-radius: 100%;
  cursor: pointer;
`;

const MainPagePrincipal = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <ContainerPrincipalPage>
      <TabContent>
        <Content1 active={activeTab === 0}>
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptate officia nulla quis architecto consectetur quasi distinctio ducimus quae iusto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam fuga beatae, odio natus molestias culpa at perferendis nam doloremque et adipisci deleniti nulla eveniet! Maxime beatae iste nesciunt culpa.</p>
        </Content1>
        <Content2 active={activeTab === 1}>
        <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam fuga beatae, odio natus molestias culpa at perferendis nam doloremque et adipisci deleniti nulla eveniet! Maxime beatae iste nesciunt culpa.</p>
        </Content2>
        <Content3 active={activeTab === 2}>
        <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptate officia nulla quis architecto consectetur quasi distinctio ducimus quae iusto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam fuga beatae, odio natus molestias culpa at perferendis nam doloremque.</p>
        </Content3>
        <Content4 active={activeTab === 3}>
        <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptate officia nulla quis architecto consectetur quasi distinctio ducimus quae iusto!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam fuga beatae, odio natus molestias culpa at perferendis nam doloremque et adipisci deleniti nulla eveniet! Maxime beatae iste nesciunt culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, iusto quis nam voluptatem temporibus sequi!</p>
        </Content4>
      </TabContent>
      <TabMenu>
        {Array.from({ length: 4 }).map((_, index) => (
          <TabSpan
            key={index}
            active={activeTab === index}
            onClick={() => handleTabClick(index)}
          ></TabSpan>
        ))}
      </TabMenu>
    </ContainerPrincipalPage>
  );
};

export default MainPagePrincipal;
