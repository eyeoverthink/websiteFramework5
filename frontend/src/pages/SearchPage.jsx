import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading } from "@chakra-ui/react";
import CenteredLayout from "../components/CenteredLayout.jsx";
import GoogleCustomSearch from "../components/GoogleCustomSearch.jsx";

function SearchPage() {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('term');

  return (
      <CenteredLayout>
        <Box p={1}>
          <Heading mb={6}> Here are your results for : "{searchTerm}"</Heading>
          <GoogleCustomSearch />
        </Box>
      </CenteredLayout>
  );
}

export default SearchPage;