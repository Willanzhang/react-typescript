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

import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../pages/home/home';