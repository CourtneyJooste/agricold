import React, { useCallback } from 'react';
import './App.less';
import 'react-image-lightbox/style.css';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { BackTop, Button, Layout, Tooltip } from 'antd';
import Navbar from './components/Navbar';
import { UpOutlined } from '@ant-design/icons'
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';

// Pages
import {
  BlastCoolers,
  ColdRooms,
  HighHumidity,
  Home,
  Contact,
  TemperatureMonitoring, PackHouses, ServiceDepartments, AllProducts, Partners, Installations
} from './pages';

const { Content, Header, Footer } = Layout;

const Page = styled(Content)`
  overflow-y: auto;
  height: 100%;
  margin-top: 64px;
  width: 100%;
  min-height: calc(100vh - 64px - 70px)
`;

const theme = {
  primary: '#222',
  secondary: '#278232',
  inverse: '#F0F2F5'
};

const App = () => {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout style={{ height: '100%' }}>
            <Navbar />
            <Page>
              <ScrollToTop />

              <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/contact'} component={Contact} />
                <Route exact path={'/products/cold-rooms'} component={ColdRooms} />
                <Route exact path={'/products/blast-coolers'} component={BlastCoolers} />
                <Route exact path={'/products/high-humidity-coolers'} component={HighHumidity} />
                <Route exact path={'/products/temperature-monitoring'} component={TemperatureMonitoring} />
                <Route exact path={'/products/pack-houses'} component={PackHouses} />
                <Route exact path={'/products/service-department'} component={ServiceDepartments} />
                <Route exact path={'/products/all-products'} component={AllProducts} />
                <Route exact path={'/partners'} component={Partners} />
                <Route exact path={'/installations'} component={Installations} />
                <Route render={() => <NotFound />} />
              </Switch>
              <BackTop>
                <Tooltip title="Back to top">
                  <Button shape="circle" icon={<UpOutlined />} />
                </Tooltip>
              </BackTop>
            </Page>
            <Footer style={{ textAlign: 'center', background: '#dde0e4' }}>Agricold ©2021</Footer>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
