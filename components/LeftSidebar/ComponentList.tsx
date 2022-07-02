import React from 'react';
import { Box, Text } from 'native-base';

export const ComponentList = ({ component }: { component: string }) => {
  return (
    <Box cursor='grab' w='full' p='2' my='2' bg='cyan.800' zIndex='9'>
      <Text color='white'>{component}</Text>
    </Box>
  );
};
