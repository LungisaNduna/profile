import React, { Component } from 'react'

export class GithubProjectCard extends Component {

    render() {
        const { projInfo } = this.props;
        return (
            <div className="ProjCard">
                <a className="repoLink" href={projInfo.html_url} target="_blank">
                    <img className="projectLogo" src={projInfo.logoSourceUrl}/>
                </a>
                {projInfo.has_pages && <div className="pagesLink"><a target="_blank" href={projInfo.liveLink}>Check out the webpage</a></div>}
            </div>
        )
    }
}

export default GithubProjectCard
