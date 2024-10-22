import { useState } from 'react';
import { Box, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, Select, useToast } from "@chakra-ui/react";
import CenteredLayout from "../components/CenteredLayout.jsx";
import dotenv from "dotenv";
import SearchPage from "./SearchPage.jsx";



const CreatePage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [rating, setRating] = useState('');


  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Here you would typically send this data to your server
    // For now, we'll just simulate a successful creation
    console.log({ pageType, title, content, imageUrl });
    
    toast({
      title: "Page created.",
      description: "Your new page has been added successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Reset form
    setPageType('');
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  return (
      <CenteredLayout>
    <Box p={8}>
      <Heading mb={6}>Create New Page</Heading>
      <VStack as="form" spacing={8}
              align="stretch" onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Page Type</FormLabel>
          <Select placeholder="Select page type" value={pageType} onChange={(e) => setPageType(e.target.value)}>
            <option value="attraction">Attraction</option>
            <option value="restaurant">Restaurant</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Page title" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Page content" />
        </FormControl>
        <FormControl>
          <FormLabel>Image URL</FormLabel>
          <Input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
        </FormControl>
        <Button colorScheme="blue" type="submit">Create Page</Button>
      </VStack>
    </Box>
      </CenteredLayout>
  );
}

export default CreatePage;