// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Local Components
import Pagination from '../../components/Table/Pagination';

class CouncilTable extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired
	};

	render() {
		const columns = [{
			Header: (props) => <span>Contributor</span>,
			accessor: 'transactor_name', // String-based value accessors!
			Cell: (props) => <span onClick={() => this.props.changeOrgPage(props.value)} value={props.value}>{props.value}</span>
		}, {
			Header: 'Amount',
			accessor: 'transaction_amount',
			sort: 'desc',
			Cell: (props) => <span className='number'>{parseInt(props.value, 10)}</span> // Custom cell components!
		}, {
			Header: (props) => <span>Date</span>, // Custom header components!
			accessor: 'transaction_date',
			Cell: (props) => <span className='number'>{props.value.split('T')[0]}</span>
		}];

		return <ReactTable
			data={this.props.data}
			columns={columns}
			defaultPageSize={5}
			PaginationComponent={Pagination}
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
