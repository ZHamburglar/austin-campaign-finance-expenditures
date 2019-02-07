// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import {
	Icon,
	Popup,
	Menu,
} from 'semantic-ui-react';
import { DatesRangeInput } from 'semantic-ui-calendar-react';

// Local Components
import NavSearch from '../../NavSearch';
import { changeFilterDate } from '../../../../redux/reducers/dates';

class NavbarPushable extends Component {
	static propTypes = {
		organizations: PropTypes.array.isRequired,
		office: PropTypes.array.isRequired,
		contributors: PropTypes.array.isRequired,
		newPACS: PropTypes.array.isRequired,
		newCouncil: PropTypes.array.isRequired,
	};

	state = {
		loading: true,
		searchinput: '',
		selectedOrganization: '',
		datesRange: '',
		visible: false
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

	handlePusher = () => {
		const { visible } = this.state;
		if (visible) {
			this.setState({ visible: false });
		}
	};

	render() {
		return (
			<>
				<Menu.Item as='a' onClick={this.props.changeHomePage}>
					<Icon name='home' />
					Home
				</Menu.Item>
				<Menu.Item>
					<Popup
						on='click'
						position={'right center'}
						trigger={<div>Council</div>}
						content={
							<Menu vertical overlay style={{ minHeight: '200px', maxHeight: '600px', overflowX: 'scroll', position: 'absolute' }}>
								{this.props.organizations.Council.map((member) => {
									return <Menu.Item onClick={this.handleOrgChange} key={member.filer_name} value={member.filer_name}>{member.filer_name}</Menu.Item>;
								})}
							</Menu>
						}>
					</Popup>
				</Menu.Item>
				<Menu.Item>
					<Popup
						on='click'
						position={'right center'}
						trigger={<div>PACS</div>}
						content={
							<Menu vertical overlay style={{ minHeight: '200px', maxHeight: '600px', overflowX: 'scroll', position: 'absolute', zIndex: '999999 !important' }}>
								{this.props.organizations.Organizations.map((member) => {
									return <Menu.Item onClick={this.handleOrgChange} key={member.filer_name} value={member.filer_name}>{member.filer_name}</Menu.Item>;
								})}
							</Menu>
						}>
					</Popup>
				</Menu.Item>
				<Menu.Item>
					<NavSearch
						office={this.props.office}
						contributors={this.props.contributors}
						pacs={this.props.newPACS}
						council={this.props.newCouncil}
					/>
				</Menu.Item>
				<Menu.Item>
					<Popup
						on='click'
						position={'right center'}
						trigger={<Icon name='filter' />}
						content={
							<DatesRangeInput
								name="datesRange"
								placeholder="From - To"
								dateFormat="MM-DD-YYYY"
								minDate="01-10-2016"
								value={this.state.datesRange}
								iconPosition="left"
								onChange={this.handleChange} />
						}
					/>
				</Menu.Item>
			</>
		);

	}
}

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

export default connect(null, mapDispatchToProps)(NavbarPushable);
