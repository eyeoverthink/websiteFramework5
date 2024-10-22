import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct, getProductById } from "../controllers/product.controller.js";
import { createRestaurant, deleteRestaurant, getRestaurant, updateRestaurant, getRestaurantById } from "../controllers/restaurant.controller.js";

const router = express.Router();
const my_router = express.Router();


my_router.get("/", getProducts);
my_router.post("", createProduct);
my_router.put("/:id", updateProduct);
my_router.delete("/:id", deleteProduct);
my_router.get("/:id", getProductById);


router.get("/", getRestaurant);
router.post("/", createRestaurant);
router.put("/:id", updateRestaurant);
router.delete("/:id", deleteRestaurant);
router.get("/:id", getRestaurantById);


export default router;
export { my_router };
