const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Materiais = db.define('Materiais',{
    codMateriais: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idCondominio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'codCondominio',
            model: 'Condominio'
        }
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    qtdeEstoque: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    codLote: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    tableName: 'Materiais',
    timestamps: false
})

module.exports = Materiais