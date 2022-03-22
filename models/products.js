import mongoose, { ObjectId } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categoryProducts: {
        type: ObjectId,
        ref: 'categoryProducts'
    }
})
export default mongoose.model('Product', productSchema)