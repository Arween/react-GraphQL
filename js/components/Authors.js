import React from 'react';
import Api from '../services/apiModule';
import Details from './Details';


class Authors extends React.Component {
	constructor(props) {
		super(props);
		this.api = new Api();
		this.state  = {
			name: "Sergey",
			authors: []
		};
		this.getAuthors();
		
	}


	getAuthors() {
		this.api.getAllAuthors().then((res) => {
			console.log(this);
			this.setState({authors: res.data.authors});
		});
	}
	render() {
		const listAuthors = this.state.authors.map((author) =>
			  <li className="list-group-item" key={author.id}><a>{author.firstname} {author.lastname}</a></li>
			  );
		const details = this.state.authors.map((author) =>
			  <li className="list-group-item" key={author.id}><Details author={author} /></li>
			  );
		return (
				<div>
					<div className="panel-heading">Our Authors</div>
					<div className="panel-body">
						<ul className="list-group">{details}</ul>
					</div>
				</div>	
			   );
			  
	}

};


export default Authors;

