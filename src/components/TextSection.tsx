import {
  Box,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const TextSection = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });
  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Welcome
      </Heading>

      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        padding={4}
        borderRadius={4}
        margin="16px 0px"
      >
        <Box d="flex" alignItems="center" fontSize={textSize}>
          This is different charts implementation using Chart.js, Next.js, Chakra-UI and Typescript.
        </Box>
      </Box>
    </>
  );
};

export default TextSection;
