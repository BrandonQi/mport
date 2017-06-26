import React, { Component } from 'react';
import Image from 'react-bootstrap/lib/Image';
import HomepageIconImage from '../assets/homepageIcon.png';
import '../style/homepageIcon.css';

class HomepageIcon extends Component {
	constructor() {
		super();
		this.state = {}
	}
	render() {
		return (
			<div className="iconContainer">
				<Image className="homepageIcon" src={ HomepageIconImage } rounded />
				<div className="overlay">
    				<div className="text">Bin Qi</div>
  				</div>
			</div>
		);
	}
}

export default HomepageIcon;