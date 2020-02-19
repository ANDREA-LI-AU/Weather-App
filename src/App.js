import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import Navigation from './component/Navigation';

import './App.css';

function App() {
  return (
    <div className="weather-channel__container">
      <Header/>
      <Navigation/>
      <Main/>
      <Footer/>
      </div>
      
  );
}

export default App;
