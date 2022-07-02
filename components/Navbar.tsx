import React from 'react';
import { Button, CloseIcon, HStack, Text } from 'native-base';

const Navbar = () => {
  return (
    <>
      <HStack
        bg='coolGray.800'
        px='5'
        py='3'
        justifyContent='space-between'
        alignItems='center'
        w='100%'
      >
        <HStack alignItems='center'>
          <Text color='white' fontSize='20' fontWeight='semibold'>
            Nativebase <Text fontWeight='bold'>Builder</Text>
          </Text>
        </HStack>
        <HStack space={5}>
          <Button colorScheme='coolGray'>Export Code</Button>
          <Button colorScheme='coolGray' leftIcon={<CloseIcon />}>
            Clear
          </Button>
        </HStack>
      </HStack>
    </>
  );
};

export { Navbar };
