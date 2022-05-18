const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 5000);

console.log('Running at Port 5000');