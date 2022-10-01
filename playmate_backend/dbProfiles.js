import mongoose from  'mongoose';

const playmateSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    receiver: Boolean
});

export default mongoose.model("profilecontents", playmateSchema);