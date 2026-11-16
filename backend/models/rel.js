const Movimentacao = require('./movimentacao')
const Funcionaro = require('./funcionario')
const Materiais = require('./materiais')
const Condominio = require('./condominio')

Condominio.hasMany(Materiais,{
    foreignKey: 'idCondominio',
    onDelete: 'CASCADE'
})

Materiais.belongsTo(Condominio,{
    foreignKey: 'idCondominio',
    allowNull: false
})

Materiais.hasMany(Movimentacao,{
    foreignKey: 'idMateriais',
    onDelete: 'CASCADE'
})

Movimentacao.belongsTo(Materiais,{
    foreignKey: 'idMateriais',
    allowNull: false
})

module.exports = {Funcionaro,Movimentacao,Condominio,Materiais}