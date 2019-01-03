// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Pagination, Table } from 'semantic-ui-react';

// Local Components
import { TableStyle } from './components';


class TopList extends Component {
	state = {
		loading: true,
		name: null,
		pages: null,
		activePage: null,
		topContributors: null,
		pageSize: 5
	}

	static propTypes = {
		data: PropTypes.array.isRequired,
		entity: PropTypes.string.isRequired
	};

	componentDidMount() {
		this.filterData();
	}

	handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

	filterData() {
		const { pageSize } = this.state;
		const { entity } = this.props;
		const contributors = [];
		this.props.data.Contributions.filter((transaction) => {
			if (transaction.entity === 'Individual' && entity === 'Individuals') {
				contributors.push(transaction);
				return true;
			} else if (transaction.entity === 'Entity' && entity === 'Organizations') {
				contributors.push(transaction);
			} else {
				return false;
			}
		});

		const top = contributors.sort((a, b) => {
			return b.transaction_amount - a.transaction_amount;
		});
		let topContributors = top.slice(0, 20);
		let totalPages = Math.ceil(topContributors.length/ pageSize);
		this.setState({
			loading: false,
			activePage: 1,
			pages: totalPages,
			topContributors
		});
	}

	createContributionList () {
		const { pageSize } = this.state;
		let x;
		let contributionsList = [];
		let i = ((this.state.activePage * pageSize) - pageSize);
		if (this.state.activePage === this.state.pages) {
			x = this.state.topContributors.length;
		} else {
			x = (this.state.activePage * pageSize);
		}

		if (this.state.topContributors.length === 0) {
			contributionsList.push(
				<Table.Row key={0}>
					<Table.Cell></Table.Cell>
					<Table.Cell textAlign='right'>None</Table.Cell>
				</Table.Row>
			);
		} else if (this.state.activePage === this.state.pages) {
			let j = x - i;
			for (i; i < x; i++) {
				contributionsList.push(
					<Table.Row key={i}>
						<Table.Cell>{this.state.topContributors[i].transactor_name}</Table.Cell>
						<Table.Cell textAlign='right'>${this.state.topContributors[i].transaction_amount}</Table.Cell>
					</Table.Row>
				);
			}
			for (j; j < pageSize; j++) {
				contributionsList.push(
					<Table.Row key={j}>
						<Table.Cell></Table.Cell>
						<Table.Cell textAlign='right'>None</Table.Cell>
					</Table.Row>
				);
			}
		} else {
			for (i; i < x; i++) {
				console.log('top cont', this.state.topContributors, i, x, this.state.pages);
				contributionsList.push(
					<Table.Row key={i}>
						<Table.Cell>{this.state.topContributors[i].transactor_name}</Table.Cell>
						<Table.Cell textAlign='right'>${this.state.topContributors[i].transaction_amount}</Table.Cell>
					</Table.Row>
				);
			}
		}
		return <Table.Body>{ contributionsList }</Table.Body>;
	}


	render() {
		const { loading, pages, activePage } = this.state;
		const { entity } = this.props;
		if (loading) {
			return (
				<div>
					Loading
				</div>
			);
		}

		if (!loading) {
			return (
				<div style={{ color:'black' }}>
					<Segment.Group raised>
						<Segment>
							<p>Top Contributing {entity}</p>
						</Segment>
						<Segment.Group>
							<TableStyle>
								<Table stackable selectable fixed singleLine>
									<Table.Header>
										<Table.Row>
											<Table.HeaderCell className="twelve wide">Contributor</Table.HeaderCell>
											<Table.HeaderCell textAlign='right'>Amount</Table.HeaderCell>
										</Table.Row>
									</Table.Header>
									{this.createContributionList()}
								</Table>
							</TableStyle>
						</Segment.Group>
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

export default TopList;
