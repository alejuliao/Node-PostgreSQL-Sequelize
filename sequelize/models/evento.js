const Sequelize = require('sequelize')
const sequelize = require('../_database')


const Evento = sequelize.define('evento', {
  nome: {
    type: Sequelize.STRING
  },
  date:{
    type: Sequelize.DATEONLY    
  }
})
module.exports = Evento

const Participante = require('./participante')
Evento.belongsToMany(Participante, {through: 'evento_participante'});
