import { Button, Flex, Heading, Link, Text, Tooltip } from 'native-base';
import React, { useState } from 'react';
import FlexPropertiesDropdown from './FlexPropertiesDropdownProps';
import Accordion from 'react-native-collapsible/Accordion';
import { SECTIONS } from '@/data/accordionSections';
import { FiEdit, FiCode, FiCopy } from 'react-icons/fi';
import { _renderContent, _renderHeader } from '@/helpers/accordion.helpers';
import { useGenerateFile } from '@/utils/useGenerateFile';
import { useComponentStore } from '@/store/useComponentsStore';

const RightSidebar = () => {
  const { copy, customCode } = useGenerateFile('CustomComponent');
  const [duplicateComponent] = useComponentStore(state => [
    state.duplicateComponent,
  ]);
  const [activeSections, setActiveSections] = useState([]);

  const _updateSections = (_activeSections: any) => {
    setActiveSections(_activeSections);
  };
  return (
    <Flex width={'100%'} bg='coolGray.700' h='100vh' direction='column'>
      <Heading bg='#50B4D0' color='#FFFFFF' fontSize={16} p={4} mb='2'>
        Document
      </Heading>
      <Flex
        justifyContent='space-between'
        direction='row'
        alignItems='center'
        mx={4}
        px={4}
        width='xs'
        marginTop={2}
      >
        <Tooltip label='Copy Component Code'>
          <Button
            leftIcon={<FiCode size={16} color='#FFFFFF' />}
            onPress={() => copy(customCode)}
          />
        </Tooltip>
        <Tooltip label='Duplicate'>
          <Button
            leftIcon={<FiCopy size={16} color='#FFFFFF' />}
            onPress={duplicateComponent}
          />
        </Tooltip>
      </Flex>
      <FlexPropertiesDropdown />
      <Accordion
        sectionContainerStyle={{ paddingVertical: 8 }}
        containerStyle={{ paddingVertical: 8 }}
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
      />
    </Flex>
  );
};
export default RightSidebar;
