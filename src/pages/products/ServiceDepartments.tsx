import React, { FC } from 'react';
import { CenteredContainer, CheckList, Container, Dark, Gallery, ProductBanner, TitleSection } from '../../components';
import Chain from '../../assets/cold-chain.jpg';
import Zoom from 'react-reveal/Zoom';

interface IProps {
  [x: string]: any;
}

const list = [
  'Qualified Technicians',
  'Well equipped workshops and tooling',
  'Back up spares for our own products',
  'Technical Support from Directors and Managers',
  'Central Call, Control and Administration Point',
  'Focused  Procurement  Personnel',
  'After hours Service',
  'Pro active Service and fault finding',
  'Compliance Assessments :  OSH/SABS/Energy and Environment',
  'Our promise and commitment to Value and Quality workmanship'
];

export const ServiceDepartments: FC<IProps> = ({}) => {

  return (
    <>
      <ProductBanner background={Chain} title={'Service Departments'} subtitle={'We are committed to providing quality and on-going support'} padded />
      {/*<Container centered width={'1200px'}>*/}
      {/*  <Zoom><h1>Installations</h1></Zoom>*/}
      {/*  <Gallery items={coldrooms} />*/}
      {/*</Container>*/}
      <Dark>
        <CenteredContainer inverse centered>
          <TitleSection>
            {/*<Zoom><h1>Our Guarantee</h1></Zoom>*/}
            <Zoom><h3>All Coldex products are supported by our Service Department and Agents:</h3></Zoom>
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

ServiceDepartments.defaultProps = {};

export default ServiceDepartments;
