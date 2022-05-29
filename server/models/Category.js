const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        totalAllotted: {
            type: Number,
            required: false,
            unique: false
        },
        totalSpent: {
            type: Number,
            required: false,
            unique: false
        },
        subCategories: [
            {
                type: Schema.Types.ObjectId,
                ref: 'SubCategory'
            }
        ],
        
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

// categorySchema.virtual('paychecks').get(function () {
//     return this.income.length;
// });

// categorySchema.virtual('projected-paychecks').get(function () {
//     return this.projectedIncome.length;
// });


const Category = model('Category', categorySchema);

module.exports = Category;