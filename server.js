const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World! - Prototype5'));
app.listen(port, () => console.log(`app running on port ${port}`));