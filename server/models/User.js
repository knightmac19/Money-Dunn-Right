const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        lastname: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})/g, 'Must match an email address!']
        },
        accounts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Account'
            }
        ],
        income: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Income'
            }
        ],
        pesos: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Pesos'
            }
        ],
        projectedIncome: [
            {
                type: Schema.Types.ObjectId,
                ref: 'ProjectedIncome'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

UserSchema.virtual('paychecks').get(function () {
    return this.income.length;
});

UserSchema.virtual('projected-paychecks').get(function () {
    return this.projectedIncome.length;
});


const User = model('User', userSchema);

module.exports = User;