const { Model, DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');


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