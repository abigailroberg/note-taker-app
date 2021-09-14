const router = require('express').Router()
const { notes } = require('../../db/db.json')
const { filterByQuery, createNote } = require('../../lib/notes')


// get notes
router.get('/notes', (req, res) => {
    let results = notes
    if(req.query) {
        results = filterByQuery(req.query, results)
    }
    res.json(results)
})

// post note
router.post('/notes', (req, res) => {
    // set unique id
    req.body.id = "id"

    const note = createNote(req.body, notes)
    res.json(note)
})

module.exports = router