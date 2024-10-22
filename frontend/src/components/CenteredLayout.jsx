import { Flex } from "@chakra-ui/react";

const CenteredLayout = ({ children }) => {
    return (
        <h1>
        <Flex
            direction="column"
            align="center"
            justify="center"
            minHeight="calc(100vh - 64px)" // Subtracting navbar height
            width="100%"
            p={4}
        >
            {children}
        </Flex>
        </h1>
    );
};

const CenteredHeader = ({  }) => {
    return (
            <Flex
                align="center"
                p={4}
                >
            </Flex>
    );
};

export { CenteredHeader }
export default CenteredLayout;