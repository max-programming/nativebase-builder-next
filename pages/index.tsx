import { LeftSidebar } from '@/components/LeftSidebar';
import { Navbar } from '@/components/Navbar';
import RightSidebar from '@/components/rightSidebar';
import { useComponentStore } from '@/store/useComponentsStore';
import { renderComponent } from '@/utils/renderComponent';
import { Box, Flex, Center, Button, Input, Heading } from 'native-base';
import React from 'react';
import {
  DragDropContext,
  Droppable,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd';
import { ImageBackground } from 'react-native';

const HomePage = () => {
  const { components, addComponent, addImport, globalStyles } =
    useComponentStore();

  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { destination, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === 'canvas') {
      renderComponent(draggableId, addComponent, addImport, globalStyles);
    }
  };

  return (
    <>
      <Navbar />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Flex direction='row'>
          <Droppable droppableId='comp-list' type='COMPONENT'>
            {(provided, snapshot) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                flex={1}
              >
                <LeftSidebar />
              </Box>
            )}
          </Droppable>
          <Droppable droppableId='canvas' type='COMPONENT'>
            {(provided, snapshot) => (
              <Box
                flex={2}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <ImageBackground
                  source={{
                    uri: 'https://i.pinimg.com/originals/af/cc/7d/afcc7dd829be97c8e5eeb76ec40a86ff.png',
                  }}
                  resizeMode='cover'
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}
                >
                  <Center
                    justifyContent='flex-start'
                    mt='32'
                    zIndex='10'
                    h='full'
                    mr='3'
                  >
                    {!components.length && (
                      <Heading
                        fontSize={'20'}
                        color='gray.500'
                        textAlign={'center'}
                        maxW='xs'
                      >
                        Drag components to start building your product without
                        code!
                      </Heading>
                    )}
                    {components.map((Comp, idx) => (
                      <Box key={idx}>{Comp}</Box>
                    ))}
                  </Center>
                </ImageBackground>
              </Box>
            )}
          </Droppable>
          <Box flex={1}>
            <RightSidebar />
          </Box>
        </Flex>
      </DragDropContext>
    </>
  );
};

export default HomePage;
