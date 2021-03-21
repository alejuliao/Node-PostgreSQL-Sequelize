const models = require('./models')
const { Op } = require('sequelize');

async function select(){
  console.log("\n");
  
  //Eventos
  const eventos = await models.evento.findAll()
  eventos.forEach((evento) => {
    console.log("Evento: ", evento.nome)
  })
  console.log("\n");


  //Eventos Abril
  const eventosAbril = await models.evento.findAll({
    where: {
      date: {
        [Op.between]: [new Date('04-01-2021'), new Date('04-31-2021')]
      } 
    }
  })
  eventosAbril.forEach((evento) => {
    console.log("Evento em Abril: ", evento.nome)
  })
  console.log("\n");


  //Participantes
  const participantes  = await models.participante.findAll()
  participantes.forEach((participante) => {
    console.log("Participante: ", participante.nome)
  })
  console.log("\n");

  //Participantes em eventos
  const eventosComParticipantes = await models.evento.findAll({
    include: [
      {
        model: models.participante
      }
    ]
  })
  eventosComParticipantes.forEach((evento) => {
    console.log("Evento: ", evento.nome)
    evento.participantes.forEach((participante) => {
      console.log("----------> Participante: ", participante.nome)
    })
  })
  console.log("\n");

  await models.sequelize.close()
}
select()
