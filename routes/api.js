var express = require('express');
var router = express.Router();
var Card = require('../models/card.js')

/* GET cards listing. */

router.route('/cards')

    .get(function (req, res) {
        Card.find(function (err, cards) {
            if(err)
                return res.send(err);
            var context = cards.map(function(card){
                    return {
                        type: card.type,
                        first_number : card.first_number,
                        card_number_length : card.card_number_length,
                        security_code_lenght : card.security_code_lenght,
                        logo : card.logo,
                        hint : card.hint
                    };
            });
            return res.json(context);
        });
    })

    .post(function (req, res) {

    });

router.route('/cards/id')
    .post(function (req, res) {
       Card.findOne({first_number: req.body.fn} ,function (err, card) {
           if(err)
               return res.send(err);
           var context = {
                   type: card.type,
                   first_number : card.first_number,
                   card_number_length : card.card_number_length,
                   security_code_lenght : card.security_code_lenght,
                   logo : card.logo,
                   hint : card.hint
               };
           return res.json(context);
       })
    });

module.exports = router;
