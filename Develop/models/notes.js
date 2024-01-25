const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection')

class Notes extends Model {}

    Notes.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING
            },
            note: {
                type: DataTypes.STRING
            }
        },
        {
            sequalize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'notes'
        }
    );

    module.exports = Notes;
