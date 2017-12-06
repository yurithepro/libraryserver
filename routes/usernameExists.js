var express = require('express');
var bodyParser = require('body-parser');
//var bcrypt = require('bcrypt');
//var me = require('mongo-escape').escape;
var connect = require('./Services');

var router = express.Router();

router.get('/', forward, errorHandler);

function forward(req, res, next) {
	return connect().then(function(db) {
		db.collection('users').findOne({_id: req.query.username})
			.then(function(result) {
				db.close();
				if(result);
				else res.status(200).send(false);

				if(result.password)
					res.status(200).send(true);
				else 
					res.status(200).send(false);
			}).catch(function(err) {next(err)});
	}).catch(function(err) {next(err)});
}

function errorHandler(err, req, res, next) {
	//next(err);
	res.status(400).end();
}

module.exports = router;