import React from 'react';
import components from '@/utils/components.json';
import { Box, Flex, Heading, Input, SearchIcon, Text } from 'native-base';
import { Draggable } from 'react-beautiful-dnd';

const LeftSidebar = () => {
  return (
    <Flex align='center' bg='coolGray.700' h='100vh' p='5' w={350}>
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
              {Object.values(components)[idx].map((component, index) => (
                <Draggable
                  key={component}
                  draggableId={component}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Box w='full' p='2' my='2' bg='cyan.800' zIndex='9'>
                        <Text color='white'>{component}</Text>
                      </Box>
                    </div>
                  )}
                </Draggable>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export { LeftSidebar };
