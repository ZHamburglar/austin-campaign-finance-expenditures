// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	Container,
	Dropdown,
	Image,
	Menu,
} from 'semantic-ui-react';
import { DatesRangeInput } from 'semantic-ui-calendar-react';

class Navbar extends Component {
	static propTypes = {
		organizations: PropTypes.array.isRequired,
	};

	state = {
		loading: true,
		searchinput: '',
		selectedOrganization: '',
		datesRange: ''
	}

	handleSearchChange = (e) => {
		this.setState({
			searchinput: e.target.value
		});
	}

	handleOrgChange = (e, data) => {
		this.props.changePage(data.value);
	}

	handleChange = (e, { name, value }) => {
		// console.log("date: ", name, value)
		if (this.state.hasOwnProperty(name)) {
			this.setState({ [name]: value });
		}
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
						<Dropdown item simple text='Dropdown'>
							<Dropdown.Menu>
								<Dropdown.Item>
									<i className='dropdown icon' />
									<span className='text'>Office Holders</span>
									<Dropdown.Menu>
										{this.props.organizations.Council.map((member) => {
											return <Dropdown.Item onClick={this.handleOrgChange} key={member.filer_name} value={member.filer_name}>{member.filer_name}</Dropdown.Item>;
										})}
									</Dropdown.Menu>
								</Dropdown.Item>
								<Dropdown.Item>
									<i className='dropdown icon' />
									<span className='text'>PACS</span>
									<Dropdown.Menu>
										{this.props.organizations.Organizations.map((member) => {
											return <Dropdown.Item onClick={this.handleOrgChange} key={member.filer_name} value={member.filer_name}>{member.filer_name}</Dropdown.Item>;
										})}
									</Dropdown.Menu>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<DatesRangeInput
							name="datesRange"
							placeholder="From - To"
							dateFormat="MM-DD-YYYY"
							minDate="01-10-2016"
							value={this.state.datesRange}
							iconPosition="left"
							onChange={this.handleChange} />
						<Link to='/'>Home</Link>
						<Link to='/about-us'>About</Link>
					</Container>
				</Menu>
			</>
		);

	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	changePage: (org) => push('/council/' + org, {
		hello: "state value"
	})
}, dispatch);

export default connect(null, mapDispatchToProps)(Navbar);
