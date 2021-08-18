import React, { FC, useCallback } from 'react';
import { CenteredContainer, CheckList, Container, Dark, Gallery, ProductBanner, TitleSection } from '../components';
import Snow from '../assets/snow.jpg';
import Coldex from '../assets/coldex.jpg';
import Patdunn from '../assets/patdunn.png';
import Cubicool from '../assets/cubicool.jpg';
import Metraclark from '../assets/metraclark.png';
import FullGauge from '../assets/gogreen.jpg';
import Bitzer from '../assets/bitzer.jpg';
import Dexion from '../assets/dexion.jpg';
import Genesis from '../assets/genesis.jpg';
import Maxiflex from '../assets/maxiflex.png';
import Groundswell from '../assets/groundswell.png';
// import Groundswell from '../assets/groundswell.jpg';
import Zoom from 'react-reveal/Zoom';

const Sub: FC<any> = ({ text, url }) => {

  const handleClick = useCallback((e: any) => {
    e.stopPropagation();
    window.open(`http://${url}`, '_blank');
  }, [url]);

  return (
    <>
      <div>
        {text}
      </div>
      { url && <div>
        <a onClick={handleClick}>{url}</a>
      </div> }
    </>
  )
}

const partners = [
  { img: Coldex, title: 'Coldex', desc: <Sub text={'Quality Refrigeration systems'} url={'www.coldex.co.za'} /> },
  { img: Patdunn, title: 'Pat Dunn & Co.', desc: <Sub text={'Shed structures, Engineering, Civils & electrics'} url={'www.patdunn.co.zw'} /> },
  { img: Groundswell, title: 'Groundswell', desc: <Sub text={'Insulated panelling'} /> },
  { img: Cubicool, title: 'Cubicool', desc: <Sub text={'Refrigeration systems manufacturing'} url={'www.cubicool.co.za/'} /> },
  { img: Metraclark, title: 'Metraclark', desc: <Sub text={'Refrigeration & Air-conditioning wholesalers'} url={'www.metraclark.co.za/'} />},
  { img: FullGauge, title: 'Full Gauge', desc: <Sub text={'Temperature controls'} url={'www.fullgauge.com/'} /> },
  { img: Bitzer, title: 'Bitzer', desc: <Sub text={'Refrigeration Compressors'} url={'www.bitzer.de/'} /> },
  { img: Dexion, title: 'Dexion', desc: <Sub text={'Racking and Shelving'} url={'www.dexionrackingandshelving.co.za'} /> },
  { img: Genesis, title: 'Genesis Group', desc: <Sub text={'IT, Mining, Hospitality'} url={'www.genesis-group.biz'} /> },
  { img: Maxiflex, title: 'MaxiFlex', desc: <Sub text={'Strip curtains, dock levellers and docking solutions, high speed doors and industrial doors'} url={'www.maxiflex.co.za'} /> },
];

interface IProps {
  [x: string]: any;
}

export const Partners: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner
        background={Snow}
        title={'Partner Products & Companies'}
        subtitle={'Agricold, Coldex, Pat Dunn & Co and the Genesis group is strategically placed throughout the SADAC region of Africa.'}
        padded
      />
      <Container centered width={'1200px'}>
        <TitleSection>
          <Zoom><h1>Our Partners</h1></Zoom>
          <Zoom><h3>Agricold is proud to be associated with the following outstanding brands and solutions</h3></Zoom>
        </TitleSection>
        <Gallery items={partners} bgProps={{ bgSize: 'contain' }}/>
      </Container>
      <Dark>
        <CenteredContainer inverse centered>
          {/*<TitleSection>*/}
            <Zoom><h1>Partner with us</h1></Zoom>
            <Zoom><h3>Contact Marcus Jooste: <a href={'mailto:marcus@coldex.co.za'}>marcus@coldex.co.za</a> for opportunities to partner
              with us on your products or services.</h3></Zoom>
          {/*</TitleSection>*/}
        </CenteredContainer>
      </Dark>
    </>
  );
};

Partners.defaultProps = {};

export default Partners;
