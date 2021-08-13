import React, { FC } from 'react';
import { CenteredContainer, CheckList, Container, Dark, Gallery, IconText, ProductBanner } from '../components';
import Installations1 from '../assets/installations.jpg';
import Installations2 from '../assets/installations-2.jpg';
import Installations3 from '../assets/installations-3.jpg';
import Installations4 from '../assets/installations-4.jpg';
import Installations5 from '../assets/installations-5.jpg';
import Installations6 from '../assets/installations-6.jpg';
import Installations7 from '../assets/installations-7.jpg';
import Installations8 from '../assets/installations-8.jpg';
import Installations9 from '../assets/installations-9.jpg';
import Installations10 from '../assets/installations-10.jpg';
import Installations11 from '../assets/installations-11.jpg';
import Installations12 from '../assets/installations-12.jpg';
import Installations13 from '../assets/installations-13.jpg';
import Installations14 from '../assets/installations-14.jpg';
import Installations15 from '../assets/installations-15.jpg';
import Installations16 from '../assets/installations-16.jpg';
import Installations17 from '../assets/installations-17.jpg';
import Installations18 from '../assets/installations-18.jpg';
import Installations19 from '../assets/installations-19.jpg';
import Installations20 from '../assets/installations-20.jpg';
import Installations21 from '../assets/installations-21.jpg';
import Installations22 from '../assets/installations-22.jpg';
import Installations23 from '../assets/installations-23.jpg';
import Installations24 from '../assets/installations-24.jpg';
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components';
import { EnvironmentOutlined as Pin } from '@ant-design/icons';

const List = styled.div`
  text-align: left;
  padding: 15px 0 15px 0;
`;

const Desc = styled.p`
  margin-top: 25px; 
`;

interface IProps {
  [x: string]: any;
}

export const installations = [
  { img: Installations1 },
  { img: Installations2 },
  { img: Installations3 },
  { img: Installations4 },
  { img: Installations5 },
  { img: Installations6 },
  { img: Installations7 },
  { img: Installations8 },
  { img: Installations9 },
  { img: Installations10 },
  { img: Installations11 },
  { img: Installations12 },
  { img: Installations13 },
  { img: Installations14 },
  { img: Installations15 },
  { img: Installations16 },
  { img: Installations17 },
  { img: Installations18 },
  { img: Installations19 },
  { img: Installations20 },
  { img: Installations21 },
  { img: Installations22 },
  { img: Installations23 },
  { img: Installations24 },
];

const list = [
  'AGRONA – Tema, Ghana – Mango Processing',
  'ALDES – Luanda, Angola – Distribution Facility',
  'AZITU – Western Cape, South Africa – Tissue Culture Lab',
  'EUROBERRY – Western Cape, South Africa - Berries',
  'MOZBIFE – Chimoio, Mozambique – Abattior.',
  'OBTALA – Morogoro, Tanzania – Melons.',
  'VANDUZI – Chimoio, Mozambique - Horticulture',
  'ZETLER BERRIES – Western Cape, South Africa – Strawberries',
  'FRESH TO GO – Gauteng, South Africa – Perishables DC',
  'PICK & PAY ONLINE – Gauteng, South Africa – DC',
  'ARGOSY – Marondera, Zimbabwe – Horticulture',
  'FORRESTER ESTATES – Mvurwi, Zimbabwe – Blueberries',
  'INAMO AGRI – Darwindale, Zimbabwe – Horticulture & Blueberries',
  'HYBRID/ COUNTRY CHOICE – Zambia – Chicken Processing',
  'COOL BANANAS – Ndola, Zambia – Bananas',
  'YORK FARMS – Lusaka, Zambia – Horticulture',
  'ROLLEX – Zimbawe, South Africa, Namibia – Perishables DC',
  'MITCHELL & MITCHELL – Marondera, Zimbabwe – Horticulture',
  'KONDOZI – Odzi, Zimbabwe – Horticulture.',
  'OAK VALLEY – Western Cape, South Africa – Floriculture',
  'RITE FOODS – Lagos, Nigeria – Baking & Food Processing',
  'SILVERLANDS – Iringa, Tanzania – Poultry',
  'SHOPRITE – Zambia – Supermarkets',
  'FOOD LOVERS MARKET - Zambia, Zimbabwe – Supermarkets',
  'QUAY MARINE - Western Cape, South Africa - Fish',
];

export const Installations: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner background={Installations20} title={'Installations'} subtitle={'Agricold & Coldex have worked in over 19 African Countries over the past 25 years'} padded />
      <Container centered width={'1200px'}>
        <Zoom><h1>Gallery</h1></Zoom>
        <Gallery items={installations} />
        <Desc>Agricold &amp; Coldex have worked in over 19 African Countries over the past 25 years.</Desc>
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          <Zoom><h1>A snapshot of a few of our installations:</h1></Zoom>
          <List>
            {list.map((l: string) =>
              <Zoom><IconText><Pin />{l}</IconText></Zoom>)}
          </List>
        </CenteredContainer>
      </Dark>
    </>
  );
};

Installations.defaultProps = {};

export default Installations;
