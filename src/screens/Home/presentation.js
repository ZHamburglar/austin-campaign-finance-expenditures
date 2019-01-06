// Node Modules
import React, { Component } from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import moment from 'moment';

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
		const vote = moment('2020-11-08').diff(moment(), 'milliseconds');
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
				<div className="row">
					<div className="one-third column" style={{ background:'tomato' }}>
						<div>
							<CountUp
								end={contributions}
								delay={.3}
								duration={2.75}
							/>
							Contributions
						</div>
						<div>
							<CountUp
								end={expenditures}
								delay={.3}
								duration={2.75}
							/>
							Expenditures
						</div>
					</div>
					<div className="one-third column" style={{ background:'purple' }}>
						<div>
							<CountUp
								end={loans}
								delay={.3}
								duration={2.75}
							/>
							Loans
						</div>
						<div>
							<CountUp
								end={pledges}
								delay={.3}
								duration={2.75}
							/>
							Pledges
						</div>
						<div>
							<CountUp
								end={credit}
								delay={.3}
								duration={2.75}
							/>
							Credit
						</div>
					</div>
					<div className="one-third column" style={{ background:'blue' }}>
						<div>
							<CountUp
								end={council}
								delay={.3}
								duration={2.75}
							/>
							Council
						</div>
					</div>
				</div>
				<div className="row">
					<div className="one-third column" style={{ background:'red' }}>
						<div>
							<CountUp
								end={PACS}
								delay={.3}
								duration={2.75}
							/>
							PACS
						</div>
					</div>
					<div className="one-third column">
						<div>
							<CountUp
								end={individuals}
								delay={.3}
								duration={2.75}
							/>
							Individuals
						</div>
						<div>
							<CountUp
								end={entities}
								delay={.3}
								duration={2.75}
							/>
							entities
						</div>
					</div>
					<div className="one-third column">
						<div>
							<br />
							{months} {monthsString}
							<br />
							{days} {daysString} until the next election.
						</div>
						<div>
							<a href="https://www.votetexas.gov/register-to-vote/">Registered to vote?</a>
						</div>
					</div>
				</div>
			</>
		);
	};
};

export default HomePresentation;
