import React, { ReactNode } from 'react';
import {
  Button,
  Checkbox,
  CheckIcon,
  IconButton,
  Input,
  Link,
  Pressable,
  Radio,
  SearchIcon,
  Select,
  Slider,
  Switch,
  TextArea,
} from 'native-base';

export const renderComponent = (
  draggableId: string,
  addComponent: (comp: ReactNode) => void,
  addImport: (imp: string) => void
) => {
  addImport(draggableId);
  switch (draggableId) {
    case 'Button':
      addComponent(<Button>Hi</Button>);
      break;
    case 'Checkbox':
      addComponent(
        <Checkbox value='' key='checkbox'>
          Checkbox
        </Checkbox>
      );
      break;
    case 'IconButton':
      addComponent(<IconButton as={<SearchIcon />} key='iconbtn' />);
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
    case 'Switch':
      addComponent(<Switch size='md' />);
      break;
    case 'TextArea':
      addComponent(
        <TextArea
          autoCompleteType={false}
          h={20}
          placeholder='Text Area Placeholder'
          w='75%'
          maxW='300'
        />
      );
      break;
    case 'Link':
      addComponent(
        <Link href='https://nativebase.io' key='link'>
          Nativebase
        </Link>
      );
      break;
    case 'Radio':
      addComponent(
        <Radio value='radio' my={1}>
          Radio
        </Radio>
      );
      break;
    case 'Select':
      addComponent(
        <Select
          selectedValue={''}
          minWidth='200'
          accessibilityLabel='Choose'
          placeholder='Choose'
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size='5' />,
          }}
          mt={1}
        >
          <Select.Item label='Label one' value='one' />
          <Select.Item label='Label two' value='two' />
        </Select>
      );
      break;
  }
};
