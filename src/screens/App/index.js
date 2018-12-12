// Node Modules
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

// Local Components
import Home from '../Home';
import About from '../About';
import { AppContainer } from './components';

class App extends Component {
	render() {
		return (
			<AppContainer>
				<header>
					<Link to="/">Home</Link>
					<Link to="/about-us">About</Link>
				</header>

				<main>
					<Route exact path="/" component={Home} />
					<Route exact path="/about-us" component={About} />
				</main>
			</AppContainer>
		);
	}
}

export default App;
