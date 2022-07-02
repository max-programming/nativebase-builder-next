import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { Button, Input } from 'native-base';

export const renderComponent = (
  draggableId: string,
  setCanvasComps: Dispatch<SetStateAction<ReactNode>>
) => {
  if (draggableId === 'Button') {
    setCanvasComps(prev => (
      <>
        {prev}
        <Button>Hi</Button>
      </>
    ));
  }
  if (draggableId === 'Input') {
    setCanvasComps(prev => (
      <>
        {prev}
        <Input placeholder='HELLo' />
      </>
    ));
  }
};
