import {Author, Post} from './connectors';


const resolvers = {
	Query: {
		author(_, args) {
			return Author.find({where: args});
		},
		authors() {
			return Author.findAll();
		}
	},
	Author: {
		posts(author) {
			return author.getPosts();
		}
	},
	Post: {
		author(post) {
			return post.getAuthor();
		}
	},
	Mutation: {
		addArticle: (root, args) => {
			return Author.find({where: {id:args.author_id}}).then((author) => {
				return author.createPost({
					title: args.title,
					text: args.text,
				})
				.then((res) => {
					return Post.find({where: {title: args.title}});
				});

			});
		}
	}

};

export default resolvers;
