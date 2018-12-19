// Node Modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

// Local Components
import { changeModal } from '../../redux/reducers/modal';

class UpdateModal extends Component {
	state = { open: false }

	show = () => {
		this.setState({ open: true });
	}

	close = () => {
		this.setState({ open: false });
	}

	render () {
		return (
			<>
				<Button onClick={this.show}>Blurring</Button>
				<Modal dimmer='blurring' open={this.state.open} onClose={this.close}>
					<Modal.Header>Update Notes</Modal.Header>
					<Modal.Content image>
						<Modal.Description>
							<Header>Default Profile Image</Header>
							<p>We've found the following gravatar image associated with your e-mail address.</p>
							<p>Is it okay to use this photo?</p>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button
							positive
							icon='checkmark'
							labelPosition='right'
							content="Good to know"
							onClick={this.close}
						/>
					</Modal.Actions>
				</Modal>
			</>
		);
	};
};

const mapStateToProps = ({ modal }) => ({
	open: modal.open
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			changeModal,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(UpdateModal);
