// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Table } from 'semantic-ui-react';
import {
	Grid,
} from 'semantic-ui-react';

// Local Components
import PersonTable from './table';

class PersonPresentation extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
		person: PropTypes.string.isRequired,
		contNum: PropTypes.number.isRequired,
		contTotal: PropTypes.number.isRequired,
		location: PropTypes.array.isRequired
	};

	componentDidMount() {
	}

	render() {
		const {
			data,
			person,
			contNum,
			contTotal,
			location
		} = this.props;


		return (
			<>
				<Grid style={{ height: '100%' }}>
					<Grid.Row style={{ height: '50%' }}>
						<Grid.Column mobile={16} tablet={8} computer={8}>
							<Segment.Group raised className="fill">
								<Segment>
									{person}
								</Segment>
								<Segment.Group horizontal>
									<Segment>
										{location[0].city}
									</Segment>
									<Segment>
										{location[0].zipcode}
									</Segment>
								</Segment.Group>
								<Table>
									<Table.Body className="standard">
										<Table.Row>
											<Table.Cell>Number of Contributions</Table.Cell>
											<Table.Cell>{contNum}</Table.Cell>
										</Table.Row>
										<Table.Row>
											<Table.Cell>Total Contributions</Table.Cell>
											<Table.Cell>${contTotal}</Table.Cell>
										</Table.Row>
									</Table.Body>
								</Table>
							</Segment.Group>
						</Grid.Column>

						<Grid.Column mobile={16} tablet={8} computer={8}>
							{this.props.person}
						</Grid.Column>
					</Grid.Row>

					<Grid.Row style={{ height: '50%' }}>
						<Grid.Column mobile={16} tablet={8} computer={8}>
							<PersonTable data={data} />
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={8}>
							{this.props.person}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</>
		);
	}
}

export default PersonPresentation;
