// Node Modules
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

// Local Components
import withTracker from '../../withTracker';
import Home from '../Home';
import Settings from '../Settings';
import Council from '../Council';
import Person from '../Person';
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar';
import {
	AppContainer,
	MainContainer,
	Main
} from './components';

class App extends Component {
	state = {
		loading: true,
		data: null,
		organizations: null,
		contributors: null,
		office: null,
		newPACS: null,
		newCouncil: null
	}

	componentDidMount() {
		this.getData();
	}

	getData() {
		axios.get('https://data.austintexas.gov/resource/asyh-u6ja.json?$limit=10000')
			.then((response) => {
				// Create new Organization array based on Unique Orgs
				let orgs = [];
				let organizations = [];
				let individuals = new Set(),
					entities = new Set();
					// contributions = 0;
				organizations.Council = [];
				organizations.Organizations = [];
				response.data.filter((item) => {
					const i = orgs.findIndex((x) => x.filer_name === item.filer_name);
					if(i <= -1) {
						orgs.push({ filer_name: item.filer_name, form: item.form });
					}
					return null;
				});
				// Change this here to new properties:
				// https://stackoverflow.com/questions/52106582/how-can-i-change-property-names-of-objects-in-an-array
				response.data.filter((item) => {
					if (item.entity === 'Individual') {
						individuals.add(item.transactor_name);
					} else if (item.entity === 'Entity') {
						entities.add(item.transactor_name);
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
				const contributors = Array.from(individuals);
				const office = Array.from(entities);
				const newConts = contributors.map((row) => {
					return { title: row, org: "person" };
				});
				const newOrgs = office.map((row) => {
					return { title: row, org: "council" };
				});
				const newCouncil = organizations.Council.map((row) => {
					return { title: row.filer_name, org: "council" };
				});
				const newPACS = organizations.Organizations.map((row) => {
					return { title: row.filer_name, org: "council" };
				});
				this.setState({
					loading: false,
					data: response.data,
					organizations,
					contributors: newConts,
					office: newOrgs,
					newPACS,
					newCouncil
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
				<div>
					<Navbar
							organizations={this.state.organizations}
							newPACS={this.state.newPACS}
							newCouncil={this.state.newCouncil}
							office={this.state.office}
							contributors={this.state.contributors}
						/>
					<AppContainer>
						
						<MainContainer>
							<Main>
								<Route exact path='/' component={withTracker((props) => <Home {...props} data={this.state.data} organizations={this.state.organizations} />)} />
								<Route exact path='/council/:org' component={withTracker((props) => <Council {...props} data={this.state.data} />)} />
								<Route exact path='/person/:user' component={withTracker((props) => <Person {...props} data={this.state.data} />)} />
								<Route exact path='/settings' component={withTracker(Settings)} />
							</Main>
						</MainContainer>
					</AppContainer>
				</div>

			);
		}

		return (
			<div>
				This is Broken! Please Refresh
			</div>
		);
	}
}

export default App;
