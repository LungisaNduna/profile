import React, { Component, lazy, Suspense } from 'react'
import ProjectRepository from '../../Repositories/githubProject.Repository';
//import GithubProjectCard from './GithubProjectCard';
const GithubProjectCard = lazy(()=> import("./GithubProjectCard"));

export class GithubProjectContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            githubProjects : null,
            isReady : false
        }
    }

    componentDidMount(){
        fetch(`https://api.github.com/users/LungisaNduna/repos`)
        .then(response => response.json())
        .then(parsedJSON => new ProjectRepository(parsedJSON))
        .then(ghProjRepo => {
            let highlightedProjects = ["profile", "digital-cards", "push_swap", "UnityFundamentals", "filler"]
            let githubProjects = ghProjRepo.returnHighlightProjectList(highlightedProjects);
            this.setState({ githubProjects });
            this.setState({ isReady : true })
        })
    }

    render() {
        return (
            <div className="container" id="GithubProjContainer">
                <h1>Some Projects I've Done</h1>
                <div  id="GithubProjSection">
                    {this.state.isReady && this.state.githubProjects.map(proj => 
                        <Suspense fallback={<div>Loading Project</div>}><GithubProjectCard projInfo={proj}/></Suspense> 
                    )}
                </div>
            </div>
        )
    }
}

export default GithubProjectContainer
