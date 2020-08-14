const express = require('express');
const router = express.Router();
const members = require('../../members');
const uuid = require('uuid');

const idFilter = (req) => (member) => member.id === parseInt(req.params.id);

//get all members
router.get('/', (req, res) => {
    res.json(members);
});

// get single member route
router.get('/:id', (req, res) => {
    const found = members.some(idFilter(req));
    if (found) {
        res.json(
            members.filter((member) => member.id === parseInt(req.params.id))
        );
    } else {
        res.status(400).json({
            msg: `No member with the id of ${req.params.id}`,
        });
    }
});

// create member (broken)
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active',
    };
    if (!newMember.name || !newMember.email) {
        res.status(400).json({
            msg: `Please include a name and email in your post request`,
        });
    } else {
        members.push(newMember);
        res.json(members);
        res.status(200).json({ msg: `${newMember} has been created` });
    }
});

module.exports = router;
