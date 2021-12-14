const db = require('../database/models');

const GenresModel = {

    findAll: () => {
        let genres = db.Genres.findAll();
        return genres
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    },

    findById: (id) => {
        let genres = db.Genres.findByPk(id);
        return genres
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }
};

module.exports = GenresModel;