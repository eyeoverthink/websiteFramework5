import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Heading,
    HStack,
    IconButton,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useColorModeValue,
    useDisclosure,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { useRestaurantStore } from "../store/product";
import { useState } from "react";

const RestaurantCard = ({ restaurant }) => {
    const [updatedRestaurant, setUpdatedRestaurant] = useState(restaurant);

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const { deleteRestaurant, updateRestaurant } = useProductStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDeleteRestaurant = async (pid) => {
        const { success, message } = await deleteRestaurant(pid);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleUpdateRestaurant = async (pid, updatedRestaurant) => {
        const { success, message } = await updateRestaurant(pid, updatedRestaurant);
        onClose();
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: "Restaurant updated successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}
        >
            <Image src={restaurant.image} alt={restaurant.name} h={48} w='full' objectFit='cover' />

            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>
                    {restaurant.name}
                </Heading>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    ${restaurant.cuisine}
                </Text>

                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    ${restaurant.description}
                </Text>
                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    ${restaurant.address}
                </Text>
                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    ${restaurant.rating}
                </Text>


                    <HStack spacing={2}>
                        <DeleteIcon onClick={close} colorScheme="blue" />

                        <Button
                            leftIcon={<DeleteIcon />}
                            onClick={() => handleDeleteRestaurant(restaurant._id)}
                            colorScheme="red"
                        >
                            Delete
                        </Button>
                    </HStack>

            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent>
                    <ModalHeader>Update Restaurant</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder='Restaurant Name'
                                name='name'
                                value={updatedRestaurant.name}
                                onChange={(e) => setUpdatedRestaurant({ ...updatedRestaurant, name: e.target.value })}
                            />
                            <Input
                                placeholder='Cuisine'
                                name='cuisine'
                                type='string'
                                value={updatedRestaurant.cuisine}
                                onChange={(e) => setUpdatedRestaurant({ ...updatedRestaurant, cuisine: e.target.value })}
                            />

                            <Input
                                placeholder='Description'
                                name='description'
                                value={updatedRestaurant.description}
                                onChange={(e) => setUpdatedRestaurant({ ...updatedRestaurant, description: e.target.value })}
                            />
                            <Input
                                placeholder='Image URL'
                                name='image'
                                value={updatedRestaurant.image}
                                onChange={(e) => setUpdatedRestaurant({ ...updatedRestaurant, image: e.target.value })}
                            />
                            <Input
                                placeholder='Rating'
                                name='rating'
                                value={updatedRestaurant.rating}
                                onChange={(e) => setUpdatedRestaurant({ ...updatedRestaurant, rating: e.target.value })}
                            />
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            mr={3}
                            onClick={() => handleUpdateRestaurant(restaurant._id, updatedRestaurant)}
                        >
                            Update
                        </Button>
                        <Button variant='ghost' onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};
export default RestaurantCard;
