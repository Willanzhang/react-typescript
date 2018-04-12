// // import * as React from 'react'
// import React, { Component } from 'react'
// import { Route, Redirect, Switch } from 'react-router-dom'

// function asyncComponent(importComponent) {
//   class AsyncComponent extends Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         component: null
//       };
//     }

//     async componentDidMount() {
//       const { default: component } = await importComponent();
//       console.log(1110000000000000)
//       this.setState({
//         component: component
//       });
//     }

//     render() {
//       const C = this.state.component;

//       return C ? <C {...this.props} /> : null;
//     }
//   }

//   return AsyncComponent;
// }
// ok
// import * as React from 'react';
// import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
// // import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
// import Home from '../pages/home/home';
// import Setting from '../pages/setting/setting';
// import Menu from '../pages/menu/menu';
// // import Head from '../components/head'

// class SwitchCom extends React.Component<{},{}> {
// 	render () {
// 			return (
// 				<Router>
// 						<div>
// 							<ul>
// 								<li>
// 									<Link to="/">Home</Link>
// 								</li>
// 								<li>
// 									<Link to="/setting">About</Link>
// 								</li>
// 								<li>
// 									<Link to="/menu">Menu</Link>
// 								</li>
// 							</ul>
// 							<Route path="/home" component={Home}></Route>
// 							<Route path="/setting" component={Setting}></Route>
// 							<Route component={Menu}></Route>
// 							</div>
// 				</Router> 
// 				)
// 	}
// }
// ok

// class SwitchCom extends React.Component<{},{}> {
// 	render () {
// 			return (
// 					<div>
// 						<Router>
// 							<Route path="/home" component={Home}></Route>
// 							<Route path="/setting" component={Setting}></Route>
// 						</Router>
// 						<ul className="footer">
// 							<li><NavLink exact to="/index" activeStyle={{ color: '#4dc060' }}>首页 </NavLink></li>
// 							<li><NavLink to="/setting" activeStyle={{ color: '#4dc060' }}>设置</NavLink></li>
// 						</ul>
// 					</div> 
// 				)
// 	}
// }

// export default  SwitchCom

import * as React from 'react';
import { Rate } from 'antd';
import Home from '../pages/home/home';
import Setting from '../pages/setting/setting';
import Menu from '../pages/menu/menu';

export class About extends React.Component<{}, null> {
    render() {
        return <div><div>评分</div><Rate allowHalf={true} defaultValue={2.5} /></div>;
    }
}

// 路由命名唯一
export const routes = [
    {
        name: '首页',
        path: '/',
        exact: true,
        component: Home,
        icon: 'home'
    },
    {
        name: '大彩蛋',
        icon: 'flag',
        route: [
            {
                path: '/setting',
                component: Setting,
                name: '设置',
                icon: 'exception'
            },
            {
                path: '/menu',
                component: Menu,
                name: '菜单',
                icon: 'shop'
            }
        ],
    },
		{
        name: '其他',
        route: [
            {
                path: '/about',
                component: About,
                name: '关于'
            }
        ],
    }
];
export const allRoutes = routes.reduce((acc: Array<object>, cur: any) => {
  if (cur.route) {
    return acc.concat(cur.route);
  } else {
    return acc.concat(cur);
  }
}, []);



