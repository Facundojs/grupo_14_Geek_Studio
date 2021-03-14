module.exports = function (sequelize, dataTypes) {
    let alias = 'Products';
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
        },
        id_category: {
            type: dataTypes.INTEGER,
            allowNull: false
    
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false,
        }
    };
    let config = {
        tableName: 'products',
        timestamps: true,
        paranoid: true
    };
    let Product = sequelize.define(alias, cols, config);
    Product.associate = function (models) {
        Product.belongsTo(models.Product_category, {
            as: 'product_category',
            foreignKey: 'product_category_id'
        });
    }
    return Product;
}