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
		getBooks(author: String): [Book]
		getAuthors: [Author]
	}
`;

export default schema;
