var express = require('express');
const {getCardList, addCard, toggleFavourite} = require("../db");
var router = express.Router();

router.get('/', function (req, res) {
    getCardList().then(
        data => {
            let msg = req.session.msg;
            req.session.msg = undefined;
            res.render('index', {cardList: data, message: msg});
        },
        error => console.log(error)
    );
});

//Called when the user submits a form
router.post('/', function (req, res) {
    let promise;

    //Calls a different function depending on the form submitted
    if(req.body.form_type === "ADD_CARD") {
        let favourite = req.body.job_favourite ? 1 : 0;
        promise = addCard(req.body.job_title, req.body.job_type, req.body.job_customer, favourite);
    } else if(req.body.form_type === "SET_FAVOURITE") {
        promise = toggleFavourite(req.body.card_id);
    }

    promise.then(
        success => req.session.msg = success,
        error => req.session.msg = error
    ).finally(
        () => res.redirect('/')
    );
});

module.exports = router;
