// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired
	};

	render() {
		return (
			<div>
				This is the person page.
			</div>
		);
	}
}

export default Person;
