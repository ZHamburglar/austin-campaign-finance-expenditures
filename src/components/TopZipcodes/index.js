import React, { Component } from 'react';

import PropTypes from 'prop-types';

class TopZipcodes extends Component {
	static propTypes = {
		zipCodes: PropTypes.array.isRequired,
	};

	render() {

		return (
			<div>
				{this.props.zipCodes.map( zip => {
					return <div key={zip.zipCode}>Zip Code: {zip.zipCode} # Contributions: {zip.count} $Amount: {zip.amount}</div>
				})}
			</div>
		)

	}
}

export default TopZipcodes;
