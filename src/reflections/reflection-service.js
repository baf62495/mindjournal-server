const ReflectionsService = {
  getAllReflections(knex) {
    return knex.select('*').from('reflections');
  },
  getById(knex, id) {
    return knex
      .select('*')
      .from('reflections')
      .where('id', id)
      .first();
  },
  insertReflection(knex, newReflection) {
    return knex
      .insert(newReflection)
      .into('reflections')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  deleteReflection(knex, id) {
    return knex('reflections')
      .where({ id })
      .delete();
  }
};

module.exports = ReflectionsService;
