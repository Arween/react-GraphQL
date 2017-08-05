var request = require('request');
var assert = require('chai').assert;

describe('Getting id from DB', function() {
	it('should return id as a number', function(done) {

		const query_string  = JSON.stringify({'query':'{posts{id}}'} );

		  request.post({
			    headers: {'content-type' : 'application/json'},
				  url: 'http://localhost:3000/graphql',
				    body:    query_string

		  }, function(error, response, body){
			    console.log(body);
				const id = JSON.parse(body).data.posts.id;
				assert.typeOf(id, 'number');
				done();

		  });
	})
})
