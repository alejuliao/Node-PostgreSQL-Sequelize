const db = require('./_database');

async function update(name){
  await db.connect()

  const queryUpdateParticipante = " UPDATE participante SET nome = ($2) WHERE id = ($1)"

  await db.query(queryUpdateParticipante, [1, name])

  await db.end()
}
update('Alexandre Juliao')