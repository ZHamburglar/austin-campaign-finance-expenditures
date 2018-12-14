// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HorizontalBar } from 'react-chartjs-2';

// Local Components
import districtList from '../../../assets/JSON/DistrictZips.json';

class BarChart extends Component {
	state = {
		loading: true,
		filteredData: null
	}

	static propTypes = {
		data: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.filterPie(this.props.data);
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
					newZip = splitZip[2].slice(0, 5);
					// console.log('it is so', splitZip[2]);
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
				console.log('Zips: ', transaction.office_sought, transaction.office_held);
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
		const { filteredData } = this.state;
		let colors = [];

		if (filteredData) {
			let i;
			let x;
			if (filteredData.length < 9) {
				x = filteredData.length;
			} else {
				x = 9;
			}
			console.log('filtered?: ', filteredData);
			for (i = 0; i < x; i++ ) {
				if (districtList[filteredData[i].district].includes(parseInt(filteredData[i].zipCode, 10) )) {
					colors.push('green');
				} else {
					colors.push('red');
				}
			}

			const labels = [ filteredData[0].zipCode, filteredData[1].zipCode, filteredData[2].zipCode, filteredData[3].zipCode, filteredData[4].zipCode, filteredData[5].zipCode, filteredData[6].zipCode, filteredData[7].zipCode];
			const amounts = [ filteredData[0].amount, filteredData[1].amount, filteredData[2].amount, filteredData[3].amount, filteredData[4].amount, filteredData[5].amount, filteredData[6].amount, filteredData[7].amount];
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

		return (
			<div>
				Loading
			</div>
		);


	}
}

export default BarChart;
