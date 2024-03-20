const { DataTypes } = require('sequelize');
const {Sequelize, db} = require('../db');

// TODO - define the Band model
let Band;

Band = db.define('band', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
});

module.exports = {
    Band
};