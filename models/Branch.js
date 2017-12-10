var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Company  = mongoose.model('Company');

var BranchSchema = new Schema({
   address: String,
   phone_1: String,
   phone_2: String,
   phone_3: String,
   email: String,
   is_main: Boolean,
   company: { type: Schema.ObjectId, ref: 'Company'}
});

module.exports = mongoose.model('Branch', BranchSchema);