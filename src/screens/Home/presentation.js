// Node Modules
import React, { Component } from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import moment from 'moment';

// Local Components
import {
	Row,
	Column,
	InfoContainer,
	Info,
	MetricContainer,
	Number,
	Metric,
	VoterButton
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
			loans,
			pledges,
			credit,
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
				<Row>
					<Column>
						<InfoContainer>
							<Info>
								<div>Add</div>
								<div>Something</div>
								<div>Here</div>
							</Info>
						</InfoContainer>
					</Column>

					<Column>
						<MetricContainer>
							<Number>
								<CountUp
									end={expenditures}
									delay={.3}
									duration={2.75}
								/>
								<Metric>
									Expenditures
								</Metric>
							</Number>	
						</MetricContainer>
						<MetricContainer>
							<Number>
								<CountUp
									end={contributions}
									delay={.3}
									duration={2.75}
								/>
								<Metric>
									Contributions
								</Metric>
							</Number>
						</MetricContainer>

						<MetricContainer>
							<Number>
								<CountUp
									end={loans}
									delay={.3}
									duration={2.75}
								/>
								<Metric>
									Loans
								</Metric>
							</Number>
						</MetricContainer>
						<MetricContainer>
							<Number>
								<CountUp
									end={pledges}
									delay={.3}
									duration={2.75}
								/>
								<Metric>
									Pledges
								</Metric>
							</Number>
						</MetricContainer>
						<MetricContainer>
							<Number>
								<CountUp
									end={credit}
									delay={.3}
									duration={2.75}
								/>
								<Metric>
									Credit
								</Metric>
							</Number>
						</MetricContainer>
					</Column>
					<Column>
						<Number>
							<CountUp
								end={council}
								delay={.3}
								duration={2.75}
							/>
							<Metric>
								Council
							</Metric>
						</Number>
					</Column>
				</Row>
				<Row>
					<Column>
						<Number>
							<CountUp
								end={council}
								delay={.3}
								duration={2.75}
							/>
							<Metric>
								Council
							</Metric>
						</Number>
						<Number>
							<CountUp
								end={PACS}
								delay={.3}
								duration={2.75}
							/>
							<Metric>
								PACS
							</Metric>
						</Number>
					</Column>
					<Column>
						<Number>
							<CountUp
								end={individuals}
								delay={.3}
								duration={2.75}
							/>
							<Metric>
								Individuals
							</Metric>
						</Number>
						<Number>
							<CountUp
								end={entities}
								delay={.3}
								duration={2.75}
							/>
							<Metric>
								Entities
							</Metric>
						</Number>
					</Column>
					<Column>
						<div>
							<Number>
								{months}
								<Metric>
									{monthsString}
								</Metric>
							</Number>
							<Number>
								{days}
								<Metric>
									{daysString}
								</Metric>
							</Number>
							<br />
							until the next election.
						</div>
						<div>
							<VoterButton href="https://www.votetexas.gov/register-to-vote/">Registered to vote?</VoterButton>
						</div>
					</Column>
				</Row>
			</>
		);
	};
};

export default HomePresentation;