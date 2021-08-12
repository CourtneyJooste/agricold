import React, { FC, useCallback } from 'react';
import { Card, Col } from 'antd';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

// hasTitle = has title and meta section
// matchHeight = match usual height of card with meta and title
const Bg = styled.div<{ image?: string, hasTitle?: boolean, matchHeight?: boolean }>`
  height: ${p => p.hasTitle ? '200px' : (p.matchHeight ? '361px' : '280px') };
  background: url(${p => p.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

const CCard = styled(Card)<{ hasTitle?: boolean }>`
  && {
    border: ${p => !p.hasTitle && 'none'};
    .ant-card-body {
      padding: ${p => !p.hasTitle && '0'};
    }
    :hover {
      .ant-card-cover {
        -webkit-filter: brightness(70%);
      }
    }
    .ant-card-cover {
      -webkit-transition: all 0.4s ease-in-out;
      -moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -ms-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
  }
`;

interface IProps {
  image: any;
  title?: any;
  desc?: any;
  onClick?: (e?: any) => any;
  gridProps?: any;
  bgProps?: any;
  height?: string;
  path?: string;
  reveal?: boolean;
  matchHeight?: boolean;
  [x: string]: any;
}

const Product: FC<IProps> = ({ gridProps = { lg:8, md:12, xs: 24 }, reveal, ...props }) => {

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

const ProductInner: FC<any> = ({ image, bgProps, onClick, title, desc, height, matchHeight }) => {
  return (
    <CCard hoverable cover={<Bg image={image} {...bgProps} hasTitle={!!title} matchHeight={matchHeight} />} onClick={onClick} hasTitle={!!title}>
      {title && <Card.Meta title={title} description={desc} style={{ height }} />}
    </CCard>
  )
}

Product.defaultProps = {
  height: '120px'
};

export default Product;
