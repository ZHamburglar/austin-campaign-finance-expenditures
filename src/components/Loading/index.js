import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {

	render() {
		return (
			<div className="App-header">
				<div>
					<ReactLoading type={'cubes'} color={'blue'} height={100} width={200} />
				</div>
			</div>
		);

	}
}

export default Loading;
