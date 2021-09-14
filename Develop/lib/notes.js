const { query } = require('express')
const fs = require('fs')
const path = require('path')

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray
    if(query.title) {
        filteredResults = filteredResults.filter(note => note.title === query.title)
    }
    return filteredResults
}

function createNote(body, notesArray) {
    const note = body
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes:notesArray }, null, 2)
    )
    return note
}

module.exports = {
    filterByQuery,
    createNote
}