// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Segment, Pagination } from 'semantic-ui-react';


class GeneralInfo extends Component {
	state = {
		loading: true,
		name: null,
		dataRange: null,
		reports: null,
		pages: null,
		activePage: null
	}

	static propTypes = {
		data: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.filterData();
	}

	handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

	filterData() {
		const dataRange = [];
		let reportsSet = new Set();
		this.props.data.Contributions.filter((transaction) => {
			reportsSet.add(transaction.report_type + " '"+ moment(transaction.transaction_date).format("YY"));
			return null;
		});
		let moments = this.props.data.Contributions.map((date) => moment(date.transaction_date)),
			first = moment.min(moments).format("MM-DD-YYYY"),
			last = moment.max(moments).format("MM-DD-YYYY");
		dataRange.push(first, last);
		const reportsArr = Array.from(reportsSet);
		const pages = Math.ceil(reportsArr.length/3);
		this.setState({
			loading: false,
			dataRange,
			reports: reportsArr,
			pages,
			activePage: 1
		});
	}

	createReportsList () {
		let x;
		let reportsList = [];
		let i = ((this.state.activePage * 3) -3);
		if (this.state.activePage === this.state.pages) {
			x = this.state.reports.length;
		} else {
			x = (this.state.activePage * 3);
		}

		if (this.state.reports.length === 0) {
			reportsList.push(
				<Segment key={0}>
					<p>None</p>
				</Segment>
			);
		} else {
			for (i; i < x; i++) {
				reportsList.push(
					<Segment key={i}>
						<p>{this.state.reports[i]}</p>
					</Segment>
				);
			}
		}
		return <Segment.Group>{ reportsList }</Segment.Group>;
	}


	render() {
		const { loading, name, dataRange, pages, activePage } = this.state;
		if (loading) {
			return (
				<div>
					Loading
				</div>
			);
		}

		if (!loading) {
			return (
				<div style={{color:'black'}}>
					<div>Name: {name}</div>
					<Segment.Group raised>
						<Segment>
							<p>Date Range:</p>
						</Segment>
						<Segment.Group horizontal>
							<Segment>First: {dataRange[0]}</Segment>
							<Segment>Last: {dataRange[1]}</Segment>
						</Segment.Group>

					</Segment.Group>

					<Segment.Group raised>
						<Segment>
							<p>Reports Included:</p>
						</Segment>
						{this.createReportsList()}
						<Pagination
							activePage={activePage}
							onPageChange={this.handlePaginationChange}
							firstItem={null}
							lastItem={null}
							pointing
							secondary
							totalPages={pages}
						/>
					</Segment.Group>
				</div>
			);
		}

		return (
			<div>
				Not Loading
			</div>
		);
	}
}

export default GeneralInfo;
