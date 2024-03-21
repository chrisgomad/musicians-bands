const { Model, DataTypes } = require('sequelize');
const {Sequelize, db} = require('../db');


// TODO - define the Song model
let Song;

Song = db.define('song',{
    name: DataTypes.STRING,
    year: DataTypes.NUMBER,
    length: DataTypes.NUMBER
})

module.exports = {
    Song
};