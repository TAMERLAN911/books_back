const { Router } = require('express')

const router = Router()

const { bookController } = require('../controllers/books.controller')
router.post('/book', bookController.postBook)
router.delete('/book',bookController.deleteBook)
router.patch('/book/id:',bookController.patchBook)
router.get('/book/id:',bookController.getBookById)
router.get('/book',bookController.getAllBooks)
router.get('/book/genre/:id',bookController.getBooksByGenre)

module.exports = router