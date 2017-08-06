import React from 'react';
import Api from '../services/apiModule';

class Posts extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		const post = this.props.post;
		return (
				 <div className="list-group">
				 		<h4 className="list-group-item-heading">{post.title}</h4>
				 		<p className="list-group-item-text">{post.text}</p>
				 </div>
			   );
			  
	}

};


export default Posts;

