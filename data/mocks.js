import casual from 'casual';



const mocks = {
  String: () => 'It works!',
  Query: () => ({
	  author: (root, args) => {
		  return {firstname: args.firstname, lastname: args.lastname}
	  }
  }),
  Author: () => ({
	  firstname: () => casual.first_name, lastname: () => casual.last_name
  }),
  Post: () => ({title: () => casual.title, text: casual.sentences(3)}),
};

export default mocks;
