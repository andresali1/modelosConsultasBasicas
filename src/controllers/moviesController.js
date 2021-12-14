const model = require('../model');

const moviesController = {
    list: (req, res, next) => {
        const movies = model.MoviesModel.findAll();
        movies
            .then((movie) => {
                res.render('moviesList', { movies: movie })
            })
            .catch((err) => {
                next(err);
            })
    },
    detail: (req, res, next) => {
        const movies = model.MoviesModel.findById(req.params.id);
        movies
            .then((movie) => {
                res.render('moviesDetail', { movie })
            })
            .catch((err) => {
                next(err);
            })
    },
    new: (req, res, next) => {
        const movies = model.MoviesModel.findByCondition({
            order: [
                ['release_date', 'DESC']
            ],
        });
        movies
            .then((movie) => {
                res.render('newestMovies', { movies: movie })
            })
            .catch((err) => {
                next(err);
            })
    },
    recomended: (req, res, next) => {
        const movies = model.MoviesModel.findByCondition({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5,
            offset: 16
        });
        movies
            .then((movie) => {
                res.render('recommendedMovies', { movies: movie })
            })
            .catch((err) => {
                next(err);
            })
    }
};

module.exports = moviesController;