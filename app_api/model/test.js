var mongoose = require('mongoose');

var testSchema = new mongoose.Schema
                
                (
                  {name: String}, 
                  {strict: false}
                );

mongoose.model('Test', testSchema);
