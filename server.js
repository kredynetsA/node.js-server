const express = require("express");
const app = express();



app.get('/', (req, res) => {
    res.send('Hello World!')
})



const PORT = 3000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});