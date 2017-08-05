import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';


const db = new Sequelize('blog', null, null, {
	dialect: 'sqlite',
	storage: './blog.sqlite',
});

const AuthorModel= db.define('author', {
	firstname: {type: Sequelize.STRING},
	lastname: {type: Sequelize.STRING},
});


const PostModel = db.define('post', {
	title: {type: Sequelize.STRING},
	text: {type: Sequelize.STRING},
});



AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);


casual.seed(123);
db.sync({force: true}).then(() => {
	_.times(10, () => {
		return AuthorModel.create({
			firstname: casual.first_name,
			lastname: casual.last_name,
		}).then((author) => {
			return author.createPost({
				title: `A post by ${author.firstname}`,
				text: casual.sentences(3),
			});
		});
	});
});


const Author = db.models.author;
const Post = db.models.post;


export {Author, Post};
