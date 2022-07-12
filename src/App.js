import './App.css';
import React from 'react'
import Introduction from './sections/introduction';
import Tech from './sections/Tech'
import Social from './sections/Social';
import Footer from './sections/Footer'
import Header from './sections/Header'
import Project from './sections/Project';


function App() {

  

  return (
    <>
      
        <Header/>
        <Introduction/>
        <Tech/>
        <Project/>
        <Social/>
        <Footer/>
      <div className='notAvailable'>
        <h2>Sorry Not available for this screen size and smaller</h2>
      </div>
    </>
  );
}

export default App;
