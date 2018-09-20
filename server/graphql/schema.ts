import { gql } from 'apollo-server';

const schema = gql`
	type Book {
		title: String
		author: Author
	}

	type Author {
		name: String
		books: [Book]
	}

	type Query {
		books(author: String): [Book]
		authors: [Author]
	}
`;

export default schema;
