import {  Flex, Heading, Text } from "native-base";
import React, { useState } from "react";
import FlexPropertiesDropdown from "./FlexPropertiesDropdownProps";
import Accordion from 'react-native-collapsible/Accordion';
import { SECTIONS } from "@/data/accordionSections";
import { FiEdit, FiCode, FiCopy } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { _renderContent, _renderHeader } from "@/helpers/accordion.helpers";


const RightSidebar = () => {
    const [activeSections, setActiveSections] = useState([]);

    const _updateSections = (_activeSections: any) => {
        setActiveSections(_activeSections);
    };
    return <Flex width={"100%"} bg='coolGray.700' h='100vh' direction="column" >
        <Heading bg='#50B4D0' color="#FFFFFF" fontSize={16} p={4} mb="2">
            Flex
        </Heading>
        <Flex justifyContent="space-between" direction="row" alignItems="center" mx={4} px={4}
            /*@ts-ignore*/
            cursor='pointer'
            width={250} marginTop={2} >
             <FiCode size={16} color="#FFFFFF" />
            <FiEdit size={16} color="#FFFFFF" />
            <FiCopy size={16} color="#FFFFFF"/>
            {/* <Entypo name="code" size={16} color="#FFFFFF" /> */}
            {/* <Feather name="edit" size={16} color="#FFFFFF" /> */}
            {/* <Feather name="copy" size={16} color="#FFFFFF" /> */}
            <IoReload size={16} color="#FFFFFF"/>
            <AiFillDelete size={16} color="#FFFFFF"/>
            <BsBook size={16} color="#FFFFFF"/>
            {/* <Ionicons name="reload" size={16} color="#FFFFFF" /> */}
            {/* <SimpleLineIcons name="docs" size={16} color="#FFFFFF" /> */}
            {/* <MaterialIcons name="delete-outline" size={16} color="#FFFFFF" /> */}
        </Flex>
        <FlexPropertiesDropdown />
        <Accordion
            sections={SECTIONS}
            activeSections={activeSections}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={_updateSections}
        />
    </Flex>
}
export default RightSidebar;