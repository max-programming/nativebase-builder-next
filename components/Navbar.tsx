import React from 'react';
import { Button, CloseIcon, Flex, HStack, Image, Text } from 'native-base';
import { saveAs } from 'file-saver';
import { useGenerateFile } from '@/utils/useGenerateFile';

const Navbar = () => {
  const { customCode, clearComponents } = useGenerateFile('CustomComponent');

  const handleExportCode = () => {
    const blob = new Blob([customCode], { type: 'text/typescriptreact' });
    saveAs(blob, 'CustomCode.tsx');
  };

  return (
    <>
      <HStack
        bg='coolGray.800'
        px='5'
        py='3'
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        h='10vh'
      >
        <HStack alignItems='center'>
          <Flex direction='row' justifyContent={'center'} align={'center'}>
            <Image
              width='55px'
              height='61px'
              marginTop={1}
              src='https://www.notion.so/image/https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2388a952-7adb-40d8-9eaa-efdfbe8124be%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20220628%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20220628T044127Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3D3eb578d58249796325eeaafd70547bc4f83f7ab849af01a559828f970e845033%26X-Amz-SignedHeaders%3Dhost%26x-id%3DGetObject?table=block&id=14a89eac-412c-4ea4-8dcb-c8bd2d7ff1f7&cache=v2'
            />
            <Text
              marginLeft={2}
              color='white'
              fontSize='20'
              fontWeight='semibold'
            >
              Nativebase <Text fontWeight='bold'>Builder</Text>
            </Text>
          </Flex>
        </HStack>
        <HStack space={5}>
          <Button colorScheme='coolGray' onPress={handleExportCode}>
            Export Code
          </Button>
          <Button
            colorScheme='coolGray'
            leftIcon={<CloseIcon />}
            onPress={clearComponents}
          >
            Clear
          </Button>
        </HStack>
      </HStack>
    </>
  );
};

export { Navbar };
