import { useComponentStore } from '@/store/useComponentsStore';
import { Button, Flex, Input, Text } from 'native-base';
import React, { useEffect } from 'react';
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from 'react-icons/ai';

export default function SpacingContent() {
  const {updateStyles,globalStyles, editComponents,components} = useComponentStore();
  const componentsCopy = [...components] 

  return (
    <Flex p={2} justifyContent='space-between'>
      <Text>Margin</Text>
      <Input placeholder='All' type='number' onChangeText={(e) => {
         updateStyles({ m: e })

          editComponents(0, <Button m={e} >Button</Button>)
 
        }} />
    
    </Flex>
  );
}
