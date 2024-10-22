
import React from 'react';
import { Box, Heading, Text, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, InfoIcon } from "@chakra-ui/icons";

const ContactPage = () => {
  return (
    <Box p={8} textAlign="center">
      <Heading mb={6}>Contact Us</Heading>
      <Text mb={8}>Get in touch with eyeoverthink travel for all your Oakland adventure needs!</Text>
      
      <VStack spacing={4} align="center">
        <HStack>
          <Icon as={PhoneIcon} color="blue.500" />
          <Text>Phone: (510) 555-1234</Text>
        </HStack>
        <HStack>
          <Icon as={EmailIcon} color="blue.500" />
          <Link href="mailto:info@eyeoverthinktravel.com">info@eyeoverthinktravel.com</Link>
        </HStack>
        <HStack align="flex-start">
          <Icon as={InfoIcon} color="blue.500" mt={1} />
          <Text>
            123 Adventure Avenue<br />
            Oakland, CA 94612<br />
            United States
          </Text>
        </HStack>
      </VStack>
      
      <Box mt={8}>
        <Heading size="md" mb={4}>Business Hours</Heading>
        <Text>Monday - Friday: 9:00 AM - 6:00 PM</Text>
        <Text>Saturday: 10:00 AM - 4:00 PM</Text>
        <Text>Sunday: Closed</Text>
      </Box>
    </Box>
  );
}

export default ContactPage;
