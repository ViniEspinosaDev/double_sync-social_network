import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.string('id');
        table.string('name');
        table.string('email');
        table.string('biography');
        table.string('password');
        table.string('gender');
        table.string('phone');
        table.string('birth');
        table.string('dateRegistered');
        table.string('accountStatus');
        table.string('uf');
        table.string('city');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}