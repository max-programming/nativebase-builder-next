import React, { ReactNode } from 'react';
import { Button, Checkbox, Input, Pressable, Slider } from 'native-base';

export const renderComponent = (
  draggableId: string,
  addComponent: (comp: ReactNode) => void
) => {
  switch (draggableId) {
    case 'Button':
      addComponent(<Button key='btn'>Hi</Button>);
      break;
    case 'Slider':
      addComponent(
        <Slider
          w='3/4'
          maxW='300'
          defaultValue={70}
          minValue={0}
          maxValue={100}
          accessibilityLabel='hello world'
          step={10}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      );
      break;
    case 'Input':
      addComponent(<Input placeholder='fndfoee' key='input' />);
      break;
  }
};
