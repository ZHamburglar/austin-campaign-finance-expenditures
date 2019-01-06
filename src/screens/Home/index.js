// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Local Components
import UpdateModal from '../../components/Modal';
import Presentation from './presentation';

class Home extends Component {
	state = {
		loading: true,
		contributions: null,
		expenditures: null,
		loans: null,
		pledges: null,
		credit: null,
		council: null,
		PACS: null,
		individuals: null,
		entities: null
	}

	static propTypes = {
		data: PropTypes.array.isRequired,
		organizations: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.filterData(this.props.data, this.props.organizations);
	}

	filterData(data, organizations) {
		let i;
		let contributions = 0,
			expenditures = 0,
			loans = 0,
			pledges = 0,
			credit = 0,
			council = organizations.Council.length,
			PACS = organizations.Organizations.length,
			individuals = new Set(),
			entities = new Set();
		for (i = 0; i < data.length; i++) {
			if (data[i].transaction_type === "Contribution") {
				contributions++;
			} else if (data[i].transaction_type === "Expenditure") {
				expenditures++;
			} else if (data[i].transaction_type === "Loan") {
				loans++;
			} else if (data[i].transaction_type === "Pledged Contribution") {
				pledges++;
			} else if (data[i].transaction_type === "Credit") {
				credit++;
			};
			if (data[i].entity === 'Individual') {
				individuals.add(data[i].transactor_name);
			} else if (data[i].entity === 'Entity') {
				entities.add(data[i].transactor_name);
			}
		}
		const individualArr = Array.from(individuals);
		const entitiesArr = Array.from(entities);
		this.setState({
			contributions,
			expenditures,
			loans,
			pledges,
			credit,
			council,
			PACS,
			individuals: individualArr.length,
			entities: entitiesArr.length
		});
	}

	render () {
		const { open } = this.props;
		const {
			contributions,
			expenditures,
			loans,
			pledges,
			credit,
			council,
			PACS,
			individuals,
			entities
		} = this.state;

		if (!open) {
			return (
				<>
					<Presentation
						contributions={contributions}
						expenditures={expenditures}
						loans={loans}
						pledges={pledges}
						credit={credit}
						council={council}
						PACS={PACS}
						individuals={individuals}
						entities={entities}
					/>
				</>
			);
		}
		return (
			<>
				<UpdateModal />
			</>
		);
	};
};

const mapStateToProps = ({ modal }) => ({
	open: modal.open
});

export default connect(mapStateToProps, null)(Home);
