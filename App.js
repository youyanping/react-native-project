/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import RouterManager from "./src/routers/routerManager";

export default class App extends Component {
  render() {
    return (
        <RouterManager {...this.props} />
    );
  }
}

