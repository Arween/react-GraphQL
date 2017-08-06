import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import mocks from './mocks';
import { addResolveFunctionsToSchema  } from 'graphql-tools';
import Resolvers from './resolvers';

const typeDefs = `
type Author {
	id: Int
	firstname: String
	lastname: String
	posts: [Post]
}

type Post {
	id: Int
	title: String
	text: String
	author: Author
}

type Query {
	author(firstname: String, lastname: String): Author 
	posts: Post
	authors: [Author]
}

type Mutation {
	  addArticle(author_id: Int!, title: String!, text: String!): Post
}
`;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });
addResolveFunctionsToSchema(schema, Resolvers);

export default schema;
