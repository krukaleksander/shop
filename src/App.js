import React from 'react';
import './App.css';
import '../node_modules/normalize.css/normalize.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Footer />

    </div>
  );
}

export default App;
