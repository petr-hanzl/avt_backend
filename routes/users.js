const express = require('express');

const router = express.Router();

const User = require('../models/Users');

router.get('/', (req, res) => {
    User.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(200);
            res.json({ message: err});
            console.error(err);
        })
});

router.post('/', (req, res) => {
    const user = new User({
        id_keycloak: req.body.id_keycloak,
        firstName: req.body.firstName,
        surname: req.body.surname,
        address: req.body.address,
        zip: req.body.zip
    });

    user.save()
        .then(data => {
           res.json(data);
        })
        .catch((err) => {
            res.status(200);
            res.json({ message: err});
            console.error(err);
        })
});

router.patch('/:id', (req, res) => {
    User.updateOne(
        { _id: req.params.id },
        { $set: { firstName: req.body.firstName } }
        )
        .then((updatedUser) => {
            res.json(updatedUser);
        })
        .catch((err) => {
            res.status(200);
            res.json({ message: err});
            console.error(err);
        })
})



module.exports = router;