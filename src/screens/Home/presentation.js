// Node Modules
import React, { Component } from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import moment from 'moment';
import Iframe from 'react-iframe';
import {
	Statistic,
	Grid,
} from 'semantic-ui-react';

// Local Components
import VotingButton from '../../components/Buttons/VotingButton';
// import HomeTopContributors from '../../components/HomeTopContributors';
import {
	Column,
	InfoContainer,
	Number,
	Metric
} from './components';

class HomePresentation extends Component {
	state = {
		months: null,
		monthsString: null,
		days: null,
		daysString: null
	}
	static propTypes = {
		contributions: PropTypes.number.isRequired,
		expenditures: PropTypes.number.isRequired,
		loans: PropTypes.number.isRequired,
		pledges: PropTypes.number.isRequired,
		credit: PropTypes.number.isRequired,
		council: PropTypes.number.isRequired,
		PACS: PropTypes.number.isRequired,
		individuals: PropTypes.number.isRequired,
		entities: PropTypes.number.isRequired,
	};

	componentDidMount() {
		this.getTime();
	}

	getTime() {
		let months;
		let monthsString;
		let daysString;
		const vote = moment('2019-11-05').diff(moment(), 'milliseconds');
		const duration = moment.duration(vote);
		if (duration._data.years > 0) {
			months = duration._data.years * 12 + duration._data.months;
			monthsString = "Months";
		} else if(duration._data.months === 1) {
			months = duration._data.months;
			monthsString = "Month";
		} else {
			months = duration._data.months;
			monthsString = "Months";
		}

		if (duration._data.days === 1) {
			daysString = "Day";
		} else {
			daysString = "Days";
		}

		this.setState({
			months,
			monthsString,
			days: duration._data.days,
			daysString
		});
	}

	render () {
		const {
			contributions,
			expenditures,
			council,
			PACS,
			individuals,
			entities
		} = this.props;
		const {
			months,
			monthsString,
			days,
			daysString
		} = this.state;

		return (
			<>
				<Grid style={{ height: '100%' }}>
					<Grid.Row style={{ height: '50%' }}>
						<Grid.Column mobile={16} tablet={8} computer={5}>
							<Column>
								<Statistic.Group>
									<Statistic>
										<Statistic.Value>
											<Number>
												<CountUp
													end={individuals}
													delay={.3}
													duration={2.75}
												/>
											</Number>
										</Statistic.Value>
										<Statistic.Label>
											<Metric>
												Individuals
											</Metric>
										</Statistic.Label>
									</Statistic>
								</Statistic.Group>
								<Statistic.Group>
									<Statistic>
										<Statistic.Value>
											<Number>
												<CountUp
													end={entities}
													delay={.3}
													duration={2.75}
												/>
											</Number>
										</Statistic.Value>
										<Statistic.Label>
											<Metric>
												Entities
											</Metric>
										</Statistic.Label>
									</Statistic>
								</Statistic.Group>
							</Column>
						</Grid.Column>

						<Grid.Column mobile={16} tablet={8} computer={5}>
							<Column>
								<Statistic.Group>
									<Statistic>
										<Statistic.Value>
											<Number>
												<CountUp
													end={council}
													delay={.3}
													duration={2.75}
												/>
											</Number>
										</Statistic.Value>
										<Statistic.Label>
											<Metric>
												Council
											</Metric>
										</Statistic.Label>
									</Statistic>
								</Statistic.Group>
								<Statistic.Group>
									<Statistic>
										<Statistic.Value>
											<Number>
												<CountUp
													end={PACS}
													delay={.3}
													duration={2.75}
												/>
											</Number>
										</Statistic.Value>
										<Statistic.Label>
											<Metric>
												PACS
											</Metric>
										</Statistic.Label>
									</Statistic>
								</Statistic.Group>
							</Column>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={6}>
							<Column>
								<div>
									<Statistic.Group>
										<Statistic>
											<Statistic.Value>
												<Number>
													{months}
												</Number>
											</Statistic.Value>
											<Statistic.Label>
												<Metric>
													{monthsString}
												</Metric>
											</Statistic.Label>
										</Statistic>
										<Statistic>
											<Statistic.Value>
												<Number>
													{days}
												</Number>
											</Statistic.Value>
											<Statistic.Label>
												<Metric>
													{daysString}
												</Metric>
											</Statistic.Label>
										</Statistic>
									</Statistic.Group>
									<Statistic.Group>
										<Statistic>
											<Statistic.Label>
												<Metric>
													Until Next Election
												</Metric>
											</Statistic.Label>
										</Statistic>
									</Statistic.Group>
								</div>
								<VotingButton name='kevin' />
							</Column>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row style={{ height: '50%' }}>
						<Grid.Column mobile={16} tablet={8} computer={5}>
							<Column>
								<Statistic.Group>
									<Statistic>
										<Statistic.Value>
											<Number>
												22
											</Number>
										</Statistic.Value>
										<Statistic.Label>
											<Metric>
												Faves
											</Metric>
										</Statistic.Label>
									</Statistic>
								</Statistic.Group>
								<Statistic.Group>
									<Statistic>
										<Statistic.Value>
											<Number>
												22
											</Number>
										</Statistic.Value>
										<Statistic.Label>
											<Metric>
												Faves
											</Metric>
										</Statistic.Label>
									</Statistic>
								</Statistic.Group>
							</Column>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={5}>
							<Column>
								<Statistic.Group>
									<Statistic>
										<Statistic.Value>
											<Number>
												<CountUp
													end={expenditures}
													delay={.3}
													duration={2.75}
												/>
											</Number>
										</Statistic.Value>
										<Statistic.Label>
											<Metric>
												Expenditures
											</Metric>
										</Statistic.Label>
									</Statistic>
								</Statistic.Group>
								<Statistic.Group>
									<Statistic>
										<Statistic.Value>
											<Number>
												<CountUp
													end={contributions}
													delay={.3}
													duration={2.75}
												/>
											</Number>
										</Statistic.Value>
										<Statistic.Label>
											<Metric>
												Contributions
											</Metric>
										</Statistic.Label>
									</Statistic>
								</Statistic.Group>
							</Column>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={6}>
							<Column>
								<InfoContainer className="standard">
									{/* Change the iframe to take up 100% with text out of frame */}
									<Iframe url="http://media.swagit.com/austintx/atxn1/"
										width="100%"
										height="100%"
										display="initial"
										position="relative"
										allowFullScreen
									/>
								</InfoContainer>
							</Column>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</>
		);
	};
};

export default HomePresentation;
