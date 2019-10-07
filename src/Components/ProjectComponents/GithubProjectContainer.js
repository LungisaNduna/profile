import React, { Component } from 'react'
import {GithubProjectCard} from "./GithubProjectCard";
import UnsplashLink from '../smallComponents/UnsplashLink';

export class GithubProjectContainer extends Component {
    constructor(props){
        super(props);
        console.log("making the container");
    }

    render() {
       const {githubProjects} = this.props; 
        return (
            <div className="container" id="GithubProjContainer">
                {/* Just placing a header */}
                <h1>Some Projects I've Done</h1>
                {/* mapping a project card for each project we have data for */}
                <div  id="GithubProjSection">
                    {githubProjects.map(proj => <GithubProjectCard projInfo={proj}/>)}
                </div>
                {/* the link from Unsplash. Got the component and the */}
                <UnsplashLink linkAddress="https://unsplash.com/@mxhpics?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" Artist="Maxime Horlaville" />
            </div>
        )
    }
}

export default GithubProjectContainer
