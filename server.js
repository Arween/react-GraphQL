import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';

const GRAPHQL_PORT = 3000;

const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
graphQLServer.use('/js', express.static(__dirname +'/js'));
graphQLServer.use('/css', express.static(__dirname +'/css'));
graphQLServer.use('/fonts', express.static(__dirname +'/fonts'));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
));
graphQLServer.set('view engine', 'jade');

graphQLServer.get('/', function (req, res) {
	  // res.send('Hello World!');
	  console.log(__dirname +'js');
	  res.sendFile(__dirname +'/files/index.html');

});
