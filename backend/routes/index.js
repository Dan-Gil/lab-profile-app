const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => res.status(200).json({user}))
    .catch(err => res.status(500).json({err}));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const {user} = req;
  res.status(200).json({user});
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({msg: 'This user is logged out'});
});

// router.put('/edit/:id', (req,res,next)=>{
//   res.redirect()
// })

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then(user => res.status(200).json({user}))
    .catch(err => res.status(500).json({err}));
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({msg: 'You need to login first'});
}

exports.catchErrors = controller => (req, res, next) => controller(req, res, next).catch(next);

module.exports = router;
