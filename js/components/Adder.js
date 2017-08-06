import React from 'react';
import Api from '../services/apiModule';

class Adder extends React.Component {
	constructor(props) {
		super(props);
		this.api = new Api();
		this.state = {
			authors: [],
			chosen_author: 1,
			new_title: '',
			new_text: ''
		} 
	}

	close_modal() {
		const modal = document.getElementById('myModal');
		modal.style.display = 'none';
	}


	getAuthors() {
		this.api.getAllAuthors().then((authors) => {
			console.log(1);
			console.log(authors);
			this.setState({authors});
			this.create_options();
		});
	}

	componentDidMount() {
		this.getAuthors();
		  
	}

	choose_author(e) {
		console.log(e.target.value);
		this.setState({chosen_author: e.target.value})
	}

	add_title(e) {
		this.setState({new_title: e.target.value})
	}

	create_options() {

			const options = this.state.authors.map((item, idx) => <option value={item.id} key={idx}>{item.firstname} {item.lastname}</option>);
			this.setState({options});
	}


	add_text(e) {
		const new_text = e.target.value;
		this.setState({new_text});
	}


	create_article(e) {
		console.log('creating...');
		this.api.create_article({author_id:this.state.chosen_author, text: this.state.new_text, title: this.state.new_title}).then(() => {this.getAuthors(); this.close_modal()});
	}


	render() {

		return (
				<div className="modal " style={{display: 'none'}} id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <button onClick={this.close_modal} className="close"  aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">New article creation</h4>
                </div>
                <div className="modal-body">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h5>Common info</h5>
                        </div>
                        <div className="panel-body">
                            <form className="form-inline">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName2">Who?</label>
											<select  onChange={this.choose_author.bind(this)} value={this.state.chosen_author} id="sel">
												{this.state.options}
											</select>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 col-sm-offset-1">
                                        <div className="input-group">
                                            <input onChange={this.add_title.bind(this)} type="text" className="form-control" id="exampleInputAmount" placeholder="Enter title" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h5>The New Article</h5>
                        </div>
                        <div className="panel-body">
                            <form className="form-inline">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="input-group">
											<textarea id="txt" onChange={this.add_text.bind(this)} rows="10" cols="125" value={this.state.new_text}></textarea>
										</div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
                <div className="modal-footer">
                    <button type="button" onClick={this.close_modal}  className="btn btn-default" data-dismiss="modal">Отмена</button>
                    <button type="button" onClick={this.create_article.bind(this)} className="btn btn-primary">Create</button>
                </div>
            </div>
        </div>
    </div>
			   );
			  
	}

};


export default Adder;

