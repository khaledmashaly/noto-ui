const jsf = require('json-schema-faker');
const schema = require('./schema');
const faker = require('faker');
const fs = require('fs');
const path = require('path');


jsf.extend('faker', () => faker)
    .option({optionalsProbability: 0.5});


const fakeData = jsf(schema);
fs.writeFile(path.join('src', 'dev', 'db.json'), JSON.stringify(fakeData), err => {
    if (err) throw err;
    console.log('generated fake data');
    process.exit();
});