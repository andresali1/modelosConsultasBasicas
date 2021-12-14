module.exports = (sequelize, dataTypes) => {
    const nameModel = "Movies";
    const columns = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: dataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        }
    };
    const options = {
        timestamps: false
    };

    const Movie = sequelize.define(nameModel, columns, options);
    return Movie;
};