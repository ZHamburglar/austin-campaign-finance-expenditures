// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	Dropdown,
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
		this.props.changeOrgPage(data.value);
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
				<Menu fixed="top" borderless inverted className="Navbar">
					<Menu.Item as='a' header>
						Austin Political Tracker
					</Menu.Item>
					<Menu.Item as='a' onClick={this.props.changeHomePage}>
						Home
					</Menu.Item>
					<Dropdown item simple text='Council/PACS'>
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
					<Menu.Item>
						<DatesRangeInput
							name="datesRange"
							placeholder="From - To"
							dateFormat="MM-DD-YYYY"
							minDate="01-10-2016"
							value={this.state.datesRange}
							iconPosition="left"
							onChange={this.handleChange} />
					</Menu.Item>
					<Menu.Item as='a' position="right" onClick={this.props.changeSettingPage}>
						Settings
					</Menu.Item>
				</Menu>
			</>
		);

	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	changeHomePage: () => push('/'),
	changeSettingPage: () => push('/about-us'),
	changeOrgPage: (org) => push('/council/' + org, {
		hello: "state value"
	}),
}, dispatch);

export default connect(null, mapDispatchToProps)(Navbar);
