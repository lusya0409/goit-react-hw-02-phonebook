import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <Layout>
        <GlobalStyle />
      </Layout>
    );
  }
}
