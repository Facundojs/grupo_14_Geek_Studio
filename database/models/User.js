module.exports = function (sequelize, dataTypes) {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING,
            allowNull: false
    
        },
        telephone: {
            type: dataTypes.NUMBER,
            allowNull: false,
            unique: true
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        id_user_type: {
            type: dataTypes.NUMBER
        },
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    let User = sequelize.define(alias, cols, config);
    User.associate = function (models) {
        User.hasOne(models.userType, {
            as: 'userType',
            foreignKey: 'id_user_type'
        })
    }
    return User;
}