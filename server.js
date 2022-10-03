const express = require("express");
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

connectDB();

app.use(cors());
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/product', require('./routes/api/product'));

const PORT = 3000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});