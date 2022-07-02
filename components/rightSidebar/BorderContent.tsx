import { CheckIcon, Flex, Input, Select, Text } from 'native-base'
import React from 'react'

export default function BorderContent() {
    return (
        <Flex direction='row' wrap="wrap">
            <Flex direction='row' p={4}>
                <Text> Border </Text>
                <Input width={20} />
            </Flex>
            <Flex direction='row' p={4}>
                <Text> Border radius </Text>
                <Input width={20} />
            </Flex>
        </Flex>
    )
}
