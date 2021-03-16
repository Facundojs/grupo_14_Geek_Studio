module.exports = function (sequelize, dataTypes) {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING,
        }
        
    };
    let config = {
        tableName: 'products',
        timestamps: false,
        paranoid: true
    };
    let Category = sequelize.define(alias, cols, config);
    return Category;
}