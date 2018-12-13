// Node Modules
import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

class PieChart extends Component {
	state = {
		filteredData: null,
		loading: true
	}

	static propTypes = {
		data: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.filterPie(this.props.data);
	}

	filterPie() {
		console.log("Pie: ", this.props.data.Contributions);
		let filteredData = [ 0, 0, 0, 0, 0];
		// transaction_amount
		this.props.data.Contributions.filter((transaction) => {
			if (transaction.transaction_amount > 0 && transaction.transaction_amount <= 100) {
				filteredData[0]++;
			} else if (transaction.transaction_amount > 100 && transaction.transaction_amount <= 200) {
				filteredData[1]++;
			} else if (transaction.transaction_amount > 200 && transaction.transaction_amount < 349) {
				filteredData[2]++;

			} else if (transaction.transaction_amount > 349 && transaction.transaction_amount <= 350) {
				filteredData[3]++;

			} else if (transaction.transaction_amount > 350) {
				filteredData[4]++;
			}
			return null;
		});
		console.log('filtered data', filteredData)
		this.setState({
			loading: false,
			filteredData
		});
	}

	render() {
		const { filteredData } = this.state;
		const data = {
			labels: [
				'$0-$100',
				'$101-$200',
				'$201-$349',
				'$350',
				'$350+'
			],
			datasets: [{
				data: filteredData,
				backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'purple',
					'tomato'
				],
				hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'purple',
					'tomato'
				]
			}]
		};

		const chartOptions = {
			legend: { display: true },
			tooltips: { enabled: true }
		};

		return (
			<div>
				<p>Contribution Amount</p>
				<Doughnut
					data={data}
					width={200}
					height={200}
					options={chartOptions}
				/>
			</div>
		);

	}
}

export default PieChart;