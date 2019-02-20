// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	Icon,
	Menu,
} from 'semantic-ui-react';

// Local Components
import { changeFilterDate } from '../../../redux/reducers/dates';

class NavbarMobile extends Component {
	static propTypes = {
		handleToggle: PropTypes.func,
	};

	static defaultProps = {
		handleToggle: null
	};

	render() {
		const {
			handleToggle
		} = this.props;
		return (
			<>
				<Menu fixed="top" inverted>
					{ handleToggle &&
						(<Menu.Item onClick={handleToggle}>
							<Icon name="sidebar" />
						</Menu.Item>)
					}
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
