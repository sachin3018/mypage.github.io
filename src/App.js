import './App.css';
import React from 'react'
import Introduction from './sections/introduction';
import Tech from './sections/Tech'
import Social from './sections/Social';
import Footer from './sections/Footer'

function App() {

  React.useEffect(() => {
    alert("This is under progress...")
  })

  return (
    <div className="container">
      <Introduction/>
      <Tech/>
      <Social/>
      <Footer/>
    </div>
  );
}

export default App;
