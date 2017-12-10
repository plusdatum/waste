var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({
   name: String,
   update_at: {type: Date, default: Date.now },
});

module.exports = mongoose.model('Company', CompanySchema);