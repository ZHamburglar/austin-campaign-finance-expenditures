// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import {
	Icon,
	Dropdown,
	Menu,
} from 'semantic-ui-react';
import { DatesRangeInput } from 'semantic-ui-calendar-react';

// Local Components
import NavSearch from '../NavSearch';
import { changeFilterDate } from '../../../redux/reducers/dates';

class NavbarMobile extends Component {
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

	handleToggle = () => this.setState({ visible: !this.state.visible });

	render() {
		const { visible } = this.state;
		return (
			<>
				<Menu fixed="top" inverted>
					<Menu.Item onClick={this.props.handleToggle}>
						<Icon name="sidebar" />
					</Menu.Item>
					<Menu.Item as='a' header>
								Austin Political Tracker
					</Menu.Item>
					<Menu.Item as='a' position="right" onClick={this.props.changeSettingPage}>
						<Icon name="cog" />
					</Menu.Item>
				</Menu>
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

export default connect(null, mapDispatchToProps)(NavbarMobile);
