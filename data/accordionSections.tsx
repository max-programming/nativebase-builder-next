import BackgroundsContent from "@/components/rightSidebar/BackgroundsContent";
import BorderContent from "@/components/rightSidebar/BorderContent";
import ChildrenContent from "@/components/rightSidebar/ChildrenContent";
import CustomPropsContent from "@/components/rightSidebar/CustomPropsContent";
import EffectContent from "@/components/rightSidebar/EffectContent";
import LayoutContent from "@/components/rightSidebar/LayoutContent";
import ParentContent from "@/components/rightSidebar/ParentContent";
import SizeContent from "@/components/rightSidebar/SizeContent";
import SpacingContent from "@/components/rightSidebar/SpacingContent";
import TypographyContent from "@/components/rightSidebar/TypographyContent";
import { Text } from "native-base";
import React from 'react';

export const SECTIONS = [
    {
        title: <Text fontSize={16}>Custom props</Text>,
        content: <CustomPropsContent />,
    },
    {
        title: <Text marginY={4} fontSize={16}>Parent</Text>,
        content: <ParentContent />,
    },
    {
        title: <Text marginY={4} fontSize={16}>Children</Text>,
        content: <ChildrenContent />,
    },
    {
        title: <Text marginY={4} fontSize={16}>Layout</Text>,
        content: <LayoutContent />,
    },
    {
        title: <Text marginY={4} fontSize={16}>Spacing</Text>,
        content: <SpacingContent />,
    },
    {
        title: <Text marginY={4} fontSize={16}>Size</Text>,
        content: <SizeContent />,
    },
    {
        title: <Text marginY={4} fontSize={16}>Typoghraphy</Text>,
        content: <TypographyContent />,
    },
    {
        title: <Text marginY={4} fontSize={16}>Backgrounds</Text>,
        content: <BackgroundsContent />,
    },
    {
        title: <Text marginY={4} fontSize={16}>Border</Text>,
        content: <BorderContent />,
    },
    {
        title: <Text marginY={4} fontSize={16}>Effect</Text>,
        content: <EffectContent />,
    },
];
