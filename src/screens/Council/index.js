// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

// Local Components
import Loading from '../../components/Loading';
import PieChart from '../../components/Charts/Pie';
import HorizontalBar from '../../components/Charts/Bar';

class Council extends Component {
	state = {
		loading: true,
		filteredData: null,
		zipCodes: null
	}

	static propTypes = {
		data: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.filterData(this.props.match.params.org);
		// this.createZipCodeList(this.props.match.params.org);
	}

	componentWillReceiveProps(nextProps) {
		console.log('props change??', nextProps.selectedOrganization);
		// this.createZipCodeList(nextProps.selectedOrganization);
	}

	filterData(targetOrg) {
		let filteredData = [];
		filteredData.Contributions = [];
		filteredData.Expenditures = [];
		this.props.data.filter((transaction) => {
			if (transaction.filer_name === targetOrg && transaction.transaction_type === "Contribution") {
				filteredData.Contributions.push(transaction);
			} else if (transaction.filer_name === targetOrg && transaction.transaction_type === "Expenditure") {
				filteredData.Expenditures.push(transaction);
			}
			return null;
		});
		this.setState({
			loading: false,
			filteredData
		});
	}

	createZipCodeList(selectedOrganization) {
		let zipCodes = [];
		this.props.data.filter((transaction) => {
			if (transaction.filer_name === selectedOrganization && transaction.transaction_type === "Contribution") {
				// Note that some don't have the transactor_zip_code property, need to fix in future
				// Use Regex to remove the 4 digits after "-"
				let newZip;
				if (transaction.transactor_zip_code === undefined) {
					newZip = 'Not Categorized';
				} else {
					newZip = transaction.transactor_zip_code.slice(0, 5);
				}
				if (zipCodes.some((x) => x.zipCode === newZip)) {
					let index = zipCodes.findIndex((y) => y.zipCode === newZip);
					zipCodes[index].count += 1;
					zipCodes[index].amount = zipCodes[index].amount + parseInt(transaction.transaction_amount, 10);
				} else {
					const newObj = Object.assign({});
					newObj.zipCode = newZip;
					newObj.count = 1;
					newObj.amount = parseInt(transaction.transaction_amount, 10);
					zipCodes.push(newObj);
				}
			}
			return null;
		});
		this.setState({
			loading: false,
			zipCodes
		});
	}

	render() {
		if (this.state.loading) {
			return (
				<div
					className="App"
				>
					<Loading />
				</div>
			);
		}

		if (this.state.filteredData) {
			return (
				<>
					<Grid columns={3}>
						<Grid.Row>
							<Grid.Column>
								<PieChart data={this.state.filteredData} />
							</Grid.Column>
							<Grid.Column>
								<PieChart data={this.state.filteredData} />
							</Grid.Column>
							<Grid.Column>
								<PieChart data={this.state.filteredData} />
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<HorizontalBar data={this.state.filteredData} />
							</Grid.Column>
							<Grid.Column>
								<HorizontalBar data={this.state.filteredData} />
							</Grid.Column>
							<Grid.Column>
								<HorizontalBar data={this.state.filteredData} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</>
			);
		}

		return (
			<>
				Something has gone wrong.
			</>
		);
	}
}

export default Council;
