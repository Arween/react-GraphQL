import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';

import Authors from '../js/components/Authors';



var fetchMock = require('fetch-mock');
var url = 'http://localhost:3000/graphiql?query={%0A authors {%0A firstname%0A lastname%0A posts{%0A title%0A text%0A }%0A }%0A}&variables=null&operationName=null';

fetchMock
.mock('http://localhost:3000/graphql', 'POST', 
{
  "data": {
    "authors": [
      {
        "firstname": "Maurine",
        "lastname": "Rau",
        "posts": [
          {
            "title": "A post by Maurine",
            "text": "Et qui quia odio dolore. Eligendi in deserunt. Harum sit odio dolor dicta provident quo provident."
          },
          {
            "title": "new article title",
            "text": "new article text"
          },
          {
            "title": "new article title",
            "text": "new article text"
          },
          {
            "title": "new article title",
            "text": "new article text"
          },
          {
            "title": "new article title",
            "text": "new article text"
          },
          {
            "title": "new article title",
            "text": "new article text"
          },
          {
            "title": "rrrr",
            "text": "rfrfrf"
          }
        ]
      },
      {
        "firstname": "Edmond",
        "lastname": "Jones",
        "posts": [
          {
            "title": "A post by Edmond",
            "text": "Harum ullam pariatur quos est quod. Ea quisquam esse quia et commodi autem. Ut exercitationem maiores et voluptas."
          }
        ]
      },
      {
        "firstname": "Danika",
        "lastname": "Powlowski",
        "posts": [
          {
            "title": "A post by Danika",
            "text": "Omnis iusto doloremque et. Quos sequi molestiae beatae. Necessitatibus molestiae placeat saepe eligendi."
          }
        ]
      },
      {
        "firstname": "Katlyn",
        "lastname": "Reichert",
        "posts": [
          {
            "title": "A post by Katlyn",
            "text": "Excepturi et laudantium fuga similique sed corporis voluptatem dolores esse. Et repudiandae magnam aut atque dolores voluptatibus ut. Iusto laborum placeat quia deleniti dolorem quibusdam."
          }
        ]
      },
      {
        "firstname": "Millie",
        "lastname": "Kub",
        "posts": [
          {
            "title": "A post by Millie",
            "text": "Veniam perspiciatis et nisi aut corporis nisi. Est soluta accusamus officiis ut excepturi. Libero enim qui quo fuga enim."
          }
        ]
      },
      {
        "firstname": "Henderson",
        "lastname": "Sauer",
        "posts": [
          {
            "title": "A post by Henderson",
            "text": "Non voluptas quia dicta ipsam omnis necessitatibus et. Adipisci dolores sunt numquam. Occaecati rerum neque et."
          }
        ]
      },
      {
        "firstname": "Will",
        "lastname": "Jakubowski",
        "posts": [
          {
            "title": "A post by Will",
            "text": "Quisquam asperiores sit voluptatum deserunt enim iste molestias nesciunt. Sequi omnis eligendi aut voluptatem. Eligendi voluptates omnis eius iure commodi et."
          }
        ]
      },
      {
        "firstname": "Marlen",
        "lastname": "Marquardt",
        "posts": [
          {
            "title": "A post by Marlen",
            "text": "Voluptas impedit ea reprehenderit quae incidunt nemo vel in. Nihil iste asperiores consequatur ex quidem omnis. Deserunt quae eligendi."
          }
        ]
      },
      {
        "firstname": "Jayde",
        "lastname": "Conn",
        "posts": [
          {
            "title": "A post by Jayde",
            "text": "Voluptatem exercitationem in omnis et consequatur nisi officiis excepturi. Nam omnis odit. Magni aut quia praesentium distinctio."
          }
        ]
      },
      {
        "firstname": "Giuseppe",
        "lastname": "Hyatt",
        "posts": [
          {
            "title": "A post by Giuseppe",
            "text": "Nulla exercitationem omnis illum. Natus eum cum voluptatem consequatur ex et ipsum quam. Veritatis laboriosam deleniti omnis occaecati in culpa occaecati enim."
          }
        ]
      }
    ]
  }
});

describe('Test with mocks', function(done) {
	const item = renderIntoDocument(
			<Authors />
			);
	expect(item).toExist();
	// console.log(item);

	item.api.getAllAuthors().then(function(){
		expect(item.state.authors.length > 0).toBe(true);
		console.log('length: ' + item.state.authors.length);
		expect(fetchMock.called(url));
		done();
	}).catch(function(err) {
		done(err);
	})
})
