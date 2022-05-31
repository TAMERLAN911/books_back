const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  reviewText: String,
  reviewName: String,
  reviewAuthor: {
    ref: "Book",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
