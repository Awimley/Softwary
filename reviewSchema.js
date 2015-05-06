var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema
                
                (
                  {}, 
                  {strict: false}
                );


var profileSchema = new mongoose.Schema
                
                (
                  {}, 
                  {strict: false}
                );

var employeeSchema = new mongoose.Schema

              ({
                name: String,
                job: String,
                qualifying: [String],
                knowledge: [Schema.Types.ObjectId],
                reviews: [Schema.Types.ObjectId]
              });

var productSchema = new mongoose.Schema

              ({
                name: String,
                type: [Schema.Types.ObjectId],
                vendor: {
                  name: String,
                  website: String,
                  metaData: [String]
                },
                category: [Schema.Types.ObjectId],
                internal_review: [reviewSchema],
                external_review: [reviewSchema],
                user_review: [reviewSchema],
                profile: profileSchema,
                detailed_review: [reviewSchema],
                pricing: {
                  method: Schema.Types.ObjectId,
                  rate: String
                  }
              });

mongoose.model('Products', productSchema);

var userSchema = new mongoose.Schema

            ({
              name: String,
              email: String,
              password: String,
              metaData: String,
              reviews: [Schema.Types.ObjectId]
            });

mongoose.model('Users', userSchema);

var typeSchema = new mongoose.Schema

            ({
              name: String,
              description: String
            });

mongoose.model('Types', typeSchema);

var pricingSchema = new mongoose.Schema

            ({
              method: String, 
              metaData: [String]
            });

mongoose.model('Pricing', pricingSchema);

var categorySchema = new mongoose.Schema
            
            ({
              name: String,
              description: String
            });

mongoose.model('Category', categorySchema);