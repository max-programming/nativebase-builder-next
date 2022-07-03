import { useComponentStore } from '@/store/useComponentsStore';
import { Button, Flex, Input, Text } from 'native-base';
import React, { useEffect } from 'react';

export default function SpacingContent() {
  const {updateStyles,globalStyles, editComponents,components} = useComponentStore();

  return (
    <Flex p={2} justifyContent='space-between'>
      <Text>Margin</Text>
      <Input placeholder='All' type='number' onChangeText={(e) => {
         updateStyles({ m: e })
          editComponents(0, <Button {...globalStyles} m={e} >Button</Button>)
        }} />
      <Text> Padding </Text>
      <Input placeholder='All' type='number' onChangeText={(e) => {
         updateStyles({ p: e })
          editComponents(0, <Button {...globalStyles} p={e} >Button</Button>)
        }} />
    
    </Flex>
  );
}
