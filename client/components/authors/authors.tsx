import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './authors.scss';

const getAuthors = gql`
	{
		authors {
			name
			books {
				title
			}
		}
	}
`;

type Book = { title: string };

interface Data {
	authors: Array<{ name: string; books: Book[] }>;
}

interface Variables {
	name: string | null;
}

class AuthorsQuery extends Query<Data, Variables> {}

const Authors = () => (
	<AuthorsQuery query={getAuthors}>
		{({ loading, error, data }) => {
			if (loading) return 'Loading...';
			if (error) return `Error! ${error.message}`;

			return (
				<ul>
					{data.authors.map(author => (
						<li key={author.name}>
							<div>{author.name}</div>
							<ul>
								{author.books.map(book => (
									<li key={book.title}>{book.title}</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			);
		}}
	</AuthorsQuery>
);

export default Authors;
