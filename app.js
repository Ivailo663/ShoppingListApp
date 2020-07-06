const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
var path = require('path');
app.use(express.static("./dist", { index: "index.html" }))

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'dist/index.html'))
// })
app.use('/static', express.static(path.join(__dirname, 'src/styles/gallery/')))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
