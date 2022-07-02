import { Flex, Input, Text } from 'native-base';
import React from 'react';
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from 'react-icons/ai';

export default function SpacingContent() {
  return (
    <Flex p={2} justifyContent='space-between'>
      <Text>Margin</Text>
      <Input placeholder='All' type='number' />
      <Flex flexDirection={'row'} p={2} justifyContent='space-between'>
        <Input
          InputLeftElement={
            <AiOutlineArrowLeft
              style={{ marginLeft: 10 }}
              size={12}
              color='black'
            />
          }
          placeholder={`left`}
        />
        <Input
          InputLeftElement={
            <AiOutlineArrowRight
              style={{ marginLeft: 10 }}
              size={12}
              color='black'
            />
          }
          placeholder={`right`}
        />
      </Flex>
      <Flex flexDirection={'row'} p={2} justifyContent='space-between'>
        <Input
          InputLeftElement={
            <AiOutlineArrowUp
              style={{ marginLeft: 10 }}
              size={12}
              color='black'
            />
          }
          placeholder={`top`}
        />
        <Input
          InputLeftElement={
            <AiOutlineArrowDown
              style={{ marginLeft: 10 }}
              size={12}
              color='black'
            />
          }
          placeholder={`bottom`}
        />
      </Flex>
    </Flex>
  );
}
