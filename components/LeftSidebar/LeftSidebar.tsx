import React from 'react';
import components from '@/utils/components.json';
import {
  Box,
  Flex,
  Heading,
  Input,
  ScrollView,
  SearchIcon,
  Text,
} from 'native-base';
import { Draggable } from 'react-beautiful-dnd';

const LeftSidebar = () => {
  return (
    <Flex bg='coolGray.700' h='100vh' p='5' w={350} overflowY='scroll'>
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
                      <Box
                        w='full'
                        p='2'
                        bg='coolGray.700'
                        rounded='md'
                        zIndex='9'
                      >
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
