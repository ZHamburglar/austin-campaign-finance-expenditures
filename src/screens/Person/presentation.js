// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Table } from 'semantic-ui-react';

class PersonPresentation extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
		person: PropTypes.string.isRequired,
		contNum: PropTypes.number.isRequired,
		contTotal: PropTypes.number.isRequired
	};

	componentDidMount() {
	}

	render() {
		const {
			person,
			contNum,
			contTotal
		} = this.props;


		return (
			<>
				<div className="row">
					<div className="half column fill">
						<Segment.Group raised className="fill">
							<Segment>
								{person}
							</Segment>
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
					</div>
					<div className="half column fill">
						<Segment.Group raised className="fill">
							{this.props.person}
						</Segment.Group>
					</div>
				</div>
				<div className="row">
					<div className="half column">
						{this.props.person}
					</div>
					<div className="half column">
						{this.props.person}
					</div>
				</div>
			</>
		);
	}
}

export default PersonPresentation;
