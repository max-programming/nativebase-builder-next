import { LeftSidebar } from '@/components/LeftSidebar';
import { Navbar } from '@/components/Navbar';
import RightSidebar from '@/components/rightSidebar';
import { renderComponent } from '@/utils/renderComponent';
import { Box, Flex, Center, Heading, Button } from 'native-base';
import React, { ReactNode } from 'react';
import { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd';

const HomePage = () => {
  const [canvasComps, setCanvasComps] = useState<ReactNode>(<></>);
  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { destination, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === 'canvas') {
      renderComponent(draggableId, setCanvasComps);
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
                  {/* <Heading color='gray.500'>
                    Drag some component to start coding without code!
                  </Heading> */}
                  {canvasComps}
                </Center>
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
