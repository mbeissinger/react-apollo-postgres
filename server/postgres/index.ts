import pgp from 'pg-promise';
import * as dotenv from 'dotenv';

dotenv.config();

const dbUser = process.env.dbUser;
const dbPassword = process.env.dbPassword;
const dbIp = process.env.dbIp;
const dbPort = process.env.dbPort;
const dbName = process.env.dbName;

export const connectionString = `postgres://${dbUser}:${dbPassword}@${dbIp}:${dbPort}/${dbName}`;
const options = {};

const db = pgp(options)(connectionString);

export default db;
