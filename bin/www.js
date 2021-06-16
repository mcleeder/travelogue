const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//SUB APPS
//--------
app.use("/reno", require("../www/reno/routes"));
app.use("/newyork", require("../www/newyork/routes"));

//--------
//END SUB APPS


//MAIN APP
//--------
app.use(express.static(path.join(__dirname, '../www/main/public')));

app.get('/', (req, res) => {
  res.send('Missing index.html in /public');
})

//--------
//END MAIN APP


app.listen(process.env.PORT || port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})