import { CheckIcon, Flex, Input, Select, Text } from 'native-base'
import { BiAlignLeft, BiAlignMiddle, BiAlignRight, BiAlignJustify } from 'react-icons/bi';
import React from 'react'

export default function TypographyContent() {
    return (
        <Flex direction='row' wrap='wrap' justifyContent="space-around">
                <Flex direction='row' p={2} >
                    <Text> Style </Text>
                    <button>B</button> 
                    <button>I</button>
                </Flex>
                <Flex direction='row' p={2} >
                    <Text> Text Align </Text>
                    <button><BiAlignLeft/></button> 
                    <button><BiAlignMiddle/></button>
                    <button><BiAlignRight/></button>
                    <button><BiAlignJustify/></button>
                </Flex>
                <Flex direction='row' p={2}>
                    <Text> Font Size </Text>
                    <Input width={20} />
                </Flex>
                <Flex direction='row' p={2}>
                    <Text> Colour </Text>
                    <Input width={20} />
                </Flex>
                <Flex direction='row' p={2}>
                    <Text> Line height </Text>
                    <Input width={20} />
                </Flex>
                <Flex direction='row' p={2}>
                    <Text> Letter Spacing </Text>
                    <Input width={20} />
                </Flex>
        </Flex>
    )
}
