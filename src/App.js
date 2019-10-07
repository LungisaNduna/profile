import React, { Component } from 'react'
import './App.css';
import { Header } from './Components/TemplateComponents/Header';
import AboutMe from './Components/TemplateComponents/AboutMe';
import GithubProjectContainer from './Components/ProjectComponents/GithubProjectContainer';
import ProjectRepository from './Repositories/githubProject.Repository';

import { image } from './Resources/LungisaProfile.jpg';
import ImageModal from './Components/smallComponents/ImageModal';

export class App extends Component {
  constructor(props){
    super(props);
    document.title = "Lungisa Nduna"
    this.state = {
      displayMode : 0,
      gitDisplayReady : false,
      ghProjRepository : null,
      showImageModal : false,
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

  toggleModal = () => {
    this.setState({ showImageModal: !this.state.showImageModal });
  }

  render() {
    const {ghProjRepository} = this.state;
    const highlightGHProjects = ["profile", "digital-cards", "push_swap", "UnityFundamentals", "filler"];
    return (
      <div className="App">
        
        <Header />
        
        <AboutMe openModal={this.toggleModal} /> 
        
        { this.state.gitDisplayReady && 
          <GithubProjectContainer 
            githubProjects={ghProjRepository.returnHighlightProjectList(highlightGHProjects)}
          />
        }

        <ImageModal 
          show={this.state.showImageModal}
          onClose={this.toggleModal}
        />
      
      </div>
    )
  }
}

export default App