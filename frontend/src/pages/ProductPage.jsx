import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRestaurantStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
    const { fetchRestaurants, restaurants } = useRestaurantStore();

    useEffect(() => {
        fetchRestaurants();
    }, [fetchRestaurants]);
    console.log("restaurants", restaurants);

    return (
        <Container maxW='container.xl' py={12}>
            <VStack spacing={8}>
                <Text
                    fontSize={"30"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                    textAlign={"center"}
                >
                    Current Restauranst 🚀
                </Text>

                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                        lg: 3,
                    }}
                    spacing={10}
                    w={"full"}
                >
                    {restaurants.map((restaurant) => (
                        <ProductCard key={restaurant._id} restaurant={restaurants} />
                    ))}
                </SimpleGrid>

                {restaurants.length === 0 && (
                    <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
                        No restaurants found 😢{" "}
                        <Link to={Create}>
                            <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
                                Create a product
                            </Text>
                        </Link>
                    </Text>
                )}
            </VStack>
        </Container>
    );
};
export default ProductPage;
