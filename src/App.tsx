import * as React from 'react';
import './css/App.css';
import { allRoutes } from './routes';
// import Head from './components/head'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import HeaderComponent from './components/head';
import BreadCrumbComponent from './components/bread';
import MenuComponent from './components/menu';
// import HeaderComponent from './components/head';
import './App.css';

const { Content, Sider } = Layout;

interface Mode {
  mode: string;
  collapsed: boolean;
}
function isDesktop() {
  console.log('897878 resize')
  return window.innerWidth > 993;
}
// const logo = require('./logo.svg');

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Button type="primary">Button</Button>
//         <Routers/>
//       </div>
      
//     );
//   }
// }
class App extends React.Component<any, Mode> {
  constructor (props: any) {
    super(props)
    this.state = {
      mode: 'inline',
      collapsed: false
    }
    window.addEventListener('resize', this.onResize);
  }
  toggle = () => {
    let coll = !this.state.collapsed;
    this.setState({
      collapsed: coll,
      mode: coll ? 'vertical' : 'inline',
    });
  }
  onResize = () => {
    isDesktop() ? this.setState({
      collapsed: false,
      mode: 'inline',
    }) : this.setState({
      collapsed: true,
      mode: 'vertical',
    });
  }
  render() {
    return (
      <Layout className="layout">
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <MenuComponent mode={this.state.mode} />
        </Sider>
        <Layout className="bg-white">
          <HeaderComponent toggle={this.toggle} collapsed={this.state.collapsed} />
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: '100%' }}>
            <BreadCrumbComponent />
            <Switch>
              {
                allRoutes.map((item: object, i: number) =>
                  <Route key={i} {...item} />
                )
              }
              <Redirect from="*" to="/" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
