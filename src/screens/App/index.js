// Node Modules
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import {
	Sidebar,
	Responsive,
	Menu,
} from 'semantic-ui-react';

// Local Components
import withTracker from '../../withTracker';
import Home from '../Home';
import Settings from '../Settings';
import Council from '../Council';
import Person from '../Person';
import Loading from '../../components/Loading';
import NavbarDesktop from '../../components/Navbar/Desktop';
import NavbarMobile from '../../components/Navbar/Mobile';
import NavbarPushable from '../../components/Navbar/Mobile/Pushable';
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
		newCouncil: null,
		searchinput: '',
		selectedOrganization: '',
		datesRange: '',
		visible: false
	}

	componentDidMount() {
		this.getData();
		console.log('this props', this.props)
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
					<Responsive {...Responsive.onlyMobile}>
						<Sidebar.Pushable>
							<Sidebar
								as={Menu}
								animation='overlay'
								icon='labeled'
								inverted
								vertical
								visible={visible}
							>
								<NavbarPushable
									organizations={this.state.organizations}
									newPACS={this.state.newPACS}
									newCouncil={this.state.newCouncil}
									office={this.state.office}
									contributors={this.state.contributors}
								/>
							</Sidebar>
							<Sidebar.Pusher
								dimmed={visible}
								onClick={this.handlePusher}
								style={{ minHeight: "100vh" }}
							>
								<NavbarMobile
									handleToggle={this.handleToggle}
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
							</Sidebar.Pusher>
						</Sidebar.Pushable>
					</Responsive>

					{/* DESKTOP HERE */}
					<Responsive minWidth={Responsive.onlyTablet.minWidth}>
						<NavbarDesktop
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
					</Responsive>
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
