import {Author, Post} from './connectors';


const resolvers = {
	Query: {
		author(_, args) {
			// return {id:1, firstname: "Hey", lastname: "You"};
			return Author.find({where: args});
		},
	},
	Author: {
		posts(author) {
			// return [{id:111, title:'123', text: 'Good' }];
			return author.getPosts();
		}
	},
	Post: {
		author(post) {
			// return {id:1, firstname: "Hey", lastname: "You"};
			return post.getAuthor();
		}
	}

};

export default resolvers;
