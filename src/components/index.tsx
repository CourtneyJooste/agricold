import styled from 'styled-components';
import SplashBg from '../assets/splash.jpg';

export const Container = styled.div<{ centered?: boolean, width?: string, inverse?: boolean }>`
  padding: 80px 10px 100px 10px;
  max-width: ${p => p.width ? p.width : '800px'};
  margin: 0 auto;
  text-align: ${p => p.centered ? 'center' : 'left'};
  display: flex;
  flex-direction: column;
  h1 {
    color: ${p => p.inverse && p.theme.inverse};
    font-size: 40px;
    line-height: 40px;
    padding: 20px 0;
  }
  h3 {
    color: ${p => p.inverse && p.theme.inverse};
  }
  p {
    padding: 10px 0;
    color: ${p => p.inverse && p.theme.inverse};
  }
  
  @media only screen and (max-width: 768px) {
    padding: 40px 10px 60px 10px;
    h1 {
      font-size: 30px;
      line-height: 30px;
    }
  }
`;

export const TitleSection = styled.div`
  h1 {
    padding: 0;
    margin: 0;
  }
  h3 {
    margin: 5px 0 0 0;
  }
  margin: 20px 0;
  padding: 10px 0;
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

export const CheckList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  li {
    position: relative;
    list-style-type: none;
    padding-left: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  li:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: -2px;
      width: 5px;
      height: 11px;
      border-width: 0 2px 2px 0;
      border-style: solid;
      border-color: ${p => p.theme.secondary};
      transform-origin: bottom left;
      transform: rotate(45deg);
  }
`;

export const Dark = styled.div`
  background: ${p => p.theme.primary};
  color: ${p => p.theme.inverse};
`;

export const CenteredContainer = styled(Container)`
  align-items: center;
`;

export const IconText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  svg {
    font-size: 24px;
    margin-right: 10px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export * from './Navbar';
export * from './ScrollToTop';
export * from './Slides';
export * from './Product';
export * from './FormRow';
export * from './Input';
export * from './TextArea';
export * from './FieldContainer';
export * from './Gallery';
export * from './ProductBanner';
export * from './IconItem';
export * from './Footer';
