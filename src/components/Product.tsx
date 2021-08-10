import React, { FC, useCallback } from 'react';
import { Card, Col } from 'antd';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

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
  onClick?: (e?: any) => any;
  gridProps?: any;
  bgProps?: any;
  height?: string;
  path?: string;
  reveal?: boolean;
  [x: string]: any;
}

const Product: FC<IProps> = ({ gridProps = { lg:8, md:12, xs: 24}, reveal, ...props }) => {

  if (reveal) {
    return (
      <Col {...gridProps}>
        <Fade>
          <ProductInner {...props} />
        </Fade>
      </Col>
    )
  }

  return (
    <Col {...gridProps}>
      <ProductInner {...props} />
    </Col>
  );
};

const ProductInner: FC<any> = ({ image, bgProps, onClick, title, desc, height }) => {
  return (
    <Card hoverable cover={<Bg image={image} {...bgProps} />} onClick={onClick} >
      <Card.Meta title={title} description={desc} style={{ height }} />
    </Card>
  )
}

Product.defaultProps = {
  height: '120px'
};

export default Product;
