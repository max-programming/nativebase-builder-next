import { CheckIcon, Flex, Input, Select, Text } from 'native-base'
import React from 'react'

export default function SizeContent() {
    const [overlay, setOverlay] = React.useState("visible")
    return (
        <Flex direction='row' wrap="wrap">
            <Flex direction='row' p={4}>
                <Text> Width </Text>
                <Input width={20} />
            </Flex>
            <Flex direction='row' p={4}>
                <Text> Height </Text>
                <Input width={20} />
            </Flex>
            <Flex direction='row' p={4}>
                <Text> min W </Text>
                <Input width={20} />
            </Flex>
            <Flex direction='row' p={4}>
                <Text> min H </Text>
                <Input width={20} />
            </Flex>
            <Flex direction="row" justifyContent="space-between" px={2} alignItems="center" my={2}>
                <Text color={"black"} >Overlay : </Text>
                <Select color={"black"} selectedValue={overlay} minWidth="100" accessibilityLabel="Choose Overlay" _selectedItem={{
                    endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setOverlay(itemValue)}>
                    <Select.Item label="visible" value="visible" />
                    <Select.Item label="hidden" value="hidden" />
                    <Select.Item label="scroll" value="scroll" />
                </Select>
            </Flex>
        </Flex>
    )
}
