import { CheckIcon, Flex, Select, Text } from 'native-base'
import React, { useState } from 'react'
import FlexPropertiesDropdown from './FlexPropertiesDropdownProps'

export default function LayoutContent() {
    const [display, setDisplay] = useState("flex")
    return (
        <Flex justifyContent="space" alignItems="space-between" color="black">
            <Flex direction="row" justifyContent="space-between" px={4} alignItems="center" mt={2}>
                <Text color={"black"} >Display</Text>
                <Select color={"black"} selectedValue={display} minWidth="100" accessibilityLabel="Choose Direction" _selectedItem={{
                    endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setDisplay(itemValue)}>
                    <Select.Item label="flex" value="flex" />
                    <Select.Item label="block" value="block" />
                    <Select.Item label="inline-block" value="inline-block" />
                    <Select.Item label="inline" value="inline" />
                </Select>
            </Flex>
            {display === "flex" && <FlexPropertiesDropdown color={"black"} />}
        </Flex>
    )
}
