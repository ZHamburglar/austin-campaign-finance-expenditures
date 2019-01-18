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
		contTotal: null
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
		this.props.data.filter((transaction) => {
			if (transaction.transactor_name === user) {
				console.log('trans', transaction)
				filteredData.push(transaction);
				total = total + parseInt(transaction.transaction_amount, 10);
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
			contTotal: total
		});
	}

	render() {
		const {
			filteredData,
			person,
			contNum,
			contTotal
		} = this.state;

		if (filteredData) {
			return (
				<PersonPresentation
					data={filteredData}
					person={person}
					contNum={contNum}
					contTotal={contTotal}
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
