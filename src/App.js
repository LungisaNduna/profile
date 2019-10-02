import React from 'react';
import './App.css';
import { Header } from './Components/TemplateComponents/Header';
import AboutMe from './Components/TemplateComponents/AboutMe';
import GithubProjectContainer from './Components/ProjectComponents/GithubProjectContainer';

function App() {  
  return (
    <div className="App">
      <Header />
      <AboutMe/>
      <GithubProjectContainer />
    </div>
  );
}

export default App;
