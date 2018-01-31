const path = require("path");
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);
const port = 3001;

const DIST_DIR = path.join(__dirname, "lib");
const HTML_FILE     = path.join(DIST_DIR, "index.html");

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.get("*", (req, res, next) => {
		compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
			if (err) {
				return next(err);
			}
			res.set('content-type', 'text/html');
			res.send(result);
			res.end();
		});
	});


app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
