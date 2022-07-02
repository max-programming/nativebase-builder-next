import { Flex, Input, Text } from 'native-base'
import React from 'react'

export default function EffectContent() {
    return (
        <Flex direction='row' wrap="wrap">
            <Flex direction='row' p={4}>
                <Text> Opacity </Text>
                <Input width={20} />
            </Flex>
            <Flex direction='row' p={4}>
                <Text> Box shadow </Text>
                <Input width={20} />
            </Flex>
        </Flex>
    )
}
