import React from 'react';
import HomeLayout from '../../layout/home.jsx';
import HomeJotaiLayout from '../../layout/JotaiHome.jsx';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Home = () => {
  //페이지를 만들고 내부 element는 HomeLayout에서 만듭니다.
  return (
    <LayoutContainer>
      <ContainerInner>
        {/*<HomeLayout />*/}
        <HomeJotaiLayout />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Home;
