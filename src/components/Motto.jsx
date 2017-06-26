import React, { Component } from 'react';
import '../style/motto.css';

class Motto extends Component {
	constructor() {
		super();
		this.state = {
			motto : "Rome Wasn’t Built in a Day, But They Were Laying Bricks Every Hour"
		}
	}
	render() {
		return (
			<div className="motto">{ this.state.motto }</div>
		);
	}
}

export default Motto;