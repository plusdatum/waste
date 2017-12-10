var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({
   name: { type: String, required: true, unique: true },
   update_at: {type: Date, default: Date.now },
});

module.exports = mongoose.model('Company', CompanySchema);