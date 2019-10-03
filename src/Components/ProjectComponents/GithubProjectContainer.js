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
                <a className="photoLink" href="https://unsplash.com/@mxhpics?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Maxime Horlaville">
                    <span className="photolink_span1">
                        <svg className="photoLink_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <title>unsplash-logo</title>
                            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                        </svg>
                    </span>
                    <span className="photoLink_span2">photo by Maxime Horlaville</span>
                </a>
            </div>
        )
    }
}

export default GithubProjectContainer
