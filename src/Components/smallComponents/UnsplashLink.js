import React, { Component } from 'react'

export class UnsplashLink extends Component {
    render() {
        const {linkAddress, Artist} = this.props;
        const title = `Download free do whatever you want high-resolution photos from ${Artist}`;
        return (
            <a className="photoLink" href={linkAddress} target="_blank" rel="noopener noreferrer" title={title}>
                <span className="photolink_span1">
                    <svg className="photoLink_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <title>unsplash-logo</title>
                        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                    </svg>
                </span>
                <span className="photoLink_span2">photo by {Artist}</span>
            </a>
        )
    }
}

export default UnsplashLink
