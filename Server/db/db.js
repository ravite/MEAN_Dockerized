var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://database/admin');
 
//  console.log("Your connection is:",connection);
module.exports = connection;