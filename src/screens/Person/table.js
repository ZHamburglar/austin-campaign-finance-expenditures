// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

class PersonTable extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired
	};

	render() {
		const columns = [{
			Header: (props) => <span>Recipient</span>,
			accessor: 'filer_name' // String-based value accessors!
		}, {
			Header: 'Amount',
			accessor: 'transaction_amount',
			Cell: props => <span className='number'>${props.value}</span> // Custom cell components!
		}, {
			id: 'friendName', // Required because our accessor is not a string
			Header: props => <span>Report Listed</span>,
			accessor: 'report_type' // Custom value accessors!
		}, {
			Header: props => <span>Date</span>, // Custom header components!
			accessor: 'transaction_date'
		}];

		return <ReactTable
			data={this.props.data}
			columns={columns}
			defaultPageSize={5}
			showPaginationBottom={true}
			showPagination={true}
			pageSizeOptions={[5]}
		/>;
	}
}

export default PersonTable;
