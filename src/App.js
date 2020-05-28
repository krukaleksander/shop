import React from 'react';
import './App.css';
import '../node_modules/normalize.css/normalize.css';
import Header from './components/Header';
import Basket from './components/Basket';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ArrowBackToTop from './components/ArrowBackToTop';

class App extends React.Component {
  state = {
    productsInCart: 0,
    order: [],
  }

  incrementProductsIcon = () => {
    this.setState({
      productsInCart: this.state.productsInCart + 1
    })
  };
  addNewOrder = (newOrder) => {
    const actuallOrderArr = this.state.order;
    const orderArr = [];
    orderArr.push(newOrder);
    const ordersSum = actuallOrderArr.concat(orderArr);
    this.setState({
      order: ordersSum
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Nav addNewOrder={this.addNewOrder} productsInCart={this.state.productsInCart} incrementProductsIcon={this.incrementProductsIcon} />
        <Basket order={this.state.order} />
        <ArrowBackToTop />
        <Footer />

      </div>
    )
  }
}

export default App;


// git checkout f08a63ff4fa7b8479f8c698e5998ee1afcac3a4e Gemfile