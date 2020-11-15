import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('friends', table => {
        table.string('id').notNullable;
        table.integer('first_user_id').notNullable;
        table.integer('second_user_id').notNullable;
        // Status = pendent, blocked, accepted
        table.string('status').notNullable;
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('friends');
}