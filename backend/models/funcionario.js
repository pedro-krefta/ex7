const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Funcionario = db.define('Funcionario',{
    codFuncionario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    tableName: 'Funcionario',
    timestamps: false
})

module.exports = Funcionario