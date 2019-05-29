const faker = require("faker");

const data = []

for(let i = 0; i <= 20; i++){
  data.push({id: faker.finance.bitcoinAddress(), first: faker.name.firstName(), last: faker.name.lastName(), age: faker.random.number({min: 1, max: 100})})
}

module.exports = data;
