// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CouncilTable extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired
	};

	render() {
		const columns = [{
			Header: (props) => <span>Recipient</span>,
			accessor: 'filer_name', // String-based value accessors!
			Cell: (props) => <span onClick={() => this.props.changeOrgPage(props.value)} value={props.value}>{props.value}</span>
		}, {
			Header: 'Amount',
			accessor: 'transaction_amount',
			Cell: (props) => <span className='number'>${props.value}</span> // Custom cell components!
		}, {
			id: 'friendName', // Required because our accessor is not a string
			Header: () => <span>Report Listed</span>,
			accessor: 'report_type' // Custom value accessors!
		}, {
			Header: (props) => <span>Date</span>, // Custom header components!
			accessor: 'transaction_date',
			Cell: (props) => <span className='number'>{props.value.split('T')[0]}</span>
		}];

		return <ReactTable
			data={this.props.data}
			columns={columns}
			defaultPageSize={5}
			showPaginationBottom={true}
			showPagination={true}
			pageSizeOptions={[5]}
			previousText={'Back'}
		/>;
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	changeOrgPage: (org) => push({
		pathname: '/council/' + org,
		state: {
			hello: "state value"
		}
	})
}, dispatch);

export default connect(null, mapDispatchToProps)(CouncilTable);
