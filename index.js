const express = require('express');
const bodyParser = require('body-parser');
const notes = require('./services/notes');
const sequelize = require('./models/sequelize');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
});

app.use('/notes', notes);

async function syncDatabaseAndStartServer() {
  let tryCount = 0;
  const maxTry = 5;
  let synced = false;
  do {
    try {
      tryCount += 1;
      console.log(`Trial ${tryCount} of ${maxTry}`);
      await sequelize.sync();
      synced = true;
    } catch (err) {
      console.error(err);
    }
  } while (!synced && tryCount < maxTry)
  if (synced)
  {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  }
}

syncDatabaseAndStartServer();

