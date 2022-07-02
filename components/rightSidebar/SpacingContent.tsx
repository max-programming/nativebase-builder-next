import { Flex, Input, Text } from 'native-base'
import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp } from 'react-icons/ai'


export default function SpacingContent() {
    return (
        <Flex p={2} justifyContent="space-between">
            <Text>Margin</Text>
            <Input placeholder='All' />
            <Flex flexDirection={"row"} p={2} justifyContent="space-between">
                <Input placeholder={`${<AiOutlineArrowLeft size={12} color="black" />} left`} />
                <Input placeholder={`${<AiOutlineArrowRight size={12} color="black" />} right`} />
            </Flex>
            <Flex flexDirection={"row"} p={2} justifyContent="space-between">
                <Input placeholder={`${<AiOutlineArrowUp size={12} color="black" />} top`} />
                <Input placeholder={`${<AiOutlineArrowDown size={12} color="black" />} bottom`} />
            </Flex>
        </Flex>
    )
}
