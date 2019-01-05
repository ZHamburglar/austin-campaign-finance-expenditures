// Node Modules
import React, { Component } from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

// Local Components
import UpdateModal from '../../components/Modal';

class HomePresentation extends Component {
	// static propTypes = {
	// 	data: PropTypes.array.isRequired
	// };

	componentDidMount() {
		// console.log('hello', this.props.data);
	}

	render () {
		return (
			<div>
				<h1>Work In Progress</h1>
				<CountUp end={100} />

				<CountUp
					start={-875.039}
					end={160527.012}
					duration={2.75}
					separator=" "
					decimals={4}
					decimal=","
					prefix="EUR "
					suffix=" left"
					onEnd={() => console.log('Ended! 👏')}
					onStart={() => console.log('Started! 💨')}
				>
					{({ countUpRef, start }) => (
						<div>
							<span ref={countUpRef} />
							<button onClick={start}>Start</button>
						</div>
					)}
				</CountUp>

				<UpdateModal />
			</div>
		);
	};
};

export default HomePresentation;
