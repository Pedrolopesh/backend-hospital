exports.up = function (knex) {
    return knex.schema.createTable('ocr', function (table) {
        table.increments()
        table.string('name').notNullable()
        table.foreign('queue_id').references('id').inTable('queue')
        table.foreign('risk_id').references('id').inTable('risk')
        table.foreign('user_id').references('id').inTable('user')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('ongs')
};