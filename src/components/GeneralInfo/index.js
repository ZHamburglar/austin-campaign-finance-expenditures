// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GeneralInfo extends Component {
	state = {
		loading: true,
		dataRange: null
	}

	static propTypes = {
		data: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.filterData();
	}

	filterData() {
		console.log('hello nurse', this.props.data, this.props.data.Contributions.length);
		const dataRange = [];

		this.setState({
			loading: false
		});
	}

	render() {
		if (this.state.loading) {
			return (
				<div>
					Loading
				</div>
			);
		}

		return (
			<div>
				Not Loading
			</div>
		);
	}
}

export default GeneralInfo;
