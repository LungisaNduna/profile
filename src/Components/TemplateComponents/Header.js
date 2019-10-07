import React, { Component } from 'react'
import LungisaProfile from '../../Resources/LungisaProfile.jpg';
import UnsplashLink from '../smallComponents/UnsplashLink';
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
                    <UnsplashLink linkAddress="https://unsplash.com/@_louisreed?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge" Artist="Louis Reed" />
                </div>
            </header>
        );
    }
}

export default Header;