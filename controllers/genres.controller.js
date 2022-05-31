const Genre = require("../models/Genre.model");

module.exports.genreController = {
  postGenre: (req, res) => {
    Genre.create({
        genreName: req.body.name,
        genreDescription: req.body.description,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteGenre: (req, res) => {
    Genre.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Жанр удален");
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getAllGenre: (req, res) => {
    Genre.find()
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
};
