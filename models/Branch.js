var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Company  = mongoose.model('Company');

var BranchSchema = new Schema({
   name:    { type: String, required: true },
   address: { type: String, required: true },
   phone_1: { type: String, required: true },
   phone_2: String,
   phone_3: String,
   email:   { type: String, required: true },
   is_main: Boolean,
   company: { type: Schema.ObjectId, ref: 'Company'}
});

module.exports = mongoose.model('Branch', BranchSchema);