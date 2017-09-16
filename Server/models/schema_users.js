var mongoose = require("mongoose"),
Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;

var userSchema = new Schema({
_id: { type: objectId, auto: true },
name: { type: String, required: true },
contactNo: { type: String, required: true },
address: { type: String }
}, {
versionKey: false
});

var user = mongoose.model('users', userSchema);

module.exports = user;