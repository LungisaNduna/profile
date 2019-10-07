import React, { Component } from 'react'
import './App.css';
import { Header } from './Components/TemplateComponents/Header';
import AboutMe from './Components/TemplateComponents/AboutMe';
import GithubProjectContainer from './Components/ProjectComponents/GithubProjectContainer';
import ProjectRepository from './Repositories/githubProject.Repository';

export class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      displayMode : 0,
      gitDisplayReady : false,
      ghProjRepository : null,
    }
  }

  componentDidMount(){
    fetch(`https://api.github.com/users/LungisaNduna/repos`)
        .then(response => response.json())
        .then(parsedJSON => new ProjectRepository(parsedJSON))
        .then(ghProjRepository => {
            this.setState({ ghProjRepository });
            this.setState({ gitDisplayReady : true })
        })
  }

  render() {
    const {ghProjRepository} = this.state;
    const highlightGHProjects = ["profile", "digital-cards", "push_swap", "UnityFundamentals", "filler"];
    return (
      <div className="App">
        <Header />
        <AboutMe/>
        { this.state.gitDisplayReady && <GithubProjectContainer githubProjects={ghProjRepository.returnHighlightProjectList(highlightGHProjects)} />}
      </div>
    )
  }
}

export default App



/*import React from 'react';


function App() {  
  return (
    <div className="App">
      <Header />
      <AboutMe/>
      <GithubProjectContainer />
    </div>
  );
}

export default App;*/