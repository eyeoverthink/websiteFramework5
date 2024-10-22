import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

function NavBar() {
    return (
        <Box bg="black.100" px={4}>
            <Flex h={16} alignItems="center" justifyContent="center">
                <Flex gap={8}>
                    <Link as={RouterLink} to="/">Home</Link>
                    <Link as={RouterLink} to="/attractions">Attractions</Link>
                    <Link as={RouterLink} to="/restaurants">Restaurants</Link>
                    <Link as={RouterLink} to="/newRestaurant">New Restaurant</Link>
                    <Link as={RouterLink} to="/about">About</Link>
                    <Link as={RouterLink} to="/contact">Contact</Link>
                </Flex>
            </Flex>
        </Box>
    );
}

export default NavBar;