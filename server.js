const express = require ('express');
const app = express();
const port = 3000;

const languages = require ('./routes/languages');

app.use(express.json());
app.use ('/languages', languages);

app.listen(port, () => console.log(`app is up and running on port: ${port}`));

