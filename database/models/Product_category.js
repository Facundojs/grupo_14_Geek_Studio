module.exports = function (sequelize, dataTypes) {
    let alias = 'Product_category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: 'product_category',
        timestamps: false
    };
    let Product_category = sequelize.define(alias, cols, config);
    Product_category.associate = function (models) {
        Product_category.hasMany(models.Product_category, {
            as: 'categories',
            foreignKey: 'category_id'
        });
    }
    return Product_category;
}