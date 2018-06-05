module.exports = function (sequelize, DataTypes) {
    var Tacos = sequelize.define(
        "Tacos", {
            taco_name: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 20]
                }
            },
            devoured: {
                type: DataTypes.BOOLEAN
            }
        });
    return Tacos;
};
