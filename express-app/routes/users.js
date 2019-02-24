var express = require('express');
var router = express.Router();

var arrOfStr = {
  1: "Let it be",
  2: "Just do it",
  3: "Here we go"
};

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users', {
    respond: "/users"
  });
});

router.get('/:id', function (req, res, next) {
  var getId = req.params.id;
  var getIdStr = arrOfStr[getId];

  if (getId < 1 || getId > 3) {
    res.render('users', {
      respond: "Error!"
    });
  } else {
    res.render('users', {
      respond: getIdStr
    });
  }
});

module.exports = router;