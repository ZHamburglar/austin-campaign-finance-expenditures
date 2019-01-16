// Node Modules
import _ from 'lodash';
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class NavSearch extends Component {
	state = {
		searchObject: null
	}
	static propTypes = {
		office: PropTypes.array.isRequired,
		contributors: PropTypes.array.isRequired,
		pacs: PropTypes.array.isRequired,
		council: PropTypes.array.isRequired
	};

	componentWillMount() {
		this.loadingResults();
		this.resetComponent();
	}

	loadingResults() {
		const offices = Object.assign({ name: 'offices', results: this.props.office }, {});
		const contributors = Object.assign({ name: 'contributor', results: this.props.contributors }, {});
		const citycouncil = Object.assign({ name: 'Council', results: this.props.council }, {});
		const PACS = Object.assign({ name: 'PACS', results: this.props.pacs }, {});
		const searchObject = Object.assign({ Council: citycouncil, PAC: PACS, office: offices, contributor: contributors });
		console.log('search', searchObject);
		this.setState({
			searchObject
		});
	}

	resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

	handleResultSelect = (e, { result }) => this.setState({ value: result.title })

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value });

		setTimeout(() => {
			if (this.state.value.length < 1) {
				return this.resetComponent(); 
			};
			const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
			const isMatch = (result) => re.test(result.title);
			const filteredResults = _.reduce(
				this.state.searchObject,
				(org, data, name) => {
					const results = _.filter(data.results, isMatch);
					if (results.length) {
						org[name] = { name, results };
					}; // eslint-disable-line no-param-reassign
					return org;
				},
				{},
			);

			this.setState({
				isLoading: false,
				results: filteredResults,
			});
		}, 300);
	}

	render() {
		const { isLoading, value, results } = this.state;

		return (
			<Search
				category
				loading={isLoading}
				onResultSelect={this.handleResultSelect}
				onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
				results={results}
				value={value}
				{...this.props}
			/>
		);
	}
}

export default NavSearch