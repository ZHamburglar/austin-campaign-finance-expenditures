// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import {
	Dropdown,
	Menu,
} from 'semantic-ui-react';
import { DatesRangeInput } from 'semantic-ui-calendar-react';

// Local Components
import NavSearch from '../NavSearch';
import { changeFilterDate } from '../../redux/reducers/dates';

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
		// Create the query string for the parameters
		let query;
		const dates = this.state.datesRange.split(' - ');
		if (dates.length > 0 && dates[0].length > 0) {
			query = queryString.stringify({ from: dates[0], to: dates[1] });
		}
		this.props.changeOrgPage(data.value, query);
	}

	handleChange = (e, { name, value }) => {
		const dates = value.split(' - ');
		if (this.state.hasOwnProperty(name)) {
			this.setState({ [name]: value });
		}
		this.props.changeFilterDate({ dates });
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
					<Menu.Item>
						<NavSearch />
					</Menu.Item>
					<Menu.Item as='a' position="right" onClick={this.props.changeSettingPage}>
						Settings
					</Menu.Item>
				</Menu>
			</>
		);

	}
}

// const mapStateToProps = ({ dates }) => ({
// 	filterDates: dates.filterDates
// });

const mapDispatchToProps = (dispatch) => bindActionCreators({
	changeHomePage: () => push({
		pathname: '/',
		search: '?filter=homepagefilter',
	}),
	changeSettingPage: () => push('/settings'),
	changeOrgPage: (org, query) => push({
		pathname: '/council/' + org,
		search: query,
		state: {
			hello: "state value"
		}
	}),
	changeFilterDate
}, dispatch);

export default connect(null, mapDispatchToProps)(Navbar);
