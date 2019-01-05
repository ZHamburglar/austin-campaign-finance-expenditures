// Node Modules
import React, { Component } from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

class HomePresentation extends Component {
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
		console.log(this.props);
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
		return (
			<div>
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
				<div>
					<CountUp
						end={council}
						delay={.3}
						duration={2.75}
					/>
					Council
				</div>
				<div>
					<CountUp
						end={PACS}
						delay={.3}
						duration={2.75}
					/>
					PACS
				</div>
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
		);
	};
};

export default HomePresentation;
