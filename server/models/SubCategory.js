const { Schema, model } = require('mongoose');

const subCategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        prevMonthSpent: {
            type: Schema.Types.Decimal128,
            required: false,
            unique: false
        },
        allotted: {
            type: Schema.Types.Decimal128,
            required: false,
            unique: false
        },
        spent: {
            type: Schema.Types.Decimal128,
            required: false,
            unique: false
        },
        parentCategory: {
            type: String,
            required: true
        }
        
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

subCategorySchema.virtual('balanceLeft').get(function () {
    return parseFloat(this.allotted - this.spent).toFixed(2);
});


const SubCategory = model('SubCategory', subCategorySchema);

module.exports = SubCategory;