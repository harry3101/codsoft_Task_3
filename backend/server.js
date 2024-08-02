import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import cloudinary from 'cloudinary';
import mongoose from 'mongoose';

// Ensure all necessary environment variables are present
if (!process.env.CLOUDINARY_CLIENT_NAME || 
    !process.env.CLOUDINARY_CLIENT_API || 
    !process.env.CLOUDINARY_CLIENT_SECRET || 
    !process.env.MONGO_URI || 
    !process.env.PORT) {

}

// Cloudinary configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
