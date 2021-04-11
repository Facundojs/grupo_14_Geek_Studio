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
            allowNull: false,
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false,
        }
        
    };
    let config = {
        tableName: 'categories',
        timestamps: false,
        paranoid: false
    };
    let Category = sequelize.define(alias, cols, config);
    Category.associate = models => {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id'
        });
    }

    return Category;
}