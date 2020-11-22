"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    return knex.schema.createTable('friends', table => {
        table.string('id').notNullable;
        table.integer('first_user_id').notNullable;
        table.integer('second_user_id').notNullable;
        // Status = pendent, blocked, accepted
        table.string('status').notNullable;
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('friends');
}
exports.down = down;
