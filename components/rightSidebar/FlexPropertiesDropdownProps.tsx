import React from "react";
import { CheckIcon, Flex, Select, Text } from "native-base";

const FlexPropertiesDropdown = ({ color }: { color?: string }) => {
    const [direction, setDirection] = React.useState("column");
    const [justifyContent, setJustifyContent] = React.useState("center");
    const [alignItems, setAlignItems] = React.useState("center");
    return <Flex justifyContent="space" px={4} my={4} alignItems="space-between" color="#FFFFFF">
        <Flex direction="row" justifyContent="space-between" alignItems="center" marginTop={2} >
            <Text color={color ? color : "#FFFFFF"} width={"30%"}>Direction</Text>
            <Select color={color ? color : "#FFFFFF"} selectedValue={direction} minWidth="100" accessibilityLabel="Choose Direction" _selectedItem={{
                endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setDirection(itemValue)}>
                <Select.Item label="row" value="row" />
                <Select.Item label="row-reverse" value="row-reverse" />
                <Select.Item label="column" value="column" />
                <Select.Item label="column-reverse" value="column-reverse" />
            </Select>
        </Flex>
        <Flex direction="row" justifyContent="space-between" alignItems="center" marginTop={2} >
            <Text color={color ? color : "#FFFFFF"} width={"30%"} >Justify Content</Text>
            <Select color={color ? color : "#FFFFFF"} selectedValue={justifyContent} minWidth="100" accessibilityLabel="Choose Justify Content" _selectedItem={{
                endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setJustifyContent(itemValue)}>
                <Select.Item label="center" value="center" />
                <Select.Item label="flex-start" value="flex-start" />
                <Select.Item label="flex-end" value="flex-end" />
                <Select.Item label="space-around" value="space-around" />
                <Select.Item label="space-between" value="space-between" />
            </Select>
        </Flex>
        <Flex direction="row" justifyContent="space-between" alignItems="center" marginTop={2} >
            <Text color={color ? color : "#FFFFFF"} width={"30%"}>Align Items</Text>
            <Select color={color ? color : "#FFFFFF"} selectedValue={alignItems} minWidth="100" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setAlignItems(itemValue)}>
                <Select.Item label="stretch" value="stretch" />
                <Select.Item label="center" value="center" />
                <Select.Item label="flex-start" value="flex-start" />
                <Select.Item label="flex-end" value="flex-end" />
                <Select.Item label="space-around" value="space-around" />
                <Select.Item label="space-between" value="space-between" />

            </Select>
        </Flex>
    </Flex>
}

export default FlexPropertiesDropdown;