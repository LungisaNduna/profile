import React from 'react';
import './App.css';
import { Header } from './Components/TemplateComponents/Header';
import AboutMe from './Components/TemplateComponents/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe/>
    </div>
  );
}

export default App;
