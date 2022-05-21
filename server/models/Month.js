const { Schema, model } = require('mongoose');

const monthSchema = new Schema(
    {
        month: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        year: {
            type: Number,
            required: true,
            unique: false,
            match: [/^[1-9]\d{3,}$/, 'Must be a four-digit year!']
        },
        ownerEmail: {
            type: String,
            required: true,
            unique: false,
            match: [/([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})/g, 'Must match an email address!']
        },
        categories: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Category'
            }
        ],
        // accounts: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Account'
        //     }
        // ],
        // income: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Income'
        //     }
        // ],
        // pesos: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Pesos'
        //     }
        // ],
        // projectedIncome: [
        //     {
        //         type: Number
        //     }
        // ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

// monthSchema.virtual('paychecks').get(function () {
//     return this.income.length;
// });

// monthSchema.virtual('projected-paychecks').get(function () {
//     return this.projectedIncome.length;
// });


const Month = model('Month', monthSchema);

module.exports = Month;