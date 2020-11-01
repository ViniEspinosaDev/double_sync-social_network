import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();

        table.string('email').notNullable;
        table.string('password').notNullable;
        table.string('name').notNullable;
        table.string('biography');
        table.string('gender').notNullable;
        table.string('phone');
        table.dateTime('dateRegistered').notNullable;
        table.string('accountStatus').notNullable;
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}