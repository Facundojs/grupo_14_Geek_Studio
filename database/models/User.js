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
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        telephone: {
            type: dataTypes.NUMBER,
            allowNull: false,
            unique: true
        },
        id_user_type: {
            type: dataTypes.NUMBER
        },
    };
    let config = {
        tableName: 'users',
        timestamps: true,
        paranoid: true
    };
    let User = sequelize.define(alias, cols, config);
    User.associate = function (models) {
        User.hasOne(models.userType, {
            as: 'userType',
            foreignKey: 'user_type_id'
        })
    }
    return User;
}