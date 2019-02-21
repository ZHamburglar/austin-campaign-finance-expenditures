// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import {
	Grid
} from 'semantic-ui-react';

// Local Components
import CouncilPresentation from './presentation';
import Loading from '../../components/Loading';
import GeneralInfo from '../../components/GeneralInfo';
import PieChart from '../../components/Charts/Pie';
import HorizontalBar from '../../components/Charts/Bar';
import TopList from '../../components/TopList';

class Council extends Component {
	state = {
		loading: true,
		filteredData: null,
		zipCodes: null,
		name: null,
		contributors: null,
		organizations: null
	}

	static propTypes = {
		data: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.filterData(this.props.match.params.org);
	}

	componentWillReceiveProps(nextProps) {
		console.log('props change??', nextProps.selectedOrganization);
	}

	filterData(targetOrg) {
		const { filterDates } = this.props;
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
		if (filterDates) {
			this.setState({
				name: this.props.match.params.org
			}, this.filterByDate(filteredData));
		} else {
			this.setState({
				name: this.props.match.params.org,
				filteredData: filteredData.Contributions
			}, this.createTableOrganizations(filteredData.Contributions));
		}
	}

	filterByDate(data) {
		const { filterDates } = this.props;
		let dateFiltered = [];
		data.Contributions.filter((transaction) => {
			if (moment(transaction.transaction_date).isSameOrAfter(filterDates[0]) && moment(transaction.transaction_date).isSameOrBefore(filterDates[1])) {
				dateFiltered.push(transaction);
			}
			return null;
		});
		this.setState({
			filteredData: dateFiltered
		}, this.createTableOrganizations(dateFiltered));
	}

	createTableOrganizations(data) {
		const contributors = [];
		const organizations = [];
		data.filter((transaction) => {
			if (transaction.entity === 'Individual') {
				contributors.push(transaction);
				return true;
			} else if (transaction.entity === 'Entity') {
				organizations.push(transaction);
				return true;
			} else {
				return false;
			}
		});
		this.setState({
			loading: false,
			contributors,
			organizations
		});

		console.log(contributors, organizations);

		console.log('boooooo');
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
		const {
			filteredData,
			name,
			contributors,
			organizations
		} = this.state;
		if (this.state.loading) {
			return (
				<div>
					<Loading />
				</div>
			);
		}

		if (filteredData) {
			return (
				<>
					<CouncilPresentation
						data={filteredData}
						name={name}
						contributors={contributors}
						organizations={organizations}
					/>
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

const mapStateToProps = ({ dates }) => ({
	filterDates: dates.filterDates
});

export default connect(mapStateToProps, null)(Council);
