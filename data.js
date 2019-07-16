var faker = require('faker');
var data = [];
var categories = ["Watersports", "Soccer", "Chess"];
faker.seed(100);
for(let i = 0; i < 507; ++i){
    var category = faker.helpers.randomize(categories);
    data.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        description: `${category}: ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price())
    });
}

module.exports = () => 
    ({
        categories: categories,
        products: data,
        orders: []
    });