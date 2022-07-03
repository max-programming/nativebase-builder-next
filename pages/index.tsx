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

const HomePage = () => {
  const { components, addComponent, addImport } = useComponentStore();

  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { destination, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === 'canvas') {
      renderComponent(draggableId, addComponent, addImport);
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
                <Center mt='10' zIndex='10'>
                  {!components.length && (
                    <Heading
                      fontSize={'30'}
                      color='gray.500'
                      textAlign={'center'}
                    >
                      Drag components to start building your product without
                      code!
                    </Heading>
                  )}
                  {components.map(Comp => Comp)}
                </Center>
              </Box>
            )}
          </Droppable>
          <Box flex={1}>
            <RightSidebar canvasComps={components} />
          </Box>
        </Flex>
      </DragDropContext>
    </>
  );
};

export default HomePage;
