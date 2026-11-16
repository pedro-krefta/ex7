const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Condominio = db.define('Condominio',{
    codCondominio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    tableName: 'Condominio',
    timestamps: false
})

module.exports = Condominio