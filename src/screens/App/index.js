// Node Modules
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import axios from 'axios';

// Local Components
import Home from '../Home';
import About from '../About';
import Council from '../Council';
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar';

class App extends Component {
	state = {
		loading: true,
		data: null,
		organizations: null,
	}

	componentDidMount() {
        console.log('this ', this);
		this.getData();
	}

	getData() {
		axios.get('https://data.austintexas.gov/resource/asyh-u6ja.json?$limit=5000')
			.then((response) => {
				// Create new Organization array based on Unique Orgs
				let orgs = [];
				let organizations = [];
				organizations.Council = [];
				organizations.Organizations = [];
				response.data.filter((item) => {
					const i = orgs.findIndex((x) => x.filer_name === item.filer_name);
					if(i <= -1) {
						orgs.push({ filer_name: item.filer_name, form: item.form });
					}
					return null;
				});
				orgs.sort((a, b) => {
					if(a.filer_name < b.filer_name) { return -1; }
					if(a.filer_name > b.filer_name) { return 1; }
					return 0;
				});
				orgs.filter((item) => {
					if (item.form === "C/OH - Candidate/Officeholder Campaign Finance Report") {
						organizations.Council.push(item);
					} else {
						organizations.Organizations.push(item);
					}
					return null;
				});
				this.setState({
					loading: false,
					data: response.data,
					organizations
				});
			})
			.catch(function (error) {
				console.error(error);
			});
	}

	render() {
		if (this.state.loading) {
			return (
				<div>
					<Loading />
				</div>
			);
		}

		if (this.state.data) {
			return (
				<>
					<Navbar organizations={this.state.organizations} />
					<Container text style={{ marginTop: '2.5em' }}>
						<main>
							<Route exact path='/' component={Home} />
							<Route exact path='/council' component={Home} />
							<Route exact path='/about-us' component={About} />
						</main>
					</Container>
				</>
			);
		}

		return (
			<div>
				This is Broken
			</div>
		)
	}
}

export default App;
