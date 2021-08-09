import React, { FC } from 'react';
import { Card, Col } from 'antd';
import Conditions from '../assets/installations-18.jpg';
import styled from 'styled-components';

const Bg = styled.div<{ image?: string }>`
  height: 200px;
  background: url(${p => p.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

interface IProps {
  image: any;
  title: any;
  desc: any;
  onClick?: (props?: any) => void;
  gridProps?: any;
  bgProps?: any;
  height?: '100px'
  [x: string]: any;
}

const Product: FC<IProps> = ({ gridProps = { lg:8, md:12, xs: 24}, image, title, desc, bgProps, height = '100px', onClick }) => {
  return (
    <Col {...gridProps}>
      <Card hoverable cover={<Bg image={image} {...bgProps} />} onClick={onClick} >
        <Card.Meta title={title} description={desc} style={{ height }} />
      </Card>
    </Col>
  );
};

Product.defaultProps = {};

export default Product;
