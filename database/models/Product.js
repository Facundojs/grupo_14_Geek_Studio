module.exports = function (sequelize, dataTypes) {
  let alias = "Product";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL,
      allowNull: false,
    },
    discount: {
      type: dataTypes.INTEGER,
    },
    image: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    //description
    features: {
      type: dataTypes.TEXT,
    },
  };
  let config = {
    tableName: "products",
    timestamps: true,
    paranoid: false,
  };
  let Product = sequelize.define(alias, cols, config);
  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      as: "category",
      foreignKey: "category_id",
    });
  };
  return Product;
};
