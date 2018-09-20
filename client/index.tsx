import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import './style.scss';
// @ts-ignore
// import config from '../config.json';

const serverHost = 'localhost';
const serverPort = '4000';
const client = new ApolloClient({
	uri: `http://${serverHost}:${serverPort}/graphql`,
});

const root = document.getElementById('root') as HTMLElement;

const ApolloApp = () => (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);

const render = (Component: React.SFC) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		root,
	);
};

render(ApolloApp);

if (module.hot) {
	module.hot.accept('./App', () => {
		render(ApolloApp);
	});
}
