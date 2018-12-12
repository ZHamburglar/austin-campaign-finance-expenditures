// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	Container,
	Dropdown,
	Image,
	Menu,
} from 'semantic-ui-react';

class Navbar extends Component {
	static propTypes = {
		organizations: PropTypes.array.isRequired,
	};

	state = {
		loading: true,
		searchinput: '',
		selectedOrganization: '',
	}

	handleSearchChange = (e) => {
		this.setState({
			searchinput: e.target.value
		});
	}

	handleOrgChange = (e, data) => {
		console.log("e: ", e.target, data.value);
		// this.setState({ selectedOrganization: e.target.value });
	}

	submitSearch = (e) => {
		let names = this.getName(this.state.data, 'expenditure_type', this.state.searchinput);
		this.setState({
			filteredData: names
		});
		e.preventDefault();
	}

	render() {
		return (
			<>
				<Menu fixed='top' inverted>
					<Container>
						<Menu.Item as='a' header>
							<Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
							Project Name
						</Menu.Item>
						<Menu.Item as='a'>Home</Menu.Item>
						<Dropdown item simple text='Dropdown' onClick={this.handleOrgChange}>
							<Dropdown.Menu>
								<Dropdown.Item>
									<i className='dropdown icon' />
									<span className='text'>Office Holders</span>
									<Dropdown.Menu>
										{this.props.organizations.Council.map((member) => {
											return <Dropdown.Item key={member.filer_name} data-value={member.filer_name}>{member.filer_name}</Dropdown.Item>
										})}
									</Dropdown.Menu>
								</Dropdown.Item>
								<Dropdown.Item>
									<i className='dropdown icon' />
									<span className='text'>Organizations</span>
									<Dropdown.Menu>
										{this.props.organizations.Organizations.map((member) => {
											return <Dropdown.Item key={member.filer_name} data-value={member.filer_name}>{member.filer_name}</Dropdown.Item>
										})}
									</Dropdown.Menu>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Link to='/'>Home</Link>
						<Link to='/about-us'>About</Link>
					</Container>
				</Menu>
			</>
		);

	}
}

export default Navbar;
