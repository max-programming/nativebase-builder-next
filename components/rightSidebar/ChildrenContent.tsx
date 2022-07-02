import { Flex, Text } from 'native-base'
import React from 'react'
import { FiSettings } from 'react-icons/fi'

export default function ChildrenContent() {
    return (
        <Flex direction='row' justifyContent={"space-between"} my={2} px={4}>
            <Text>
                ChildrenContent
            </Text>
            <FiSettings size={18} color="black"/>
        </Flex>
    )
}
