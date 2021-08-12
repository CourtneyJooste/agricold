import React, { FC } from 'react';
import { CenteredContainer, CheckList, Container, Dark, Gallery, ProductBanner } from '../../components';
import Humidity1 from '../../assets/humidity-1.jpg';
import Humidity2 from '../../assets/humidity-2.jpg';
import Humidity3 from '../../assets/humidity-3.jpg';
import Chain from '../../assets/cold-chain.jpg';
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';
import { StockOutlined, FallOutlined, SlidersOutlined, AuditOutlined } from '@ant-design/icons';

interface IProps {
  [x: string]: any;
}

const IconText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  svg {
    font-size: 24px;
    margin-right: 10px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const items = [
  { img: Humidity1 },
  { img: Humidity2 },
  { img: Humidity3 },
];

const list = [
  'Prevention of dehydration of produce',
  'Rehydration of warm and wilted produce',
  'Prevention of weight loss',
  'Massively prolonged shelf life of produce',
];

const HighHumidity: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner background={Chain} title={'High Humidity Coolers'} padded />
      <Container centered width={'1200px'}>
        <Zoom><h1>About Blast Cooling</h1></Zoom>
        <Zoom>
          <p>Our high humidity coolers are suitable for horticultural, floricultural and fruit applications.
            Room conditions of 95-98% relative humidity are guaranteed.
          </p>
        </Zoom>
        <Zoom>
          <p>
            The air handling units provide totally saturated air without
            loose moisture droplets.
          </p>
        </Zoom>
        <IconsContainer>
          <Zoom>
            <IconText>
              <StockOutlined />
              High air flow with filtered return air.
            </IconText>
          </Zoom>
          <Zoom>
            <IconText>
              <FallOutlined />
              Blast cooling and pre-cooling ability.
            </IconText>
          </Zoom>
          <Zoom>
            <IconText>
              <SlidersOutlined />
              Accurate temperature and humidity control.
            </IconText>
          </Zoom>
          <Zoom>
            <IconText>
              <AuditOutlined />
              Units are built with food safe materials to BRC standards.
            </IconText>
          </Zoom>
        </IconsContainer>
        <Zoom><h1>Installations</h1></Zoom>
        <Gallery items={items} />
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          <Zoom><h1>Benefits of High Humidity Cooling include</h1></Zoom>
          <Zoom>
            <CheckList style={{ textAlign: 'left' }}>
              {list.map((l: string) => <li>{l}</li>)}
            </CheckList>
          </Zoom>
        </CenteredContainer>
      </Dark>
    </>
  );
};

HighHumidity.defaultProps = {};

export default HighHumidity;
