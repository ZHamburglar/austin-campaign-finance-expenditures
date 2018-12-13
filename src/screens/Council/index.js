// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Local Components
import Loading from '../../components/Loading';
import TopZipcodes from '../../components/TopZipcodes';

class Council extends Component {
	state = {
		loading: true,
		zipCodes: null
	}
	static propTypes = {
		data: PropTypes.array.isRequired,
		filteredData: PropTypes.array,
		selectedOrganization: PropTypes.string.isRequired
	};

	componentDidMount() {
		this.createZipCodeList(this.props.selectedOrganization);
	}
	// The issue is arising in the createZipCodeList
	componentWillReceiveProps(nextProps) {
		console.log('props change??', nextProps.selectedOrganization);
		this.createZipCodeList(nextProps.selectedOrganization);
	}

	createZipCodeList(selectedOrganization) {
		let zipCodes = [];
		this.props.data.filter((transaction) => {
			if (transaction.filer_name === selectedOrganization && transaction.transaction_type === "Contribution") {
				// Note that some don't have the transactor_zip_code property, need to fix in future
				// Use Regex to remove the 4 digits after "-"
				let newZip;
				if (transaction.transactor_zip_code === undefined) {
					newZip = 'Not Categorized'
				} else {
					newZip = transaction.transactor_zip_code.slice(0,5)
				}
				if (zipCodes.some(x => x.zipCode === newZip)) {
					let index = zipCodes.findIndex(y => y.zipCode === newZip)
					zipCodes[index].count += 1;
					zipCodes[index].amount = zipCodes[index].amount + parseInt(transaction.transaction_amount, 10);
				} else {
					const newObj = Object.assign({});
					newObj.zipCode = newZip;
					newObj.count = 1;
					newObj.amount = parseInt(transaction.transaction_amount, 10);
					zipCodes.push(newObj)
				}
			}
			return null;
		})
		console.log("zip codes", zipCodes)
		this.setState({
			loading: false,
			zipCodes
		})
	}

	render() {
		if (this.state.loading) {
			return (
				<div
					className="App"
				>
					<Loading />
				</div>
			)
		}

	return (
			<>
			<div className="Main">
					<div className="main-container">Council
						<TopZipcodes zipCodes={this.state.zipCodes} />
					</div>
				</div>
			</>
		)

	}
}

export default Council;
