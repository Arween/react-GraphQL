import React from 'react';


class Menu extends React.Component {
	constructor(props) {
		super(props);
	}


	show_modal() {
		const modal = document.getElementById('myModal').style.display = 'block';
	}


	render() {
		const name = '${ARTICLES}';
		return (
				<nav className="navbar navbar-default navbar-static-top fix">
					<div className="container">
						<div className="navbar-header">
							<a className="navbar-brand">{name}</a>
						</div>
						<div className="app-navbar-collapse">
							<ul className="nav navbar-nav">
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li style={{marginTop:10 + 'px'}}>
									<button className="btn btn-default" onClick={this.show_modal}>
										<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
									</button>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			   );
			  
	}

};


export default Menu;

