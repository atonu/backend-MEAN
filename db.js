const mongoose = require('mongoose');
try {
    mongoose.connect('mongodb://localhost:27017/CrudDB',{useNewUrlParser:true, useUnifiedTopology: true}), (err) => {
    if (!err){
        console.log('successfull');
    } else {
        console.log('Error: ' + JSON.stringify(err,undefined,2));
    }
    }
} catch(e) {
    console.error(e);
}
module.exports = mongoose