const { Router } = require('express')

const { reviewController } = require('../controllers/reviews.controller')
const Review = require('../models/Review.model')

const router = Router()

router.post('review', reviewController.postReview)
router.delete('/review/:id',reviewController.deleteReview)
router.get('/review/:id',reviewController.getReviewByBook)

module.exports = router 