import pgp from 'pg-promise';
import config from '../../config.json';

export const connectionString = `postgres://${config.dbUser}:${
	config.dbPassword
}@${config.dbIp}:${config.dbPort}/${config.dbName}`;
const options = {};

const db = pgp(options)(connectionString);

export default db;
