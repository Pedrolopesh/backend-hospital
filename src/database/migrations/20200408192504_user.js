exports.up = function (knex) {
    return knex.schema.createTable('user', function (table) {
        table.increments()
        table.string('name').notNullable()
        table.string('email').unique().notNullable();
        table.string('password').unique().notNullable();
        table.string('whatsapp').notNullable()
        table.string('role').notNullable() // Médico, enfermeiro
        table.string('level').notNullable() // Administrador, coordenador
        table.boolean('active').notNullable() 
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('user')
};