import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/CrudDB'), (err) => {
    if (!err){
        console.log('successfull');
    } else {
        console.log('Error: ' + JSON.stringify(err,undefined,2));
    }
}