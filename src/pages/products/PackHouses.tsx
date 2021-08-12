import React, { FC } from 'react';
import {
  CenteredContainer,
  CheckList,
  Container,
  Dark,
  Gallery,
  IconsContainer,
  IconText,
  ProductBanner,
  TitleSection
} from '../../components';
import PackHouses1 from '../../assets/packhouses-1.jpg';
import PackHouses2 from '../../assets/packhouses-2.jpg';
import PackHouses3 from '../../assets/packhouses-3.jpg';
import PackHouses4 from '../../assets/packhouses-4.jpg';
import PackHouses5 from '../../assets/packhouses-5.jpg';
import PackHouses6 from '../../assets/packhouses-6.jpg';
import PackHouses7 from '../../assets/packhouses-7.jpg';
import PackHouses8 from '../../assets/packhouses-8.jpg';
import PackHouses9 from '../../assets/packhouses-9.jpg';
import PackHouses10 from '../../assets/packhouses-10.jpg';
import PackHouses11 from '../../assets/packhouses-11.jpg';
import Chain from '../../assets/cold-chain.jpg';
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';
import { StockOutlined, FallOutlined, SlidersOutlined, AuditOutlined } from '@ant-design/icons';

interface IProps {
  [x: string]: any;
}

export const packhouses = [
  { img: PackHouses1 },
  { img: PackHouses2 },
  { img: PackHouses3 },
  { img: PackHouses4 },
  { img: PackHouses5 },
  { img: PackHouses6 },
  { img: PackHouses7 },
  { img: PackHouses8 },
  { img: PackHouses9 },
  { img: PackHouses10 },
  { img: PackHouses11 },
];

const list = [
  'Packhouse & processing areas – Design and layouts',
  'Horticultural pack houses and process areas',
  'Blueberry and Strawberry packhouses',
  'Floricultural pack houses',
  'Fruit pack houses',
  'Fish processing factories',
  'Abbatiors',
  'Chicken processing facilies',
  'Freight forwarding facilities',
  'Produce handling facilities',
  'Insulated pamel structures',
  'Shed structures',
  'Agri processing & post harvest technology',
  'Hot water generation through waste heat',
  'Energy saving & efficient cooling systems'
];

const PackHouses: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner background={Chain} title={'Pack Houses & Process areas'} padded />
      <Container centered width={'1200px'}>
        <Zoom><h1>Post Harvest cooling technology</h1></Zoom>
        <Zoom>
          <p>Since 1995 we have been designing and installing quality refrigeration systems
            and post harvest cooling solutions throughout the African continent.
          </p>
        </Zoom>
        <Zoom>
          <p>
            Whether you are a grower, packer, distributor or retailer; Agricold has a
            solution to fit your needs, maintain your quality and extend your shelf life.
          </p>
        </Zoom>
        <Zoom>
          <p>
            Purpose built, reliable, long lasting value for money.
          </p>
        </Zoom>
        <Zoom>
          <p>
            Made in Africa for African conditions.
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
        <Gallery items={packhouses} />
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          <TitleSection>
            <Zoom><h1>Applications</h1></Zoom>
            <Zoom><h3>Design, supply, installation and project management of turn key facilities for the following applications:</h3></Zoom>
          </TitleSection>
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

PackHouses.defaultProps = {};

export default PackHouses;
