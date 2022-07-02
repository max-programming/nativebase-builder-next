import { Box, Flex, Text } from "native-base";
import { IoIosArrowDown } from "react-icons/io";
import React from 'react';

export const _renderHeader = (section: any) => {
    return (
        <Flex direction="row" justifyContent={"space-between"} px={4} bg='coolGray.700' color=" #ffffff">
            <Text color="#FFFFFF" >{section.title}</Text>
            <IoIosArrowDown size={12} color="#FFFFFF" />
        </Flex>
    );
};

export const _renderContent = (section: any) => {
    return (
        <Box bg="#F5F5F5" color={"#FFFFFF"}>
            {section.content}
        </Box>
    );
};
