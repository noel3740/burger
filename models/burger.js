//Add dependencies
const orm = require("../config/orm");

var burger = {
    all: (cb) => {
        orm.selectAll("burgers", (result) => {
            cb(result);
        });
    },
    create: (columns, values, cb) => {
        orm.insertOne("burgers", columns, values, (result) => {
            cb(result);
        });
    },
    update: (whatToUpdate, rowIDValue, cb) => {
        orm.updateOne("burgers", whatToUpdate, rowIDValue, (result) => {
            cb(result);
        });
    }
};

// Export the database functions
module.exports = burger;