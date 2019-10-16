const express = require('express');
const app = express();
const port = process.env.PORT;
const { router } = require('./router/router');

app.use('/', router);

app.listen(port, () => console.log(`app running on port ${port}`));