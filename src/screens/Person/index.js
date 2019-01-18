// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Local Components
import PersonPresentation from './presentation';

class Person extends Component {
	state = {
		filteredData: null,
		person: null,
		contNum: null,
		contTotal: null,
		location: null
	};

	static propTypes = {
		data: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.filterData(this.props.match.params.user);
	}

	filterData(user) {
		let number= 0,
			total= 0;
		const filteredData = [];
		const location = [];
		this.props.data.filter((transaction) => {
			if (transaction.transactor_name === user) {
				filteredData.push(transaction);
				total = total + parseInt(transaction.transaction_amount, 10);
				const locationSplit = transaction.transactor_city.split(', ');
				const locationObj = Object.assign({});
				locationObj.city = locationSplit[0] + ", " + locationSplit[1];
				locationObj.zipcode = locationSplit[2];
				location.push(locationObj);
			}
			return null;
		});
		let person = user.split(', ').reverse();
		let personjoin = person[0] + ' ' + person[1];
		number = filteredData.length;
		this.setState({
			filteredData,
			person: personjoin,
			contNum: number,
			contTotal: total,
			location
		});
	}

	render() {
		const {
			filteredData,
			person,
			contNum,
			contTotal,
			location
		} = this.state;

		if (filteredData) {
			return (
				<PersonPresentation
					data={filteredData}
					person={person}
					contNum={contNum}
					contTotal={contTotal}
					location={location}
				/>
			);
		}
		return (
			<>
			</>
		);
	}
}

export default Person;
