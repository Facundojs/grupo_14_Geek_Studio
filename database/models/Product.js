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
            },
        id_category: {
            type: dataTypes.INTEGER,
                
        },
        price: {
            type: dataTypes.DECIMAL,
            },
        image: {
            type: dataTypes.STRING,
            
        },
        description: {
            type: dataTypes.TEXT,
            
        },
        // createdAt: {
        //     type: dataTypes.DATE
        // },
        // updatedAt: {
        //     type: dataTypes.DATE
        // },
        // deletedAt: {
        //     type: dataTypes.DATE
        // }
    };
    let config = {
        tableName: 'products',
        timestamps: false,
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