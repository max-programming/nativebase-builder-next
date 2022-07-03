import { useComponentStore } from '@/store/useComponentsStore';
import { Button, CheckIcon, Flex, Input, Select, Text } from 'native-base'
import React from 'react'

export default function BackgroundsContent() {
    const [overlay, setOverlay] = React.useState("visible")
    const {updateStyles,globalStyles, editComponents,components} = useComponentStore();
    return (
        <Flex direction='row' wrap="wrap">

            <Flex direction='row' p={2}>
                <Text> Colour </Text>
                <Input width={20} onChangeText={(e) => {
         updateStyles({ bg: e })
         if(!!e) editComponents(0, <Button {...globalStyles} bg={e} >Button</Button>)
 
        }} />
            </Flex>

            <Flex direction="row" justifyContent="space-between" px={2} alignItems="center" my={2}>
                <Text color={"black"} >Gradient : </Text>
                <Select color={"black"} selectedValue={overlay} minWidth="100" accessibilityLabel="Choose Gradient" _selectedItem={{
                    endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setOverlay(itemValue)}>
                    <Select.Item label="to top" value="to top" />
                    <Select.Item label="to top right" value="to top right" />
                    <Select.Item label="to top left" value="to top left" />
                    <Select.Item label="to bottom right" value="to bottom right" />
                    <Select.Item label="to bottom" value="to bottom" />
                    <Select.Item label="to bottom left" value="to bottom left" />
                    <Select.Item label="to right" value="to right" />
                    <Select.Item label="to left" value="to left" />
                </Select>
                <Input width={20} />
            </Flex>
        </Flex>






    )
}
