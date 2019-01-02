// Node Modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button, Header, Modal } from 'semantic-ui-react';

// Local Components
import { changeModal } from '../../redux/reducers/modal';

class UpdateModal extends Component {
	state = {
		open: true,
		notes: null
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		axios.get("https://raw.githubusercontent.com/ZHamburglar/austin-campaign-finance-expenditures/master/RELEASENOTES.md")
			.then((response) => {
				const updates = response.data.replace(/(\r\n|\n|\r)/g, '').split('### ');
				let i;
				let j;
				let notes = [];
				for ( i = 1; i < updates.length; i++ ) {
					let update = updates[i].split('* ');
					const newObj = Object.assign({});
					newObj.version = update[0];
					let list = [];
					for ( j = 1; j < update.length; j++ ) {
						list.push(update[j]);
					}
					newObj.notes = list;
					notes.push(newObj);
				}
				this.setState({
					notes
				});
			}).catch((error) => {
				console.error(error);
			});
	}

	show = () => {
		this.setState({ open: true });
	}

	close = () => {
		this.setState({ open: false });
	}

	render () {
		if (this.state.notes) {
			return (
				<>
					{/* <Button onClick={this.show}>Blurring</Button> */}
					<Modal dimmer='blurring' open={this.state.open} onClose={this.close}>
						<Modal.Header>Update Notes</Modal.Header>
						<Modal.Content>
							<Modal.Description>
								{this.state.notes.map((update, i) => {
									return <div key={i}>
										<Header>Version {update.version}</Header>
										{update.notes.map((notes, i) => {
											return <div key={update.version + i}>
												<p>&#8226; {notes}</p>
											</div>;
										})}
									</div>;
								})}
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
		}

		return (
			<>
				{/* <Button onClick={this.show}>Blurring</Button> */}
				<Modal dimmer='blurring' open={this.state.open} onClose={this.close}>
					<Modal.Header>Update Notes</Modal.Header>
						Update Notes
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
