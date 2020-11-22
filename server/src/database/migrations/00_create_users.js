"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
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
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('users');
}
exports.down = down;
