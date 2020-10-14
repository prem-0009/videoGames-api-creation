const express = require('express');
const app = express();
const morgan = require('morgan');

console.clear()

const gameRoutes = require('./routes/gameRoutes');

const port = 3000;


app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({extended: false}))//??handle url encode data need to add for post request


app.use('/api/v1/games', gameRoutes);

app.listen(port, () => {
    console.log(`listening to ${port}`);
})