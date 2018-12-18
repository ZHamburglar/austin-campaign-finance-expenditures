// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
		const dates = [];
		const dataRange = [];
		this.props.data.Contributions.filter((transaction) => {
			dates.push(moment(transaction.transaction_date).format("MM-DD-YYYY"));
			return null;
		});
		dates.sort((a, b) => {
			if(a < b) { return -1; }
			if(a > b) { return 1; }
			return 0;
		});
		dataRange.push(dates[0]);
		dataRange.push(dates[dates.length - 1]);
		this.setState({
			loading: false,
			dataRange
		});
	}

	render() {
		const { loading, dataRange } = this.state;
		if (loading) {
			return (
				<div>
					Loading
				</div>
			);
		}

		if (!loading) {
			return (
				<div>
					<div>Name:</div>
					<div>Date Range: {dataRange[0]} - {dataRange[1]}</div>
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
