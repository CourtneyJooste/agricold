import React, { FC, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import SplashBg from '../assets/splash.jpg';
import Logo from '../assets/logo-dark.png';
import One from '../assets/installations-10.jpg';
import Two from '../assets/installations-13.jpg';
import Three from '../assets/installations-2.jpg';
import Four from '../assets/installations-17.jpg';
import Five from '../assets/installations-21.jpg';
import Six from '../assets/installations-19.jpg';
import Seven from '../assets/installations-7.jpg';
import Eight from '../assets/installations-24.jpg';
import Personal from '../assets/installations-11.jpg';
import Efficient from '../assets/installations-22.jpg';
import Conditions from '../assets/installations-18.jpg';
import Extending from '../assets/installations-6.jpg';
import Strawberries from '../assets/strawberries.jpg';
import { DownOutlined } from '@ant-design/icons';
import { Slides, Container, MainLogo, Background } from '../components';
import { Tooltip } from 'antd';
import { Row } from 'antd';
import Product from '../components/Product';

const Splash = styled.div`
  height: calc(100vh - 64px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
`

const SplashBack = styled.div`
  background: url(${SplashBg}); 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  /* Add the blur effect */
  filter: blur(3px);
  -webkit-filter: blur(3px);

  /* Full height */
  height: 100%;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  font-size: 72px;
  color: white;
  padding: 5px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 52px;
  }
`;

const Subtitle = styled.div`
  font-size: 24px;
  color: #222222;
  padding: 15px 5px 5px 5px;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const GoDown = styled.div`
  padding: 10px;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  svg {
    color: white;
    font-size: 40px;
    transition: all .2s ease-in-out;
  }
  &:hover {
    svg {
      transform: scale(1.1);
    }  
  }
`;

const SplashContent = styled.div`
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(255,255,255, 0.5); /* White w/opacity/see-through */
  color: white;
  font-weight: bold;
  //border: 3px solid #f1f1f1;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 96%;
  max-width: 600px;
  padding: 50px 20px 50px 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
`;

const Bg = styled(Background)`
  padding-top: 200px;
  padding-bottom: 200px;
`;

const Locations = styled.div`
  background: #222;
`;

interface IProps {
  [x: string]: any;
}

const slides: string[] = [
  One,
  Two,
  Three,
  Four
];

const slides2: string[] = [
  Five,
  Six,
  Seven,
  Eight
];

const Home: FC<IProps> = ({ }) => {

  const handleGoDown = useCallback(() => {
    const el = document.getElementById('welcome');
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Splash>
        <SplashBack />
        <SplashContent>
          {/*<Title>AGRICOLD</Title>*/}
          <Image src={Logo} />
          <Subtitle>Post Harvest Cooling Systems</Subtitle>
        </SplashContent>
        <Tooltip title={'Explore'}>
          <GoDown onClick={handleGoDown}>
            <DownOutlined />
          </GoDown>
        </Tooltip>
      </Splash>
      <Container centered id={'welcome'}>
        <h1>Welcome to <MainLogo src={Logo} /></h1>
        <p>
          Agricold is an industry leader in the design, supply and installation of refrigeration
          systems and climate control products.
        </p>
        <p>
          Agricold has a 25 year track record throughout Africa in cold chain/ cold storage
          solutions for agricultural, floricultural, horticultural, fishing, meat, baking, dairy and
          other perishable products.
        </p>
      </Container>
      <Slides images={slides} />
      <div style={{ background: 'white' }}>
        <Container centered style={{ paddingBottom: '0' }}>
          <h1>Solution Driven</h1>
          <p>
            Our products and solutions are complete - from post harvest through to processing,
            storage, distribution and shop floor retail. Farm to Fork.
          </p>
          <p>
            Our refrigeration systems are quality built and specifically engineered to the
            temperature and humidity requirements of the product and application.
          </p>
          <img src={Strawberries} style={{ width: '100%', height: 'auto' }}/>
        </Container>
      </div>
      <Locations>
        <Container inverse centered>
          <h1>Locations</h1>
          <div className="visme_d" data-url="dmd4nx1e-where-we-have-worked" data-w="800" data-h="560"
               data-domain="my" />
        </Container>
      </Locations>
      <Container centered>
        <h1>Our Products</h1>
        <Row gutter={[8, 8]}>
          <Product image={Personal} title={'Advantages'} desc={'Personal service, purpose build, reliable, long lasting value for money'} />
          <Product image={Efficient} title={'Power'} desc={'Energy efficient cooling systems'} />
          <Product image={Conditions} title={'Robust'} desc={'Made for African conditions'} />
          <Product image={Extending} title={'Preserve'} desc={'Extending the shelf life and enhancing the value of the product'} />
          <Product image={Conditions} title={'Robust'} desc={'Made for African conditions'} />
          <Product image={Extending} title={'Preserve'} desc={'Extending the shelf life and enhancing the value of the product'} />
        </Row>
      </Container>
      <Slides images={slides2} />
    </>
  );
};

Home.defaultProps = {};

export default Home;
