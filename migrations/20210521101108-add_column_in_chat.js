'use strict';
const Sequelize = require('sequelize')
const { QueryInterface, DataTypes } = require('sequelize');
const { ChatTypesEnum } = require('../types');

module.exports = {
  /**
   * 
   * @param {QueryInterface} queryInterface 
   * @param {Sequelize} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {

    // Add altering commands here.

    await queryInterface.addColumn(
      'Chats',
      'type', {
      type: DataTypes.ENUM(...ChatTypesEnum),
      defaultValue: "chat"
    }
    );


  },
  /**
    * 
    * @param {QueryInterface} queryInterface 
    * @param {Sequelize} Sequelize 
    */
  down: async (queryInterface, Sequelize) => {
    // Add reverting commands here.
    await queryInterface.removeColumn('Chats', 'type');

  }
};