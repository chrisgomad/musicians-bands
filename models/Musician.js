const {Sequelize, db} = require('../db');
const { DataTypes } = require('sequelize');

// TODO - define the Musician model
let Musician;

Musician = db.define('musician', {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
})

module.exports = {
    Musician
};