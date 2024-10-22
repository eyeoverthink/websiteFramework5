import React from 'react';
import { Box, Heading, Text, SimpleGrid, VStack, Image, Badge, Flex } from "@chakra-ui/react";
import dotenv from "dotenv";
import GoogleCustomSearch from "../components/GoogleCustomSearch.jsx";
import CenteredLayout from "../components/CenteredLayout.jsx";
import SearchPage from "./SearchPage.jsx";
function RestaurantPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearched(true);
  };

  return (
      <CenteredLayout>
        <SearchPage />
        <Box p={8}>
          <Heading mb={6} textAlign="center">Oakland Restaurants</Heading>
          <Text mb={8} textAlign="center">Discover the best dining experiences in Oakland.</Text>

          <VStack spacing={4} as="form" onSubmit={handleSearch}>
            <Input
                placeholder="Search for restaurants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" colorScheme="blue">Search</Button>
          </VStack>

          {isSearched && (
              <Box mt={8}>
                <Heading size="md" mb={4}>Search Results for "{searchTerm}"</Heading>
                <GoogleCustomSearch searchTerm={`${searchTerm} restaurants in Oakland`} />
              </Box>
          )}

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={10}>
            {/* You can add featured restaurants or categories here */}
            {/* For example: */}
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Heading size="md">Featured Restaurant</Heading>
              <Text>Description of the featured restaurant</Text>
            </Box>
            {/* Add more boxes as needed */}
          </SimpleGrid>
        </Box>
      </CenteredLayout>
  );
}


const restaurants = [
  {
    name: "Homeroom",
    cuisine: "American",
    description: "Famous for gourmet mac and cheese with a twist.",
    imageUrl: "https://example.com/homeroom.jpg",
    neighborhood: "Temescal"
  },
  {
    name: "Zachary's Chicago Pizza",
    cuisine: "Pizza",
    description: "Beloved deep-dish pizza joint with a loyal following.",
    imageUrl: "https://example.com/zacharys.jpg",
    neighborhood: "Rockridge"
  },
  {
    name: "Burma Superstar",
    cuisine: "Burmese",
    description: "Popular Burmese restaurant known for tea leaf salad.",
    imageUrl: "https://example.com/burma-superstar.jpg",
    neighborhood: "Temescal"
  },
  {
    name: "Taco Sinaloa",
    cuisine: "Mexican",
    description: "Authentic street tacos and burritos from a food truck.",
    imageUrl: "https://example.com/taco-sinaloa.jpg",
    neighborhood: "Fruitvale"
  },
  {
    name: "Brown Sugar Kitchen",
    cuisine: "Soul Food",
    description: "Modern soul food with a focus on organic ingredients.",
    imageUrl: "https://example.com/brown-sugar-kitchen.jpg",
    neighborhood: "West Oakland"
  },
  {
    name: "Champa Garden",
    cuisine: "Laotian",
    description: "Hidden gem serving Laotian, Thai, and Vietnamese cuisine.",
    imageUrl: "https://example.com/champa-garden.jpg",
    neighborhood: "East Oakland"
  }
];

const RestaurantCard = ({ name, cuisine, description, imageUrl, neighborhood }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={imageUrl} alt={name} height="200px" width="100%" objectFit="cover" />
    <Box p="6">
      <Flex justify="space-between" align="baseline">
        <Heading size="md" mb={2}>{name}</Heading>
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {cuisine}
        </Badge>
      </Flex>
      <Text color="gray.500" fontSize="sm" mb={2}>
        {neighborhood}
      </Text>
      <Text mt={2}>{description}</Text>
    </Box>
  </Box>
);

export const RestaurantsPage = () => {
  return (
      <Box p={8}>

        <script async src="https://cse.google.com/cse.js?cx=83ab80fe9cde54f8a">
        </script>
        <div className="gcse-search"></div>
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading mb={4}>Discover Oakland's Culinary Delights</Heading>
            <Text fontSize="xl">
              Experience the rich tapestry of flavors that make Oakland a food lover's paradise.
              From soul food to international cuisines, our city's restaurants reflect the diversity of our community.
            </Text>
          </Box>

          <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10}>
            {restaurants.map((restaurant, index) => (
                <RestaurantCard key={index} {...restaurant} />
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
  );
}

export default RestaurantsPage;