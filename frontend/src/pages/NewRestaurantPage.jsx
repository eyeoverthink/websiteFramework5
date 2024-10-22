// // import {
// //   Box,
// //   Heading,
// //   VStack,
// //   FormControl,
// //   FormLabel,
// //   Input,
// //   Textarea,
// //   Button,
// //   useToast,
// // } from "@chakra-ui/react";
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// //
// // const NewRestaurantPage = () => {
// //   const [newRestaurant, setNewRestaurant] = useState({
// //     name: '',
// //     cuisine: '',
// //     description: '',
// //     image: '',
// //   });
// //   const navigate = useNavigate();
// //   const toast = useToast();
// //
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewRestaurant({ ...newRestaurant, [name]: value });
// //   };
// //
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch('/api/restaurants', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(newRestaurant),
// //       });
// //
// //       if (!response.ok) {
// //         throw new Error('Failed to add restaurant');
// //       }
// //
// //       const data = await response.json();
// //
// //       toast({
// //         title: "Restaurant added successfully",
// //         status: "success",
// //         duration: 3000,
// //         isClosable: true,
// //       });
// //       navigate('/restaurants');
// //     } catch (error) {
// //       toast({
// //         title: "Error adding restaurant",
// //         description: error.message,
// //         status: "error",
// //         duration: 3000,
// //         isClosable: true,
// //       });
// //     }
// //   };
// //
// //   return (
// //     <Box p={8}>
// //       <Heading mb={6}>Add New Restaurant</Heading>
// //       <form onSubmit={handleSubmit}>
// //         <VStack spacing={4} align="stretch">
// //           <FormControl isRequired>
// //             <FormLabel>Name</FormLabel>
// //             <Input
// //               name="name"
// //               value={newRestaurant.name}
// //               onChange={handleInputChange}
// //             />
// //           </FormControl>
// //           <FormControl isRequired>
// //             <FormLabel>Cuisine</FormLabel>
// //             <Input
// //               name="cuisine"
// //               value={newRestaurant.cuisine}
// //               onChange={handleInputChange}
// //             />
// //           </FormControl>
// //           <FormControl isRequired>
// //             <FormLabel>Description</FormLabel>
// //             <Textarea
// //               name="description"
// //               value={newRestaurant.description}
// //               onChange={handleInputChange}
// //             />
// //           </FormControl>
// //           <FormControl>
// //             <FormLabel>Image URL</FormLabel>
// //             <Input
// //               name="image"
// //               value={newRestaurant.image}
// //               onChange={handleInputChange}
// //             />
// //           </FormControl>
// //           <Button type="submit" colorScheme="blue">Add Restaurant</Button>
// //         </VStack>
// //       </form>
// //     </Box>
// //   );
// // };
// //
// // export default NewRestaurantPage;
//
// import {
//   Box,
//   Heading,
//   VStack,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Button,
//   useToast,
// } from "@chakra-ui/react";
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
//
// const NewRestaurantPage = () => {
//   const [newRestaurant, setNewRestaurant] = useState({
//     name: '',
//     cuisine: '',
//     description: '',
//     image: '',
//   });
//   const navigate = useNavigate();
//   const toast = useToast();
//
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRestaurant({ ...newRestaurant, [name]: value });
//   };
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/restaurants', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newRestaurant),
//       });
//
//       if (!response.ok) {
//         throw new Error('Failed to add restaurant');
//       }
//
//       const data = await response.json();
//
//       toast({
//         title: "Restaurant added successfully",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//       navigate('/restaurants');
//     } catch (error) {
//       toast({
//         title: "Error adding restaurant",
//         description: error.message,
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };
//
//   return (
//       <Box p={8}>
//         <Heading mb={6}>Add New Restaurant</Heading>
//         <form onSubmit={handleSubmit}>
//           <VStack spacing={4} align="stretch">
//             <FormControl isRequired>
//               <FormLabel>Name</FormLabel>
//               <Input
//                   name="name"
//                   value={newRestaurant.name}
//                   onChange={handleInputChange}
//               />
//             </FormControl>
//             <FormControl isRequired>
//               <FormLabel>Cuisine</FormLabel>
//               <Input
//                   name="cuisine"
//                   value={newRestaurant.cuisine}
//                   onChange={handleInputChange}
//               />
//             </FormControl>
//             <FormControl isRequired>
//               <FormLabel>Description</FormLabel>
//               <Textarea
//                   name="description"
//                   value={newRestaurant.description}
//                   onChange={handleInputChange}
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Image URL</FormLabel>
//               <Input
//                   name="image"
//                   value={newRestaurant.image}
//                   onChange={handleInputChange}
//               />
//             </FormControl>
//             <Button type="submit" colorScheme="blue">Add Restaurant</Button>
//           </VStack>
//         </form>
//       </Box>
//   );
// };
//
// export default NewRestaurantPage;


import {BASE_URL} from 'dotenv';
import {VITE_API_URL} from 'dotenv';
import {MONGO_URI} from 'dotenv';

import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CenteredLayout from "../components/CenteredLayout.jsx";

const NewRestaurantPage = () => {
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    cuisine: '',
    description: '',
    image: '',
  });
  const navigate = useNavigate();
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRestaurant({ ...newRestaurant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const BASE_URL = 'http://localhost:5173'; // was 5000, should be 3000 : Adjust this to match your backend URL
      const response = await fetch(`${MONGO_URI}/api/restaurants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRestaurant),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Server responded with ${response.status}: ${text}`);
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error(`Invalid JSON response: ${await response.text()}`);
      }

      if (data.success) {
        toast({
          title: "Restaurant added successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate('/restaurants');
      } else {
        throw new Error(data.message || 'Failed to add restaurant');
      }
    } catch (error) {
      toast({
        title: "Error adding restaurant",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error('Full error:', error);
    }
  };

  return (
      <CenteredLayout>
      <Box p={8}>
        <Heading mb={6}>Add New Restaurant</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                  name="name"
                  value={newRestaurant.name}
                  onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Cuisine</FormLabel>
              <Input
                  name="cuisine"
                  value={newRestaurant.cuisine}
                  onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                  name="description"
                  value={newRestaurant.description}
                  onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input
                  name="image"
                  value={newRestaurant.image}
                  onChange={handleInputChange}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">Add Restaurant</Button>
          </VStack>
        </form>
      </Box>
      </CenteredLayout>
  );
};

export default NewRestaurantPage;