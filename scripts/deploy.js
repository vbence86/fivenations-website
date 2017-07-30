'use strict';

process.env.NODE_ENV = 'production';
process.env.PUBLIC_URL = '';

const Promise = require('es6-promise').Promise;
const express = require('express');
const port = 3000;
const dir = './build';

const server = {

	start: function({port, dir}) {

	  const app = express();
	  app.use(express.static(dir));
	  return new Promise(function(resolve) {
      this.express = app.listen(port, function() {
	      console.log('Express application is listening on port ' + port);
	      resolve();
      });
	  });
	},

	stop: function() {
    if (!this.express) return;
    return Promise.resolve()
      .then(this.express.close.bind(this.express));
	}

};

server.start({
	port,
	dir
});
