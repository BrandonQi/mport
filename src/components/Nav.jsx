import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import '../style/nav.css';

class Motto extends Component {
	constructor() {
		super();
		this.state = {
			naviItems : [
				{
					id: 1,
					label : "Home",
					link : ""
				},
				{
					id: 2,
					label : "Resume",
					link : ""
				},
				{
					id: 3,
					label : "Photography",
					link : ""
				},
				{
					id: 4,
					label : "Product",
					link : ""
				},
				{
					id: 5,
					label : "Github",
					link : ""
				}
			]
		}
	}
	render() {
		let items = this.state.naviItems;
		return (
		  <Breadcrumb className="homepageNav">
		  	{items.map( item => <Breadcrumb.Item key={ item.id } href={ item.link }>{ item.label }</Breadcrumb.Item> )}
		  </Breadcrumb>
		);
	}
}

export default Motto;