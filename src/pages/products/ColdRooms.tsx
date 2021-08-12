import React, { FC } from 'react';
import { CenteredContainer, CheckList, Container, Dark, Gallery, ProductBanner } from '../../components';
import Cold1 from '../../assets/coldrooms.jpg';
import Cold2 from '../../assets/coldrooms-2.jpg';
import Cold3 from '../../assets/coldrooms-3.jpg';
import Cold4 from '../../assets/coldrooms-4.jpg';
import Cold5 from '../../assets/coldrooms-5.jpg';
import Cold6 from '../../assets/coldrooms-6.jpg';
import Cold7 from '../../assets/coldrooms-7.jpg';
import Chain from '../../assets/cold-chain.jpg';
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';

interface IProps {
  [x: string]: any;
}

export const coldrooms = [
  { img: Cold1 },
  { img: Cold2 },
  { img: Cold3 },
  { img: Cold4 },
  // { img: Cold5, title: 'Quality refrigeration equipment', desc: 'a' },
  { img: Cold6 },
  { img: Cold7 }
];

const list = [
  'Horticultural cold rooms',
  'Blueberry cold rooms',
  'Strawberry cold rooms',
  'Fruit cold rooms',
  'Floricultural cold rooms',
  'Citrus cold rooms',
  'Banana ripening cold rooms',
  'Meat cold rooms',
  'Chicken cold rooms',
  'Ice making freezer rooms',
  'Fish cold rooms and freezers',
  'Medical cold rooms',
  'General cold rooms and freezer rooms',
  'Insulated food-safe white wall panelling',
  'Precise temperature monitoring and control',
  'Quality refrigeration equipment',
];

export const ColdRooms: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner background={Chain} title={'Cold Rooms & Freezer Rooms'} padded />
      <Container centered width={'1200px'}>
        <Zoom><h1>Installations</h1></Zoom>
        <Gallery items={coldrooms} />
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          <Zoom><h1>Our cold rooms & freezer rooms</h1></Zoom>
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

ColdRooms.defaultProps = {};

export default ColdRooms;
