import React, { Component } from 'react'
import './App.css';

import { Header } from './Components/TemplateComponents/Header';
import AboutMe from './Components/TemplateComponents/AboutMe';
import GithubProjectContainer from './Components/ProjectComponents/GithubProjectContainer';
import ProjectRepository from './Repositories/githubProject.Repository';
import ImageModal from './Components/smallComponents/ImageModal';

import AfroIcon from './Resources/afro.svg'
import SpeechBubble from './Resources/love.svg'

export class App extends Component {
  constructor(props){
    super(props);
    document.title = "Lungisa Nduna"
    this.state = {
      displayMode : 0,
      gitDisplayReady : false,
      ghProjRepository : null,
      showImageModal : false,
      profLook: true,
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

  changeStyling = (switchState) => {
    this.setState({ profLook: switchState });
    let style = (this.state.profLook) ? "Professional look" : "Expressive look";
    alert("The styling has been switched to the "+style);
    //code to change the state
  }

  render() {
    const {ghProjRepository, profLook} = this.state;
    const highlightGHProjects = ["profile", "digital-cards", "push_swap", "UnityFundamentals", "filler"];
    return (
      <div className="App">
        
        <Header handleSwitch={this.changeStyling} profLook={profLook} />
        
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

        <div className="AppFooter">
          <h2>Some other Credits</h2>
          <div><img className="CreditIcon" src={AfroIcon} alt="" /> made by <a href="https://www.flaticon.com/<?=_('authors/')?>smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          <div><img className="CreditIcon" src={SpeechBubble} alt="" /> made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a></div>
        </div>
      
      </div>
    )
  }
}

export default App