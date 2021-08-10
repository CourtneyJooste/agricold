import React, { FC, useCallback, useMemo } from 'react';
import { Button, Dropdown, Layout, Menu } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import useWindowWidth from '../hooks/use-window-width';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../assets/logo-white.png'

const { Content, Header, Footer } = Layout;

const { SubMenu } = Menu;

const NavOuter = styled(Header)`
  position: fixed;
  z-index: 16;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: white;
  .ant-menu-title-content {
    color: white;
  }
  .ant-menu-horizontal {
    border-bottom: ${p => p.theme.primary};
  }
  background: ${p => p.theme.primary};
  //  .ant-menu {
  //    background: ${p => p.theme.primary} !important;
  //  }
  
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`

const Navlogo = styled.div`
  padding-right: 10px;
  cursor: pointer;
  img {
    height: auto;
    width: 120px;
  }
`;

const Space = styled.div`
  flex: 1;
`;

const Page = styled(Content)`
  overflow-y: auto;
  height: 100vh;
  margin-top: 64px;
`;

const ItemGroup = styled(Menu.ItemGroup)`
  .ant-dropdown-menu-item-group-title {
    //color: white;
  }
`

const Btn = styled(Button)`
  color: white !important;
  height: 100%;
`




interface IProps {
  [x: string]: any;
}

const Navbar: FC<IProps> = ({ }) => {
  const history = useHistory();

  const location = useLocation();

  const handleClick = useCallback((path: string) => (e?: any) => {
    history.push(path);
  }, [history]);

  const selected = useMemo(() => {
    const loc = location.pathname.split('/');
    if (loc.length <= 0) return '';
    return loc[loc.length -1];
  }, [location]);

  const menu = useMemo(() => (
    <Menu mode="horizontal" defaultSelectedKeys={[selected]}>
      <SubMenu key="products" title="Products">
        <ItemGroup title="Our Products">
          <Menu.Item key="cold-rooms" onClick={handleClick(`/products/cold-rooms`)}>Cold Rooms & Freezer Rooms</Menu.Item>
          <Menu.Item key="blast-coolers" onClick={handleClick(`/products/blast-coolers`)}>Blast Coolers & Blast Freezers</Menu.Item>
          <Menu.Item key="high-humidity" onClick={handleClick(`/products/high-humidity-coolers`)}>High Humidity Coolers</Menu.Item>
          <Menu.Item key="temperature-monitoring" onClick={handleClick(`/products/temperature-monitoring`)}>Temperature Monitoring and Control</Menu.Item>
          <Menu.Item key="pack-houses" onClick={handleClick(`/products/pack-houses`)}>Pack Houses and Process Areas</Menu.Item>
          <Menu.Item key="service-departments" onClick={handleClick(`/products/service-departments`)}>Service Department</Menu.Item>
          <Menu.Item key="more-products" onClick={handleClick(`/products/more-products`)}>More Products...</Menu.Item>
        </ItemGroup>
      </SubMenu>
      <Menu.Item key="partners" onClick={handleClick('/partners')}>Partners</Menu.Item>
      <Menu.Item key="installations" onClick={handleClick('/installations')}>Installations</Menu.Item>
      <Menu.Item key="contact" onClick={handleClick('/contact')}>Contact</Menu.Item>
    </Menu>
  ), [handleClick, selected]);

  const [width] = useWindowWidth();
  return (
    <NavOuter>
      <Navlogo className="logo" onClick={handleClick('/')}><img src={Logo} /></Navlogo>
      <Space />
      { width > 768 ? menu : (
        <Dropdown overlay={menu} trigger={['click']}>
          <Btn type="text" icon={<MenuOutlined />} />
        </Dropdown>
      )}
    </NavOuter>
  );
};

Navbar.defaultProps = {};

export default Navbar;
