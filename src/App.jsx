import React from 'react';
import Nav from './nav/Nav';
import Background from './Background/Backgorund';
import Features from './features/Features';
import Buysection from './Buysection/Buysection';
import './App.css';
import { Footer } from './footer/Footer';

class App extends React.Component{
  render () {
    return (
      <div>
        <div className='wrapper'>
          <Nav />
          <Background />
        </div>
        <Features />
        <Buysection />
        <Footer />
      </div>
    )
  }
}

export default App;