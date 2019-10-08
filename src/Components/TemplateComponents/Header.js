import React, { Component } from 'react'
import LungisaProfile from '../../Resources/LungisaProfile.jpg';
import UnsplashLink from '../smallComponents/UnsplashLink';
import Switch from 'react-switch';

export class Header extends Component {

    constructor(props){
        super(props);
        this.state = { checked: true, }
    }

    handleChange = (checked) => {
        this.setState({ checked });
        this.props.handleSwitch(checked);
    }
    render(){
        //for speech component look into https://www.npmjs.com/package/react-speech
        return(
            <header className="App-header">
                
                <h1>Lungisa Nduna</h1>
                <div className="StyleSwitchDiv">
                    <span className="StyleSwitchSpan">The look is set to {(this.state.checked) ? "Professional" : "Expressive" } </span>
                    <Switch 
                        onChange={this.handleChange} 
                        checked={this.state.checked}
                        uncheckedIcon={
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 15,
                                color: "orange",
                                paddingRight: 2
                              }}
                            >
                              Exp
                            </div>
                          }
                          checkedIcon={
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 15,
                                color: "blue",
                                paddingRight: 2
                              }}
                            >
                              Prof
                            </div>
                          }
                    />
                </div> 
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