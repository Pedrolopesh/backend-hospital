exports.up = function (knex) {
    return knex.schema.createTable('ocr', function (table) {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.integer('queue_id').notNullable()
        table.foreign('queue_id').references('id').inTable('queue')
        table.integer('risk_id').notNullable()
        table.foreign('risk_id').references('id').inTable('risk')
        table.integer('user_id').notNullable()
        table.foreign('user_id').references('id').inTable('user')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('ongs')
};