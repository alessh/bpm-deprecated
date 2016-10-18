import React, { Component } from 'react';

export default class ProcessListItem extends Component {
	
	render() {

		return(
			<li 
				style={{wordSpacing: 'nowrap'}}
			>
				<a href="#">{this.props.name}</a>
			</li>
		);

	}
}