import 'babel-polyfill';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql';
import * as fs from 'fs';
import * as https from 'https';
import * as http from 'http';

type Config = { ssl: boolean; port: number; hostname: string };
const configurations: { [key: string]: Config } = {
	// Note: You may need sudo to run on port 443
	production: { ssl: true, port: 443, hostname: 'example.com' },
	development: { ssl: false, port: 4000, hostname: 'localhost' },
};

const environment = process.env.NODE_ENV || 'development';
const config = configurations[environment];

const apollo = new ApolloServer({ schema });

const app = express();
apollo.applyMiddleware({ app });

// Create the HTTPS or HTTP server, per configuration
let server;
if (config.ssl) {
	// Assumes certificates are in .ssl folder from package root. Make sure the files
	// are secured.
	server = https.createServer(
		{
			key: fs.readFileSync(`./ssl/${environment}/server.key`),
			cert: fs.readFileSync(`./ssl/${environment}/server.crt`),
		},
		app,
	);
} else {
	server = http.createServer(app);
}

// Add subscription support
// apollo.installSubscriptionHandlers(server);

server.listen({ port: config.port }, () =>
	console.log(
		'🚀 Server ready at',
		`http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${
			apollo.graphqlPath
		}`,
	),
);
