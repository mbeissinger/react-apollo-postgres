import db from './postgres';

const data = [
	{ title: 'The Hobbit', author: 'J.R.R. Tolkien' },
	{ title: 'Harry Potter', author: 'JK Rowling' },
];

class Book {
	author: Author;
	constructor(public title: string, author: string) {
		this.author = new Author(author);
	}
}

class Author {
	constructor(public name: string) {}
	books() {
		return data
			.filter(d => d.author === this.name)
			.map(d => new Book(d.title, d.author));
	}
}

const resolvers = {
	Query: {
		getAuthors: () => data.map(d => new Author(d.author)),
		getBooks(root: any, args: any, context: any, info: any) {
			if (!!args.name) {
				return new Author(args.name).books();
			}
			return data.map(d => new Book(d.title, d.author));
		},
	},
};

export default resolvers;
