import React, { FC, useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
import Strawberries from '../assets/strawberries.jpg';
import Packhouse from '../assets/packhouses-10.jpg';
import Coldroom from '../assets/coldrooms-2.jpg';
import Blastcooler from '../assets/blastcoolers-2.jpg';
import Humidity from '../assets/humidity-1.jpg';
import Monitoring from '../assets/monitoring-1.png';
import Products from '../assets/coldrooms-7.jpg';
import { DownOutlined } from '@ant-design/icons';
import { Slides, Container, MainLogo, Background, CheckList } from '../components';
import { Tooltip } from 'antd';
import { Row } from 'antd';
import Product from '../components/Product';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

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

const Subtitle = styled.div`
  font-size: 24px;
  color: ${p => p.theme.primary};
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

const Locations = styled.div`
  background: ${p => p.theme.primary};
`;

const CContainer = styled(Container)`
  align-items: center;
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
  const history = useHistory();

  const handleGoDown = useCallback(() => {
    const el = document.getElementById('welcome');
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleProduct = useCallback((path?: string) => (e?: any) => {
    if (path) history.push(`/products/${path}`);
  }, [history])

  return (
    <>
      <Splash>
        <SplashBack />
        <SplashContent>
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
        <Zoom>
          <h1>Welcome to <MainLogo src={Logo} /></h1>
        </Zoom>
        <Zoom>
          <p>
            Agricold is an industry leader in the design, supply and installation of refrigeration
            systems and climate control products.
          </p>
        </Zoom>
        <Zoom>
          <p>
            Agricold has a 25 year track record throughout Africa in cold chain/ cold storage
            solutions for agricultural, floricultural, horticultural, fishing, meat, baking, dairy and
            other perishable products.
          </p>
        </Zoom>
      </Container>
      <Fade><Slides images={slides} /></Fade>
      <div style={{ background: 'white' }}>
        <Container centered style={{ paddingBottom: '0' }}>
          <Zoom><h1>Solution Driven</h1></Zoom>
          <Zoom>
            <p>
              Our products and solutions are complete - from post harvest through to processing,
              storage, distribution and shop floor retail. Farm to Fork.
            </p>
          </Zoom>
          <Zoom>
            <p>
              Our refrigeration systems are quality built and specifically engineered to the
              temperature and humidity requirements of the product and application.
            </p>
          </Zoom>
          <Fade><img src={Strawberries} style={{ width: '100%', height: 'auto' }}/></Fade>
        </Container>
      </div>
      <Locations>
        <Container inverse centered>
          <Zoom><h1>Locations</h1></Zoom>
          <div className="visme_d" data-url="dmd4nx1e-where-we-have-worked" data-w="800" data-h="560"
               data-domain="my" />
        </Container>
      </Locations>
      <Container centered width={'1200px'}>
        <Zoom><h1>Our Products</h1></Zoom>
        <Row gutter={[8, 8]}>
          <Product onClick={handleProduct('cold-rooms')} image={Coldroom} title={'Cold Rooms & Freezer Rooms'} desc={'Horticultural, fruit, floricultural, meat and medical cold rooms. And much much more!'} reveal />
          <Product onClick={handleProduct('blast-coolers')} image={Blastcooler} title={'Blast Coolers & Blast Freezers'} desc={'Chilly Willy portable blast coolers. Plenum wall blast coolers. Pre and post coolers.'} reveal />
          <Product onClick={handleProduct('high-humidity-coolers')} image={Humidity} title={'High Humidity Coolers'} desc={'Room conditions of 95-98% relative humidity for horticultural, floricultural and fruit applications.'} reveal />
          <Product onClick={handleProduct('temperature-monitoring')} image={Monitoring} title={'Temperature Monitoring & Control'} desc={'Cold Guard Remote temperature monitoring & management system.'} reveal />
          <Product onClick={handleProduct('pack-houses')} image={Packhouse} title={'Pack Houses & Process Areas'} desc={'Post harvest cooling technology.'} reveal />
          <Product onClick={handleProduct('more-products')} image={Products} title={'More Products...'} desc={'Supermarket refrigeration systems, abattoirs, water chillers, growing rooms, mortuary cabinets, solar refrigeration systems and more.'} reveal />
        </Row>
      </Container>
      <Fade><Slides images={slides2} /></Fade>
      <CContainer>
        <Zoom>
          <h1>Why <MainLogo src={Logo} />?</h1>
        </Zoom>
        <Fade>
          <CheckList>
            <li>
              Personal service, purpose built, reliable, long lasting value for money
            </li>
            <li>
              Energy efficient cooling systems
            </li>
            <li>
              Made for African conditions
            </li>
            <li>
              Extending the shelf life and enhancing the value of your product
            </li>
          </CheckList>
        </Fade>
      </CContainer>
    </>
  );
};

Home.defaultProps = {};

export default Home;
