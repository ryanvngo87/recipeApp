module.exports = (sequelize, DataTypes) => {
    const Recipes = sequelize.define("Recipes", {
        foodName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Recipes;
};