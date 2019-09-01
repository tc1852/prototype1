const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World! - Prototype3'));
app.listen(port, () => console.log(`app running on port ${port}`));