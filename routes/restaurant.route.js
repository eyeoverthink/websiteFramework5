//
// import express from "express";
// const restRouter = express.Router();
//
// import { createRestaurant, deleteRestaurant, getRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";
//
//
// restRouter.get("/", getRestaurant);
// restRouter.post("/", createRestaurant);
// restRouter.put("/:id", updateRestaurant);
// restRouter.delete("/:id", deleteRestaurant);
//
// export default restRouter;



////////////////

import Restaurant from "../models/restaurant.model.js";
const router = express.Router();
const restaurantController = require('../controllers/restaurant.controller');
// Route to show all  restaurants
router.get('api/restaurants', restaurantController.getRestaurant);

// Route to get all restaurants

// Route to get a single restaurant by ID
router.get('api/restaurants/:id', restaurantController.getRestaurant(id));



// Route to update a restaurant by ID
router.put('api/restaurants/:id', restaurantController.updateRestaurant);

// Route to delete a restaurant by ID
router.delete('api/restaurants/:id', restaurantController.deleteRestaurant);

router.post('/api/restaurants/n/', async (req, res) => {
    const { name, address, cuisine, image } = req.body;

    if (!name || !image) {
        return res.status(400).json({ message: 'Missing restaurant details. You must provide at least a name and image.' });
    }

    try {
        const newRestaurant = new Restaurant({ name, address, cuisine, image });
        await newRestaurant.save();
        res.status(201).json({ success: true, data: newRestaurant });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating restaurant' });
    }
});


export { router as the_router };