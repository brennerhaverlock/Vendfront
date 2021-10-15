import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    id: {type: Number, required: true},
    sku: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    ratings: {type: Number},
    discount: {type: null},
    discountDuration: {type: null},
    badge: {type: String, default: 0},
    totalSale: {type: Number, default: 0},
    vendor: {type: String, default: 0},
    skin: {type: String},
    type: {type: String, type: String },
    categories: {type: String, type: String, type: String },
    tags: {type : String,type : String,type : String },
    thumbs: { type : String, type : String},
    previewImages: {type : String, type : String,type : String, type : String},
    excerpt: {type: String},
    description: {type: String},
    variations: [{id: Number, title: String, color: {
        name: String,
        thumb: String,
        code: String
    },
    materials :[{
        name: String, 
        slug: String,
        thumb: String,
        price: Number

    }],
    sizes : [
        {
            name: String,
            stock: Number
        }
    ]  }],
}, {
    timestamps: true
});

const Product =
 mongoose.models.Product || mongoose.model('Product', productSchema)

 export default Product