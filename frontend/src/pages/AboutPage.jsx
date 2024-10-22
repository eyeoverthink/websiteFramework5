
import { Box, Heading, Text, Image, VStack, SimpleGrid } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <Box p={8}>
      <Heading mb={6}>About eyeoverthink travel</Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <VStack align="stretch" spacing={4}>
          <Text>
            eyeoverthink travel is your gateway to discovering the hidden gems and vibrant culture of Oakland, California. Founded in 2015, we've been helping travelers explore the heart of the East Bay with curated experiences and insider knowledge.
          </Text>
          <Text>
            Our passion for Oakland's diverse neighborhoods, rich history, and thriving arts scene drives us to create unforgettable journeys for our clients. Whether you're a foodie, nature lover, or urban explorer, we have the perfect Oakland adventure waiting for you.
          </Text>
          <Text>
            At eyeoverthink travel, we believe in sustainable and responsible tourism that benefits local communities. We partner with local businesses and artisans to offer authentic experiences that showcase the true spirit of Oakland.
          </Text>
        </VStack>
        
        <VStack spacing={4}>
          <Image 
            src="https://example.com/oakland-skyline.jpg" 
            alt="Oakland Skyline" 
            borderRadius="md"
          />
          <Text fontStyle="italic">The beautiful Oakland skyline at sunset</Text>
        </VStack>
      </SimpleGrid>
      
      <Box mt={8}>
        <Heading size="md" mb={4}>Our Team</Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
          {[
            { name: "Alex Johnson", role: "Founder & CEO", image: "https://example.com/alex.jpg" },
            { name: "Samantha Lee", role: "Head of Operations", image: "https://example.com/samantha.jpg" },
            { name: "Marcus Chen", role: "Lead Tour Guide", image: "https://example.com/marcus.jpg" },
          ].map((member, index) => (
            <Box key={index} textAlign="center">
              <Image 
                src={member.image} 
                alt={member.name} 
                borderRadius="full" 
                boxSize="150px" 
                objectFit="cover" 
                mb={2}
              />
              <Text fontWeight="bold">{member.name}</Text>
              <Text>{member.role}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default AboutPage;