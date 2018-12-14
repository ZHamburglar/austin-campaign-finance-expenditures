// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { Grid } from 'semantic-ui-react';


class PieChart extends Component {
	state = {
		loading: true,
		filteredData: null,
		total: null,
		mean: null,
		median: null
	}

	static propTypes = {
		data: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.filterPie(this.props.data);
	}

	filterPie() {
		let filteredData = [ 0, 0, 0, 0, 0];
		let total = 0;
		this.props.data.Contributions.filter((transaction) => {
			if (transaction.transaction_amount > 0 && transaction.transaction_amount <= 100) {
				total = total + parseInt(transaction.transaction_amount, 10);
				filteredData[0]++;
			} else if (transaction.transaction_amount > 100 && transaction.transaction_amount <= 200) {
				total = total + parseInt(transaction.transaction_amount, 10);
				filteredData[1]++;
			} else if (transaction.transaction_amount > 200 && transaction.transaction_amount < 349) {
				total = total + parseInt(transaction.transaction_amount, 10);
				filteredData[2]++;
			} else if (transaction.transaction_amount > 349 && transaction.transaction_amount <= 350) {
				total = total + parseInt(transaction.transaction_amount, 10);
				filteredData[3]++;
			} else if (transaction.transaction_amount > 350) {
				total = total + parseInt(transaction.transaction_amount, 10);
				filteredData[4]++;
			}
			return null;
		});
		let mean = parseFloat(total/this.props.data.Contributions.length).toFixed(2);
		this.setState({
			loading: false,
			filteredData,
			total,
			mean
		});
	}

	render() {
		const { filteredData, total, mean } = this.state;
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
			<div style={{ backgroundColor: 'black' }}>
				<Grid>
					<Grid.Row columns={1}>
						<Grid.Column>
							<p>Contribution Amount</p>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={2}>
						<Grid.Column>
							<p>Total: ${total}</p>
						</Grid.Column>
						<Grid.Column>
							<p>Mean: ${mean}</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Doughnut
					data={data}
					width={100}
					height={100}
					options={chartOptions}
				/>
			</div>
		);

	}
}

export default PieChart;
