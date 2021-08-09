import styled from 'styled-components';
import SplashBg from '../assets/splash.jpg';

export const Container = styled.div<{ centered?: boolean, width?: string, inverse?: boolean }>`
  padding: 80px 10px 100px 10px;
  max-width: ${p => p.width ? p.width : '800px'};
  margin: 0 auto;
  text-align: ${p => p.centered ? 'center' : 'left'};
  h1 {
    color: ${p => p.inverse && '#F0F2F5'};
    font-size: 40px;
    padding: 20px 0;
  }
  p {
    padding: 10px 0;
    color: ${p => p.inverse && '#F0F2F5'};
  }
  
  @media only screen and (max-width: 768px) {
    padding: 40px 10px 60px 10px;
  }
`;

export const MainLogo = styled.img`
  width: 165px;
  height: auto;
  padding-bottom: 4px;
`

export const Background = styled.div<{ background: string }>`
  background: url(${p => p.background}); 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export * from './Navbar';
export * from './ScrollToTop';
export * from './Slides';
export * from './Product';
