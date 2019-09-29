import React, { Component } from 'react'
import LungisaProfile from '../../Resources/LungisaProfile.jpg';
export class Header extends Component {

    render(){
        //for speech component look into https://www.npmjs.com/package/react-speech
        return(
            <header className="App-header">
                
                <h1>Lungisa Nduna</h1>
                <img className="ProfilePic" src={LungisaProfile} alt="Lungisa's face" />
                <p>This is my profile page standing in as my online resume.</p>

                {/* a link to the creator of the image which is free for use */}
                <div className="photoCredit">
                    <a className="photoLink" href="https://unsplash.com/@_louisreed?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Louis Reed">
                        <span className="photoLink_span1">
                            <svg className="photoLink_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <title>unsplash-logo</title>
                                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                            </svg>
                        </span>
                        <span className="photoLink_span2">Background Image by Louis Reed</span>
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;