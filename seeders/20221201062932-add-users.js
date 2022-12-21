'use strict';

const user = require('../models/user');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users=[]
   for(let i=0;i<10;i++){
     users.push({
      firstname:`user${i}`,
      lastname:`oerusf`,
      email:`user${i}@gmail.com`,
      password:"132132",
      inactive:true,
      activationToken:"47fg9erg394",
      createdAt: new Date(),
      updatedAt	: new Date()
    })
    
    await queryInterface.bulkInsert('users',users,{});
   }
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('users', null, {});
  }
};
