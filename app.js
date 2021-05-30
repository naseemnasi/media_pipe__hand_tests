const express = require('express');
const app = express();
const port = 4000;

require('./src/router/index')(app);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
