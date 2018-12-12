// Node Modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

// Redux and Reducers
import store, { history } from './redux/store';

// Local Components
import App from './screens/App';

// CSS Imports
import 'sanitize.css/sanitize.css';
import './index.css';

const target = document.querySelector('#root');

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<App />
			</div>
		</ConnectedRouter>
	</Provider>,
	target
);
