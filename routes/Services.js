var mongo = require('mongodb').MongoClient;

var url = 'mongodb://yurithepro:angel43%40%21@library-shard-00-00-nljwf.mongodb.net:27017,library-shard-00-01-nljwf.mongodb.net:27017,library-shard-00-02-nljwf.mongodb.net:27017/library?ssl=true&replicaSet=LibRary-shard-0&authSource=admin';

function connect() {
	return mongo.connect(url);
}

module.exports = connect;