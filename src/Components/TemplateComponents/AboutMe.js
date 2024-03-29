import React, { Component } from 'react'

export class AboutMe extends Component {
    render() {
        return (
            <div className="container" id="AboutMeDiv">
                <p>I am a software developer that attended <a href="https://www.wethinkcode.co.za/" target="_blank">WeThinkCode</a> and currently works at Britehouse.</p>
                <p>My plan is to become a Solution Architect and am upskilling in accordance with my <span className="clickableText" onClick={this.props.openModal}>growth plan</span></p>
                <p>I enjoy problem solving, playing both sports and games (computer and board), as well as biking</p>
            </div>
        )
    }
}

export default AboutMe;
