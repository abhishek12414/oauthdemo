const router = require('express').Router();

const authCheck = (req, res, next) =>{
    if(!req.user) {
        res.redirect('/auth/login');
    } else {
        next();
    }
}

router.get('/', authCheck, (req, res)=> {
    console.log(req.params);
    console.log(req.body);
    res.status(200).send('req');
});

module.exports = router;