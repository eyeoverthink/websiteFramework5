import React from 'react';
import { Box, Heading, Text, Button, VStack, Image, SimpleGrid, Container } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import CenteredLayout from '../components/CenteredLayout';
import dotenv from "dotenv";


const Feature = ({ title, text, image }) => {
  return (
    <VStack>
      <Image borderRadius="md" src={image} alt={title} boxSize="200px" objectFit="cover"/>
      <Heading size="md">{title}</Heading>
      <Text textAlign="center">{text}</Text>
    </VStack>
  );
};

const HomePage = () => {
  return (
      <CenteredLayout>
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('https://example.com/oakland-skyline.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="50vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack
          bgColor="rgba(0,0,0,0.6)"
          p={8}
          borderRadius="md"
          color="white"
          textAlign="center"
        >
          <Heading size="2xl">Discover Oakland</Heading>
          <Text fontSize="xl">Your gateway to the heart of the Bay Area</Text>
          <Button as={RouterLink} to="/attractions" colorScheme="teal" size="lg">
            Explore Now
          </Button>
        </VStack>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={16}>
        <Heading textAlign="center" mb={12}>Experience Oakland</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            title="Vibrant Culture"
            text="Explore diverse neighborhoods and a thriving arts scene."
            image="https://t4.ftcdn.net/jpg/03/32/02/97/240_F_332029744_qWDWCXZ0l0V19rLHjqIllYhwsb4biefO.jpg"
          />

            <Feature
            title="Natural Beauty"
            text="Discover parks, lakes, and stunning Bay Area views."
            image="https://t3.ftcdn.net/jpg/03/11/47/66/240_F_311476691_gz3xCyBF4HcmvTIIvnfh36VeliUjaof6.jpg"

            />
            <Feature
            title="Culinary Delights"
            text="Savor world-class cuisine from farm-to-table restaurants."
            image="https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?ga=GA1.1.630025655.1727383162&semt=ais_hybrid"
            />
        </SimpleGrid>
      </Container>

      {/* Call to Action */}
      <Box bgColor="gray.100" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <Heading textAlign="center">Ready to Plan Your Oakland Adventure?</Heading>
            <Text textAlign="center" fontSize="lg">
              Let us help you create unforgettable memories in the heart of the East Bay.
            </Text>
            <Button as={RouterLink} to="/contact" colorScheme="blue" size="lg">
              Contact Us
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
      </CenteredLayout>
  );
}

export default HomePage;