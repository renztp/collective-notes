import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    default: []
  }],
  title: { type: String, required: true },
  description: { type: String, required: true },
}, {
  timestamps: true,
});

const Collection = mongoose.model('Collection', collectionSchema);
export default Collection;