// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Table } from 'semantic-ui-react';
import {
	Grid,
} from 'semantic-ui-react';

// Local Components
import CouncilTable from './table';
import GeneralInfo from '../../components/GeneralInfo';
import PieChart from '../../components/Charts/Pie';
import HorizontalBar from '../../components/Charts/Bar';
import TopList from '../../components/TopList';

class PersonPresentation extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
		name: PropTypes.string.isRequired,
		contributors: PropTypes.array.isRequired,
		organizations: PropTypes.array.isRequired,
	};

	componentDidMount() {
	}

	render() {
		const {
			data,
			name,
			contributors,
			organizations
		} = this.props;


		return (
			<>
				<Grid style={{ height: '100%' }}>
					<Grid.Row style={{ height: '50%' }}>
						<Grid.Column mobile={16} tablet={8} computer={5}>
							<GeneralInfo data={data} name={name} />
						</Grid.Column>

						<Grid.Column mobile={16} tablet={8} computer={5}>
							<PieChart data={data} />
						</Grid.Column>

						<Grid.Column mobile={16} tablet={8} computer={6}>
							<PieChart data={data} />
						</Grid.Column>
					</Grid.Row>

					<Grid.Row style={{ height: '50%' }}>
						<Grid.Column mobile={16} tablet={8} computer={5}>
							<CouncilTable data={contributors} />
							{/* <TopList data={data} entity="Individuals" /> */}
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={5}>
							<CouncilTable data={organizations} />
							{/* <TopList data={data} entity="Organizations" /> */}
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={6}>
							<HorizontalBar data={data} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</>
		);
	}
}

export default PersonPresentation;
