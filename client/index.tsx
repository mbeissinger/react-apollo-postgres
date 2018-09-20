import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

import './style.scss';

const root = document.getElementById('root') as HTMLElement;

const render = (Component: React.SFC) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		root,
	);
};

render(App);

if (module.hot) {
	module.hot.accept('./App', () => {
		render(App);
	});
}
