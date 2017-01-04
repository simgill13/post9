//
// # SimpleServer
//
const express = require('express');
const app = express();

const knex = require('knex')({
    client: 'pg',
    connection: { 
        user: 'ubuntu',
        password: 'ubuntu',
        database: 'recipify'
    },
});


// //inserting  a row into table
// knex.insert({
//     name: 'tacos',
//     description: 'random shit in shell ....'
// }).into('recipes').then();


// knex.insert({
//     name: 'burger',
//     description: 'beef....'
// }).into('recipes').then();





// // Delete one of the recipes
// knex.del().from('recipes').where({
//     name: 'burger'
// }).then();



// knex.del().from('recipes').where({
//     name: 'tacos'
// }).then();





// knex.insert({
//     tag:'good food'
// }).into('myTags').then();



// knex.insert({
//     tag:'not good food'
// }).into('myTags').then();


knex.select('name').from('recipes').then(function(name){
  console.log(name);
});






app.get('/', (req, res)=> {
  res.json('Hello');
});




app.listen(process.env.PORT || 8080);