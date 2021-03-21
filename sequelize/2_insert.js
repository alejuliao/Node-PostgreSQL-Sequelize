const models = require('./models')

async function insert(){

  //Eventos
  const eventoNode = await models.evento.create({nome: 'Encontro de Nodejs', date:'10-31-2021'})
  const eventoPostgres = await models.evento.create({nome: 'Encontro de Postgresql', date:'4-13-2021'})
  const eventoMongoDB = await models.evento.create({nome: 'Encontro de MongoDB', date:'4-01-2021'})
  const eventoSwiftUI = await models.evento.create({nome: 'Encontro de SwiftUI', date:'5-10-2021'})
  const eventoPostgresEdition2 = await models.evento.create({nome: 'Encontro de PostgresqlEdition2', date:'4-31-2021'})

  //Participantes
  const carlos  = await models.participante.create({nome: 'Carlos'})
  const augusto = await models.participante.create({nome: 'Augusto'})
  const janaina = await models.participante.create({nome: 'Janaína'})
  const rafael  = await models.participante.create({nome: 'Rafael'})


  //Participantes em eventos
  await eventoNode.setParticipantes([carlos, augusto, janaina])
  await eventoPostgres.setParticipantes([janaina, rafael])

  await models.sequelize.close()

  console.log("Dados Inseridos");
}
insert()
