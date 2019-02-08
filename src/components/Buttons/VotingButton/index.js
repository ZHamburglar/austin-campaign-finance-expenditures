// Node Modules
import React, { Component } from 'react';

//Local Components
import {
	Vote,
	Register
} from './components';

class VotingButton extends Component {
	render () {
		return (
			<div>
				<Register>Register to</Register>
				<Vote href="https://www.votetexas.gov/register-to-vote/">Vote</Vote>
			</div>
		);
	}
}

export default VotingButton;
