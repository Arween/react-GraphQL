import React from 'react';
import Api from '../services/apiModule';
import Posts from './Posts';


class Details extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		const author = this.props.author;
		
		const posts = author.posts.map((post, idx) => <li className="list-group-item" key={idx}><Posts post={post} /></li> )
		return (
				<div className="panel panel-default">
				  <div className="panel-heading">{author.firstname} {author.lastname}</div>
				    <div className="panel-body">
						<ul className="list-group">{posts}</ul>
					</div>
				</div>
			   );
			  
	}

};


export default Details;

