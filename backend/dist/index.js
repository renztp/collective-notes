import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import collectionRoutes from './routes/collections.route.js';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.hc3kell.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('Connected!'));
app.use(express.json());
// Need middleware to check if user is logged in before allowing them to request collections
app.use('/collections', collectionRoutes);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=index.js.map