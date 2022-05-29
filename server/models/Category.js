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
            type: Schema.Types.Decimal128,
            required: false,
            unique: false
        },
        totalSpent: {
            type: Schema.Types.Decimal128,
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

categorySchema.virtual('leftToSpend').get(function () {
    return parseFloat(this.totalAllotted - this.totalSpent).toFixed(2);
});


const Category = model('Category', categorySchema);

module.exports = Category;