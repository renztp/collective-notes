import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import collectionRoutes from './routes/collections.route.js';
dotenv.config();
// import { auth } from 'express-openid-connect';
import cors from 'cors';
import eoc from 'express-openid-connect';
const { auth, requiresAuth } = eoc;
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'd7C0XAN69XzEMRLw0fEurpfrofJK8M78',
    issuerBaseURL: 'https://dev-40vwmq120o5q42sc.us.auth0.com'
};
const app = express();
const port = process.env.PORT || 3000;
const apiBaseUrl = process.env.API_BASE_URL || '/api/v1';
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.hc3kell.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('Connected!'));
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req['oidc']?.isAuthenticated() ? 'Logged in' : 'Logged out');
});
// Need middleware to check if user is logged in before allowing them to request collections
app.use(`${apiBaseUrl}/collections`, collectionRoutes);
app.get(`${apiBaseUrl}/profile`, requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=index.js.map