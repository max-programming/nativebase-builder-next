import React from 'react';
import components from '@/utils/components.json';
import { Box, Flex, Heading, Input, SearchIcon, Text } from 'native-base';
import { ComponentList } from './ComponentList';

const LeftSidebar = () => {
  return (
    <Flex align='center' bg='coolGray.700' h='100vh' p='5'>
      <Box>
        <Input
          placeholder='Search component...'
          InputRightElement={<SearchIcon color='muted.200' mr='3' />}
          color='muted.200'
          size={5}
        />
      </Box>
      <Box>
        {Object.keys(components).map((category, idx) => (
          <Box key={idx} my='2'>
            <Heading color='white' mb='2'>
              {category}
            </Heading>
            <Box>
              {Object.values(components)[idx].map(component => (
                <ComponentList key={component} component={component} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export { LeftSidebar };
