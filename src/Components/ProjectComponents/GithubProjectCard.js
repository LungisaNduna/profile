import React, { Component } from 'react'

export class GithubProjectCard extends Component {

    render() {
        const { projInfo } = this.props;
        return (
            <div className="projCard">
                <a className="projCardContainer" href={projInfo.html_url} target="_blank">
                    <img className="projectLogo" src={projInfo.logoSourceUrl}/>
                    <div className="languages">
                        {projInfo.language.map(language => <p className="language">{language}</p>) }
                    </div>
                    {projInfo.has_pages && <div className="pagesLink"><a target="_blank" href={projInfo.liveLink}>Check out the webpage</a></div>}
                </a>
                
            </div>
        )
    }
}

export default GithubProjectCard
