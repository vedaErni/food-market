import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InvoiceList from './invoiceList/InvoiceList';
import Header from './header/Header';
import Main from './Main';

class App extends Component {
  render() {
    return(
        <div className="food-panel">
          <Header />
          <Main />
        </div>
    )
  }
}

export default App