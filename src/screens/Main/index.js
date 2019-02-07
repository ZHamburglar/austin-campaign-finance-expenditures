// Node Modules
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Local Components
import withTracker from '../../withTracker';
import Home from '../Home';
import Settings from '../Settings';
import Council from '../Council';
import Person from '../Person';
import Loading from '../../components/Loading';
import NavbarDesktop from '../../components/Navbar/Desktop';
import NavSearch from '../../components/Navbar/NavSearch';
import {
	AppContainer,
	MainContainer,
	Main
} from './components';


class MainComponent extends Component {
	render() {
		return (
			<AppContainer>
				<MainContainer>
					<Main>
						<Route exact path='/' component={withTracker((props) => <Home {...props} data={this.props.data} organizations={this.props.organizations} />)} />
						<Route exact path='/council/:org' component={withTracker((props) => <Council {...props} data={this.props.data} />)} />
						<Route exact path='/person/:user' component={withTracker((props) => <Person {...props} data={this.props.data} />)} />
						<Route exact path='/settings' component={withTracker(Settings)} />
					</Main>
				</MainContainer>
			</AppContainer>
		);
	}
}

export default MainComponent;
