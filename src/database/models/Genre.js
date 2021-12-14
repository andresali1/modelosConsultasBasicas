module.exports = (sequelize, dataTypes) => {
    const nameModel = "Genres";
    const columns = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        ranking: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    const options = {
        timestamps: false
    };

    const Movie = sequelize.define(nameModel, columns, options);
    return Movie;
};