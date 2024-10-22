// // import {
// //     Box,
// //     Heading,
// //     VStack,
// //     FormControl,
// //     FormLabel,
// //     Input,
// //     Textarea,
// //     Button,
// //     useToast,
// // } from "@chakra-ui/react";
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import SearchPage from "./SearchPage.jsx";
// //
// // const NewRestaurantPage = () => {
// //     const [newRestaurant, setNewRestaurant] = useState({
// //         name: '',
// //         cuisine: '',
// //         description: '',
// //         image: '',
// //     });
// //     const navigate = useNavigate();
// //     const toast = useToast();
// //
// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setNewRestaurant({ ...newRestaurant, [name]: value });
// //     };
// //
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await fetch('/api/restaurants', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify(newRestaurant),
// //             });
// //
// //             if (!response.ok) {
// //                 throw new Error('Failed to add restaurant');
// //             }
// //
// //             const data = await response.json();
// //
// //             toast({
// //                 title: "Restaurant added successfully",
// //                 status: "success",
// //                 duration: 3000,
// //                 isClosable: true,
// //             });
// //             navigate('/restaurants');
// //         } catch (error) {
// //             toast({
// //                 title: "Error adding restaurant",
// //                 description: error.message,
// //                 status: "error",
// //                 duration: 3000,
// //                 isClosable: true,
// //             });
// //         }
// //     };
// //
// //     return (
// //         <Box p={8}>
// //             <SearchPage />
// //             <Heading mb={6}>Add New Restaurant</Heading>
// //             <form onSubmit={handleSubmit}>
// //                 <VStack spacing={4} align="stretch">
// //                     <FormControl isRequired>
// //                         <FormLabel>Name</FormLabel>
// //                         <Input
// //                             name="name"
// //                             value={newRestaurant.name}
// //                             onChange={handleInputChange}
// //                         />
// //                     </FormControl>
// //                     <FormControl isRequired>
// //                         <FormLabel>Cuisine</FormLabel>
// //                         <Input
// //                             name="cuisine"
// //                             value={newRestaurant.cuisine}
// //                             onChange={handleInputChange}
// //                         />
// //                     </FormControl>
// //                     <FormControl isRequired>
// //                         <FormLabel>Description</FormLabel>
// //                         <Textarea
// //                             name="description"
// //                             value={newRestaurant.description}
// //                             onChange={handleInputChange}
// //                         />
// //                     </FormControl>
// //                     <FormControl>
// //                         <FormLabel>Image URL</FormLabel>
// //                         <Input
// //                             name="image"
// //                             value={newRestaurant.image}
// //                             onChange={handleInputChange}
// //                         />
// //                     </FormControl>
// //                     <Button type="submit" colorScheme="blue">Add Restaurant</Button>
// //                 </VStack>
// //             </form>
// //         </Box>
// //     );
// // };
// //
// // export default NewRestaurantPage;
//
// import React, { useState } from 'react';
// import { Box, Heading, Input, Button, Textarea } from "@chakra-ui/react";
//
//
//
// function CreateRestaurant() {
//     const [name, setName] = useState('');
//     const [cuisine, setCuisine] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState('');
//     const [address, setAddress] = useState('');
//     const [rating, setRating] = useState('');
//     const [message, setMessage] = useState('');
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         const restaurantData = {
//             name,
//             cuisine,
//             description,
//             image,
//             address,
//             rating: parseFloat(rating), // Ensure rating is sent as a number
//         };
//
//         try {
//             const response = await fetch(`${import.meta.env.VITE_API_URL}/restaurants`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(restaurantData),
//             });
//
//             const data = await response.json();
//             if (response.ok) {
//                 setMessage('Restaurant created successfully!');
//                 setName('');
//                 setCuisine('');
//                 setDescription('');
//                 setImage('');
//                 setAddress('');
//                 setRating('');
//             } else {
//                 setMessage('Error creating restaurant: ' + data.message);
//             }
//         } catch (error) {
//             setMessage('Error: ' + error.message);
//         }
//     };
//
//     return (
//         <Box p={8}>
//             <Heading>Create New Restaurant</Heading>
//             <form onSubmit={handleSubmit}>
//                 <Input
//                     placeholder="Restaurant Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                     mt={4}
//                 />
//                 <Input
//                     placeholder="Cuisine"
//                     value={cuisine}
//                     onChange={(e) => setCuisine(e.target.value)}
//                     mt={4}
//                 />
//                 <Textarea
//                     placeholder="Description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     mt={4}
//                 />
//                 <Input
//                     placeholder="Image URL"
//                     value={image}
//                     onChange={(e) => setImage(e.target.value)}
//                     required
//                     mt={4}
//                 />
//                 <Input
//                     placeholder="Address"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     mt={4}
//                 />
//                 <Input
//                     type="number"
//                     placeholder="Rating (0-5)"
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     mt={4}
//                 />
//                 <Button type="submit" mt={4}>Create</Button>
//             </form>
//             {message && <Box mt={4}>{message}</Box>}
//         </Box>
//     );
// }
//
// export default CreateRestaurant;

import React, { useState } from 'react';
import { Box, Heading, Input, Button, Textarea } from "@chakra-ui/react";
import { useRestaurantStore } from '../store/product';


function CreateRestaurant() {
    const [name, setName] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const createRestaurant = useRestaurantStore(state => state.createRestaurant);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const restaurantData = {
            name,
            cuisine,
            description,
            image,
            rating,
            address
        };

        const result = await createRestaurant(restaurantData);
        if (result.success) {
            setMessage('Restaurant created successfully!');
            // Clear the form
            setName('');
            setCuisine('');
            setDescription('');
            setImage('');
            setRating('');
            setAddress('');
        } else {
            setMessage('Error creating restaurant: ' + result.message);
        }
    };

    return (
        <Box p={8}>
            <Heading>Create New Restaurant</Heading>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Restaurant Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    mt={4}
                />
                <Input
                    placeholder="Restaurant Cuisine"
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    required
                    mt={4}
                />
                <Textarea
                    placeholder="Restaurant Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    mt={4}
                />
                <Input
                    placeholder="Restaurant Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                    mt={4}
                />
                <Textarea
                    placeholder="Restaurant Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    mt={4}
                />
                <Input
                    placeholder="Restaurant Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                    mt={4}
                />
                <Button type="submit" mt={4}>Create</Button>
            </form>
            {message && <Box mt={4}>{message}</Box>}
        </Box>
    );
}

export default CreateRestaurant;