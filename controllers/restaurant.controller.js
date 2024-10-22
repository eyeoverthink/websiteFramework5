import mongoose from "mongoose";
import Restaurant from "../models/restaurant.model.js";
import { connectDB } from "../config/db.js";
connectDB();




export const getRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.find({});
        res.status(200).json({ success: true, data: restaurant });
    } catch (error) {
        console.log("error in fetching restaurant:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};


export const createRestaurant = async (req, res) => {
    const restaurant = req.body;

    if (!restaurant.name || !restaurant.image) {
        return res.status(400).json({ success: false, message: "Please provide a name and an image" });
    }

    const newRestaurant = new Restaurant(restaurant);

    try {
        await newRestaurant.save();
        res.status(201).json({ success: true, data: newRestaurant });
    } catch (error) {
        console.error("Error in Create restaurant:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateRestaurant = async (req, res) => {
    const { id } = req.params;

    const restaurant = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Restaurant Id" });
    }

    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, restaurant, { new: true });
        res.status(200).json({ success: true, data: updatedRestaurant });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteRestaurant = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Restaurant Id" });
    }

    try {
        await Restaurant.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Restaurant deleted" });
    } catch (error) {
        console.log("error in deleting restaurant:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }

};
// // Get a single restaurant by ID
export const getRestaurantById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Restaurant Id" });
    }

    try {
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ success: false, message: "Restaurant not found" });
        }
        res.status(200).json({ success: true, data: restaurant });
    } catch (error) {
        console.log("Error in retrieving restaurant:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// const mongoose = require('mongoose');
// const Restaurant = require('../models/Restaurant'); // Make sure this path is correct
//
// // Create a new restaurant
// exports.addRestaurant = async (req, res) => {
//     const { name, address, cuisine, image } = req.body;
//
//     // Input validation
//     if (!name || !address || !cuisine) {
//         return res.status(400).json({ success: false, message: "Missing restaurant details. Name, address, and cuisine are required" });
//     }
//
//     try {
//         const newRestaurant = new Restaurant({ name, address, cuisine, image });
//         await newRestaurant.save();
//         res.status(201).json({ success: true, message: "Restaurant created", data: newRestaurant });
//     } catch (error) {
//         console.log("Error in creating restaurant:", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };
// // Get all restaurants
// exports.getAllRestaurants = async (req, res) => {
//     try {
//         const restaurants = await Restaurant.// Get all restaurants
// exports.getAllRestaurants = async (req, res) => {
//     try {
//         const restaurants = await Restaurant.
// // Get all restaurants
// exports.getAllRestaurants = async (req, res) => {
//     try {
//         const restaurants = await Restaurant.find();
//         res.status(200).json({ success: true, data: restaurants });
//     } catch (error) {
//         console.log("Error in retrieving restaurants:", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };
//
// // Get a single restaurant by ID
// exports.getRestaurant = async (req, res) => {
//     const { id } = req.params;
//
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ success: false, message: "Invalid Restaurant Id" });
//     }
//
//     try {
//         const restaurant = await Restaurant.findById(id);
//         if (!restaurant) {
//             return res.status(404).json({ success: false, message: "Restaurant not found" });
//         }
//         res.status(200).json({ success: true, data: restaurant });
//     } catch (error) {
//         console.log("Error in retrieving restaurant:", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };
//
// // Update a restaurant by ID
// exports.updateRestaurant = async (req, res) => {
//     const { id } = req.params;
//     const { name, address, cuisine, image } = req.body;
//
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ success: false, message: "Invalid Restaurant Id" });
//     }
//
//     try {
//         const updatedRestaurant = await Restaurant.findByIdAndUpdate(
//             id,
//             { name, address, cuisine, image },
//             { new: true, runValidators: true } // Ensure the new updated document is returned
//         );
//
//         if (!updatedRestaurant) {
//             return res.status(404).json({ success: false, message: "Restaurant not found" });
//         }
//
//         res.status(200).json({ success: true, message: "Restaurant updated", data: updatedRestaurant });
//     } catch (error) {
//         console.log("Error in updating restaurant:", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };
//
// // Delete a restaurant by ID
// exports.deleteRestaurant = async (req, res) => {
//     const { id } = req.params;
//
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ success: false, message: "Invalid Restaurant Id" });
//     }
//
//     try {
//         const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
//         if (!deletedRestaurant) {
//             return res.status(404).json({ success: false, message: "Restaurant not found" });
//         }
//         res.status(200).json({ success: true, message: "Restaurant deleted" });
//     } catch (error) {
//         console.log("Error in deleting restaurant:", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };
//
// // Add a review to a restaurant by ID
// exports.addReview = async (req, res) => {
//     const {id} = req.params;
//     const {title, content, rating} = req.body;
//
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({success: false, message: "Invalid Restaurant Id"});
//     }
//
//     if (!title || !content || !rating) {
//         return res.status(400).json({success: false, message: "Title, content, and rating are required"});
//     }
//
//     try {
//         const restaurant = await Restaurant.findByIdAndUpdate(
//             id,
//             {$push: {reviews: {title, content, rating}}},
//             {new: true, runValidators: true} // Ensure the new updated document is returned
//         );
//
//         if (!restaurant) {
//             return res.status(404).json({
//                 success: false, message:
//                     "Restaurant not found"
//             });
//         }
//         res.status(200).json({success: true, message: "Review added", data: restaurant});
//     } catch (error) {
//         console.log("Error in adding review:", error.message);
//         res.status(500).json({success: false, message: "Server Error"});
//        }
// };
//
//
// const mongoose = require('mongoose');
// const Restaurant = require('../models/Restaurant'); // Ensure this is the correct path to your Restaurant model
//
// // Create a new restaurant
// exports.addRestaurant = async (req, res) => {
//     const { name, address, cuisine, image } = req.body;
//
//     // Input validation: Make sure required fields are present
//     if (!name || !address || !cuisine || !image) {
//         return res.status(400).json({ success: false, message: "Missing restaurant details. Name, address, cuisine, and image are required." });
//     }
//
//     try {
//         const newRestaurant = new Restaurant({ name, address, cuisine, image });
//         await newRestaurant.save();
//         res.status(201).json({ success: true, message: "Restaurant created", data: newRestaurant });
//     } catch (error) {
//         console.log("Error in creating restaurant:", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };
//
// // Get all restaurants
// exports.getAllRestaurants = async (req, res) => {
//     try {
//         const restaurants = await Restaurant.find();
//         res.status(200).json({ success: true, data: restaurants });
//     } catch (error) {
//         console.log("Error in retrieving restaurants:", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };
//
// // Get a single restaurant by ID
// exports.getRestaurant = async (req, res) => {
//     const { id } = req.params;
//
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ success: false, message: "Invalid Restaurant Id" });
//     }
//
//     try {
//         const restaurant = await Restaurant.findById(id);
//         if (!restaurant) {
//             return res.status(404).json({ success: false, message: "Restaurant not found" });
//         }
//         res.status(200).json({ success: true, data: restaurant });
//     } catch (error) {
//         console.log("Error in retrieving restaurant:", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };
//
// // Update a restaurant by ID
// exports.updateRestaurant = async (req, res) => {
//     const { id } = req.params;
//     const { name, address, cuisine, image } = req.body;
//
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ success: false, message: "Invalid Restaurant Id" });
//     }
//
//     if (!name || !address || !cuisine || !image) {
//         return res.status(400).json({ success: false, message: "Missing restaurant details. Name, address, cuisine, and image are required." });
//     }
//
//     try {
//         const updatedRestaurant = await Restaurant.findByIdAndUpdate(
//             id,
//             { name, address, cuisine, image },
//             { new: true, runValidators: true } // Ensure the new updated document is returned
//         );
//
//         if (!updatedRestaurant) {
//             return res.status(404).json({ success: false, message: "Restaurant not found" });
//         }
//
//         res.status(200).json({ success: true, message: "Restaurant updated", data: updatedRestaurant });
//     } catch (error) {
//         console.log("Error in updating restaurant:", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };
//
// // Delete a restaurant by ID
// exports.deleteRestaurant = async (req, res) => {
//     const { id } = req.params;
//
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ success: false, message: "Invalid Restaurant Id" });
//     }
//
//     try {
//         const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
//         if (!deletedRestaurant) {
//             return res.status(404).json({ success: false, message: "Restaurant not found" });
//         }
//         res.status(200).json({ success: true, message: "Restaurant deleted" });
//     } catch (error) {
//         console.log("Error in deleting restaurant:", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };
//
// // Add a review to a restaurant by ID
// exports.addReview = async (req, res) => {
//     const { id } = req.params;
//     const { title, content, rating } = req.body;
//
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ success: false, message: "Invalid Restaurant Id" });
//     }
//
//     if (!title || !content || !rating) {
//         return res.status(400).json({ success: false, message: "Title, content, and rating are required" });
//     }
//
//     try {
//         const restaurant = await Restaurant.findByIdAndUpdate(
//             id,
//             { $push: { reviews: { title, content, rating } } },
//             { new: true, runValidators: true } // Ensure the new updated document is returned
//         );
//
//         if (!restaurant) {
//             return res.status(404).json({ success: false, message: "Restaurant not found" });
//         }
//         res.status(200).json({ success: true, message: "Review added", data: restaurant });
//     } catch (error) {
//         console.log("Error in adding review:", error.message);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };
