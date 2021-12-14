const db = require('../database/models');

const MoviesModel = {

    findAll: () => {
        let movies = db.Movies.findAll();
        return movies
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    },

    findById: (id) => {
        let movies = db.Movies.findByPk(id);
        return movies
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    },

    findByCondition: (condition) => {
        let movies = db.Movies.findAll(condition);
        return movies
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }
};

// MoviesModel.findOrdered({
//     order: [
//         ['release_date', 'DESC']
//     ],
//     limit: 5,
//     offset: 16
// })
//   .then((movies) => {
//     console.log(movies);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = MoviesModel;