var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({
   name: String,
   path_image: String,
   update_at: {type: Date, default: Date.now },
});

module.exports = mongoose.model('Company', CompanySchema);