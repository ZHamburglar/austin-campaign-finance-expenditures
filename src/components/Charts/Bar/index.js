// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HorizontalBar } from 'react-chartjs-2';

// Local Components
import districtList from '../../../assets/JSON/DistrictZips.json';

class BarChart extends Component {
	state = {
		loading: true,
		noData: null,
		filteredData: null
	}

	static propTypes = {
		data: PropTypes.array.isRequired
	};

	componentDidMount() {
		(this.props.data.Contributions.length) ? this.filterPie(this.props.data) : this.noDataPie(this.props.data);
	}

	noDataPie() {
		this.setState({
			loading: false,
			noData: "There isn't any data"
		});
	}

	filterPie() {
		let filteredData = [];
		this.props.data.Contributions.filter((transaction) => {
			let newZip;
			if (transaction.transactor_zip_code === undefined) {
				if (transaction.transactor_city.length > 1 ) {
					// ** FOR FUTURE USE **
					// This splits it into City, State, and Zip
					const splitZip = transaction.transactor_city.split(", ");
					// console.log('split?: ', splitZip, transaction.transactor_city.length)
					if (splitZip.length === 3) {
						newZip = splitZip[2].slice(0, 5);
					} else if (splitZip.length === 2) {
						newZip = splitZip[1].slice(0, 5);
					} else {
						newZip = 'Not Categorized';
					}
				} else {
					newZip = 'Not Categorized';
				}
			} else {
				newZip = transaction.transactor_zip_code.slice(0, 5);
			}

			if (filteredData.some((x) => x.zipCode === newZip)) {
				let index = filteredData.findIndex((y) => y.zipCode === newZip);
				filteredData[index].count += 1;
				filteredData[index].amount = filteredData[index].amount + parseInt(transaction.transaction_amount, 10);
			} else {
				let district;
				if (transaction.office_sought) {
					district = transaction.office_sought;
				} else {
					district = transaction.office_held;
				}
				const newObj = Object.assign({});
				newObj.zipCode = newZip;
				newObj.count = 1;
				newObj.amount = parseInt(transaction.transaction_amount, 10);
				newObj.district = district;
				filteredData.push(newObj);
			}
			return null;
		});
		filteredData.sort((a, b) => {
			if(a.amount > b.amount) { return -1; }
			if(a.amount < b.amount) { return 1; }
			return 0;
		});
		this.setState({
			loading: false,
			filteredData
		});
	}

	render() {
		const { filteredData, noData } = this.state;
		const colors = [];
		const labels = [];
		const amounts = [];

		if (filteredData) {
			let i;
			let x;
			if (filteredData.length < 8) {
				x = filteredData.length;
			} else {
				x = 8;
			}
			for (i = 0; i < x; i++ ) {
				if (typeof districtList[filteredData[i].district] == "undefined") {
					labels.push(filteredData[i].zipCode);
					amounts.push(filteredData[i].amount);
					colors.push('red');
				} else if (districtList[filteredData[i].district].includes(parseInt(filteredData[i].zipCode, 10))) {
					labels.push(filteredData[i].zipCode);
					amounts.push(filteredData[i].amount);
					colors.push('green');
				} else {
					labels.push(filteredData[i].zipCode);
					amounts.push(filteredData[i].amount);
					colors.push('red');
				}
			}
			const data = {
				labels,
				datasets: [{
					data: amounts,
					backgroundColor: colors,
					hoverBackgroundColor: colors
				}]
			};

			const chartOptions = {
				legend: { display: true },
				tooltips: { enabled: true }
			};

			return (
				<div style={{ backgroundColor: 'black' }}>
					<HorizontalBar
						data={data}
						width={100}
						height={100}
						options={chartOptions}
					/>
				</div>
			);
		}

		if (noData) {
			return (
				<div>
					There is no data
				</div>
			);
		}

		return (
			<div>
				Loading
			</div>
		);
	}
}

export default BarChart;
