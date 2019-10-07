import React, { Component } from 'react'

export class GithubProjectCard extends Component {

    render() {
        const { projInfo } = this.props;
        if (projInfo.has_pages) { console.log(projInfo.pagesLink); }
        return (
            <div className="projCard">
                <a className="projCardContainer" href={projInfo.html_url} target="_blank">
                    <img className="projectLogo" src={projInfo.logoSourceUrl}/>
                    <div className="languages">
                        {projInfo.language.map(language => <p className="language">{language}</p>) }
                    </div>
                </a>
                {projInfo.has_pages && 
                    <div className="pagesLink">
                        <a href={projInfo.liveLink} target="_blank">Check out the webpage</a>
                    </div>
                }                
            </div>
        )
    }
}

export default GithubProjectCard
