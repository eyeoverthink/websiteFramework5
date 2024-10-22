import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { })
            .then(() => console.log('Connected to MongoDB')) // Log a message indicating the server has started
            .catch(err => console.error('Error connecting to MongoDB:', err));
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // process code 1 code means exit with failure, 0 means success
    }
};
export default connectDB;
// // Define middleware
// // Connect to MongoDB (ensure you have your MongoDB connection string in the .env file)
// await mongoose.connect(process.env.MONGO_URI, { })
//     .then(() => console.log('Connected to MongoDB')) // Log a message indicating the server has started
//     .catch(err => console.error('Error connecting to MongoDB:', err)); // Log a message indicating the server has started
//
db.json