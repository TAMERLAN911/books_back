
const { Router } = require('express')

const { genreController } = require('../controllers/genres.controller')

const router = Router()

router.post('/genre', genreController.postGenre )
router.delete('/genre/:id', genreController.deleteGenre)
router.get('/genre', genreController.getAllGenre)

module.exports = router