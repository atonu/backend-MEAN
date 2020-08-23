const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 1,
    },
    sessions: [
        {
            token: {
                type: String,
                required: true,
            },
            expiresAt: {
                type: Number,
                required: true
            }
        }
    ]
});

UserSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();



}
