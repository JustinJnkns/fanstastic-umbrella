const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    Category.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    Category.findOne({
            where: {
                id: req.params.id
            }
        }).then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No Category with this id' })
                return
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
});

router.post('/', (req, res) => {
    // create a new category
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;