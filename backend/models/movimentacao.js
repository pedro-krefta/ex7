const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Movimentacao = db.define('Movimentacao',{
    codMovimentacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    qtdeMovimentada: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM("ENTRADA","SAIDA"),
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
},{
    tableName: 'Movimentação',
    timestamps: false
})

module.exports = Movimentacao