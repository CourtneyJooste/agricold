import React, { FC } from 'react';
import { CenteredContainer, CheckList, Container, Dark, Gallery, ProductBanner } from '../../components';
import Blastcooler1 from '../../assets/blastcoolers.jpg';
import Blastcooler2 from '../../assets/blastcoolers-2.jpg';
import Blastcooler3 from '../../assets/blastcoolers-3.jpg';
import Blastcooler4 from '../../assets/blastcoolers-4.jpg';
import Blastcooler5 from '../../assets/blastcoolers-5.jpg';
import Blastcooler6 from '../../assets/blastcoolers-6.jpg';
import Blastcooler7 from '../../assets/blastcoolers-7.jpg';
import Blastcooler8 from '../../assets/blastcoolers-8.jpg';
import Blastcooler9 from '../../assets/blastcoolers-9.jpg';
import Blastcooler10 from '../../assets/blastcoolers-10.jpg';
import Blastcooler11 from '../../assets/blastcoolers-11.jpg';
import Chain from '../../assets/cold-chain.jpg';
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';

interface IProps {
  [x: string]: any;
}

const items = [
  { img: Blastcooler1 },
  { img: Blastcooler2 },
  { img: Blastcooler3 },
  { img: Blastcooler4 },
  { img: Blastcooler5 },
  { img: Blastcooler6 },
  { img: Blastcooler7 },
  { img: Blastcooler8 },
  { img: Blastcooler9 },
  { img: Blastcooler10 },
  { img: Blastcooler11 },
];

const list = [
  'Rapid removal of field heat from product',
  'Consistent temperature through product',
  'Flexibility for dispatch of product without having to wait for product to dwell cool',
  'Increased shelf life',
];

export const BlastCoolers: FC<IProps> = ({}) => {



  return (
    <>
      <ProductBanner background={Chain} title={'Blast Coolers & Blast Freezers'} padded />
      <Container centered width={'1200px'}>
        <Zoom><h1>Installations</h1></Zoom>
        <Gallery items={items} />
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          <Zoom><h1>Benefits of Blast Cooling include</h1></Zoom>
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

BlastCoolers.defaultProps = {};

export default BlastCoolers;
