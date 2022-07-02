import { LeftSidebar } from '@/components/LeftSidebar';
import { Navbar } from '@/components/Navbar';
import RightSidebar from '@/components/rightSidebar';
import { Box, Flex, Center, Heading } from 'native-base';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Flex direction='row'>
        <Box flex={1}>
          <LeftSidebar />
        </Box>
        <Box flex={2}>
          <Center mt='10' zIndex='10'>
            <Heading color='gray.500'>
              Drag some component to start coding without code!
            </Heading>
          </Center>
        </Box>
        <Box flex={1}>
          <RightSidebar />
        </Box>
      </Flex>
    </>
  );
};

export default HomePage;
