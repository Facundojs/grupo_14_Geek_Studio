module.exports = function (sequelize, dataTypes) {
    let alias = 'User_type';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        type_name: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
        
    let config = {
        tableName: 'user_type',
        timestamps: false
    };
    let User_type = sequelize.define(alias, cols, config);
    User_type.associate = function (models) {
        User_type.hasMany(models.User, {
            as: 'users',
        })
    }
    return User_type;
}