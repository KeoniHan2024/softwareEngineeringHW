var express = require('express');
var router = express.Router();

const orderData = [
    {"topping": "Cherry",
    "quantity": 2},
    {"topping": "plain",
    "quantity": 6},
    {"topping": "chocolate",
    "quantity": 3}
]

/* GET orders listing. */
router.get('/', function(req, res, next) {
    // res.setHeader("Content-Type", "application/json");
    // res.writeHead(200);
    // res.end(JSON.stringify(data, null, 3));
    res.json(orderData);
});

router.post('/', function(req, res, next) {
    // res.setHeader("Content-Type", "application/json");
    // res.writeHead(200);
    // res.end(JSON.stringify(data, null, 3));
    res.json(orderData);
});


module.exports = router;
