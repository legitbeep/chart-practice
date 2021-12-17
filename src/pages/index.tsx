import { Box } from "@chakra-ui/react";

import TextSection from "components/TextSection";
import ImageSection from "components/ImageSection";
import Charts from 'components/charts';
import ErrorBoundary from "components/ErrorBoundary";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <TextSection />
      <ImageSection />
      <ErrorBoundary>
        <Charts />
      </ErrorBoundary>
    </Box>
  );
};

export default Home;
