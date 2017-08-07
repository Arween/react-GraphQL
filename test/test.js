var request = require('request');
var assert = require('chai').assert;
import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import Menu from '../js/components/Menu';
import Authors from '../js/components/Authors';


describe('Getting id from DB', function() {
	it('should return id as a number', function(done) {

		const query_string  = JSON.stringify({'query':'{posts{id}}'} );
		try{
  			request.post({
			    headers: {'content-type' : 'application/json'},
				  url: 'http://localhost:3000/graphql',
				    body:    query_string

		  }, function(error, response, body){
				const id = JSON.parse(body).data.posts.id;
				console.log('id: '+ id);
				// console.log(response);
				assert.typeOf(id, 'number');
				console.log(done.toString());
				done().then(function(res) {
					console.log(1);
				}, function(err) {
					console.log(err);
				});

		  });


		} catch (err){
			console.log('err: ' + err);
		}
	})
});

describe('We can create new article in DB', function(){
	it('should return new article after executing mutation', function(done) {
		
		const query_string = `mutation {  addArticle(author_id: 1, text: "new article text", title: "new article title") {    text    title   } }`;
		const q = JSON.stringify({query: query_string});
		  request.post({
			    headers: {'content-type' : 'application/json'},
				  url: 'http://localhost:3000/graphql',
				    body:    q

		  }, function(error, response, body){
			    console.log(body);
				const title = JSON.parse(body).data.addArticle.title;
				console.log('title: '+title);
				assert.equal(title, 'new article title');
				done();

		  });
	})
});

describe('Test for Menu', function() {
	it('should render', function() {
		const item = renderIntoDocument(<Menu />);

		expect(item).toExist();
	})
});

describe('Test for Authors', function() {
	it('should render', function() {
		const item = renderIntoDocument(<Authors />);

		expect(item).toExist();
	})
});

