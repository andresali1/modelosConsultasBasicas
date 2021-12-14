const model = require('../model');

const genresController = {
    list: (req, res, next) => {
        const genres = model.GenresModel.findAll();
        genres
            .then((genre) => {
                res.render('genresList', { genres: genre })
            })
            .catch((err) => {
                next(err);
            })
    },
    detail: (req, res, next) => {
        const genres = model.GenresModel.findById(req.params.id);
        genres
            .then((genre) => {
                res.render('genresDetail', { genre })
            })
            .catch((err) => {
                next(err);
            })
    }
};

module.exports = genresController;