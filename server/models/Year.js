const { Schema, model } = require('mongoose');

const yearSchema = new Schema(
    {
        
        year: {
            type: Number,
            required: true,
            unique: false,
            match: [/^[1-9]\d{3,}$/, 'Must be a four-digit year!']
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        months: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Month'
            }
        ],
        income: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Income'
            }
        ],
        expenses: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Expense'
            }
        ],
        projectedIncome: [
            {
                type: Schema.Types.ObjectId,
                ref: 'ProjectedIncome'
            }
        ],
        projectedExpenses: [
            {
                type: Schema.Types.ObjectId,
                ref: 'ProjectedExpenses'
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


const Year = model('Year', yearSchema);

module.exports = Year;