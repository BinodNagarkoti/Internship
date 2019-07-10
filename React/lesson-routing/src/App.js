import React from 'react';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';
import {Layout, Navigation,Header,Content, Drawer} from 'react-mdl';
function App() {
  return (
  <div className="demo-big-content">
  <Layout>
      <Header title="Binod Nagarkoti Learns React" scroll>
          <Navigation>
              <Link to="/we">We</Link>
              <Link to="/">Landing</Link>
              <Link to="/about">About</Link>
              <Link to="/mitra">mitra</Link>
          </Navigation>
      </Header>
      <Drawer title="Binod Learns React">
          <Navigation>
              <Link to="/we">we</Link>
              <Link to="/">Landing</Link>
              <Link to="/about">About</Link>
              <Link to="/mitra">mitra</Link>
          </Navigation>
      </Drawer>
      <Content>
          <Main />      
      </Content>
  </Layout>
</div>
  );
}
export default App;
