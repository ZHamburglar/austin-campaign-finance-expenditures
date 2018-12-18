// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class GeneralInfo extends Component {
	state = {
		loading: true,
		name: null,
		dataRange: null,
		reports: null
	}

	static propTypes = {
		data: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.filterData();
	}

	filterData() {
		const dataRange = [];
		let reports = new Set();
		this.props.data.Contributions.filter((transaction) => {
			reports.add(transaction.report_type + " '"+ moment(transaction.transaction_date).format("YY"));
			return null;
		});
		let moments = this.props.data.Contributions.map((date) => moment(date.transaction_date)),
			first = moment.min(moments).format("MM-DD-YYYY"),
			last = moment.max(moments).format("MM-DD-YYYY");
		dataRange.push(first, last);
		this.setState({
			loading: false,
			dataRange,
			reports: Array.from(reports)
		});
	}

	render() {
		const { loading, name, dataRange, reports } = this.state;
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
					<div>Name: {name}</div>
					<div>Date Range: {dataRange[0]} - {dataRange[1]}</div>
					<div>Reports: {reports.map((report, i) => (
						<div key={i}>{report}</div>
					))}
					</div>
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
