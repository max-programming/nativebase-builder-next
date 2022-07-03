import React, { ReactNode } from 'react';
import { IoReload } from 'react-icons/io5';
import {
  Badge,
  Button,
  Checkbox,
  CheckIcon,
  Divider,
  IconButton,
  Input,
  Link,
  Pressable,
  Progress,
  Radio,
  SearchIcon,
  Select,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  TextArea,
  useToast,
  Text,
  Heading,
  AlertDialog,
  Menu,
  HamburgerIcon,
  Modal,
  ScrollView,
  Center,
  VStack,
  Popover,
  Tooltip,
  Actionsheet,
  Box,
  Avatar,
  HStack,
  Image,
  useTheme,
  Alert,
  CloseIcon,
  View,
  KeyboardAvoidingView,
  FlatList,
  Spacer,
  SectionList,
  Fab,
  Icon,
  Hidden,
} from 'native-base';

export const renderComponent = (
  draggableId: string,
  addComponent: (comp: ReactNode) => void,
  addImport: (imp: string) => void,
  globalStyles: any
) => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Aafreen Khan',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Sujitha Mathur',
      timeStamp: '11:11 PM',
      recentText: 'Cheer up, there!',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Anci Barroco',
      timeStamp: '6:22 PM',
      recentText: 'Good Day!',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Aniket Kumar',
      timeStamp: '8:56 PM',
      recentText: 'All the best',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
  ];
  const sectionListData = [
    {
      title: 'Cyan',
      data: ['cyan.100', 'cyan.200', 'cyan.300', 'cyan.400', 'cyan.500'],
    },
  ];
  console.log(globalStyles);
  addImport(draggableId);
  switch (draggableId) {
    case 'Button':
      addComponent(<Button {...globalStyles}>Button</Button>);
      break;
    case 'Checkbox':
      addComponent(<Checkbox value=''>Checkbox</Checkbox>);
      break;
    case 'IconButton':
      addComponent(<IconButton as={<SearchIcon />} />);
      break;
    case 'Hidden':
      addComponent(
        <Hidden>
          <Box bg='red.400' p='2'>
            <Text>This text will be always hidden.</Text>
          </Box>
        </Hidden>
      );
      break;
    case 'Fab':
      addComponent(
        <Box
          height='200'
          w='250'
          shadow='2'
          rounded='lg'
          _dark={{
            bg: 'coolGray.200:alpha.20',
          }}
          _light={{
            bg: 'coolGray.200:alpha.20',
          }}
        >
          <Fab
            renderInPortal={false}
            shadow={2}
            size='sm'
            icon={<IoReload color='white' name='plus' size='20' />}
          />
        </Box>
      );
      break;
    case 'Slider':
      addComponent(
        <Slider
          w='3/4'
          maxW='300'
          defaultValue={70}
          minValue={0}
          maxValue={100}
          accessibilityLabel='hello world'
          step={10}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      );
      break;
    case 'Input':
      addComponent(<Input placeholder='Sample Input' key='input' />);
      break;
    case 'Switch':
      addComponent(<Switch size='md' />);
      break;
    case 'TextArea':
      addComponent(
        <TextArea
          autoCompleteType={false}
          h={20}
          placeholder='Text Area Placeholder'
          w='75%'
          maxW='300'
        />
      );
      break;
    case 'Link':
      addComponent(<Link href='https://nativebase.io'>Nativebase</Link>);
      break;
    case 'Radio':
      addComponent(
        <Radio.Group
          name='myRadioGroup'
          accessibilityLabel='favorite number'
          value={'one'}
        >
          <Radio value='one' my={1}>
            One
          </Radio>
          <Radio value='two' my={1}>
            Two
          </Radio>
        </Radio.Group>
      );
      break;
    case 'Badge':
      addComponent(<Badge>NEW ARRIVAL</Badge>);
    case 'Alert':
      addComponent(
        <Alert w='90%' maxW='400' status='info' colorScheme='info'>
          <VStack space={2} flexShrink={1} w='100%'>
            <HStack
              flexShrink={1}
              space={2}
              alignItems='center'
              justifyContent='space-between'
            >
              <HStack flexShrink={1} space={2} alignItems='center'>
                <Alert.Icon />
                <Text fontSize='md' fontWeight='medium' color='coolGray.800'>
                  We are going live in July!
                </Text>
              </HStack>
              <IconButton
                variant='unstyled'
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size='3' color='coolGray.600' />}
              />
            </HStack>
            <Box
              pl='6'
              _text={{
                color: 'coolGray.600',
              }}
            >
              We are happy to announce that we are going live on July 28th. Get
              ready!
            </Box>
          </VStack>
        </Alert>
      );
    case 'Divider':
      addComponent(<Divider my='2' />);
      break;
    case 'Progress':
      addComponent(
        <Box w='90%' maxW='400'>
          <Progress value={45} mx='4' />
        </Box>
      );
      break;
    case 'Spinner':
      addComponent(<Spinner accessibilityLabel='Loading posts' />);
      break;
    case 'Text':
      addComponent(<Text fontSize='md'>Text</Text>);
      break;
    case 'Heading':
      addComponent(<Heading>I&apos;m a Heading</Heading>);
      break;
    case 'SectionList':
      addComponent(
        <SectionList
          maxW='300'
          w='100%'
          mb='4'
          sections={sectionListData}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Center py='4' bg={item}>
              {item.split('.')[1]}
            </Center>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Center>
              <Heading fontSize='xl' mt='8' pb='4'>
                {title}
              </Heading>
            </Center>
          )}
        />
      );
      break;
    case 'FlatList':
      addComponent(
        <Box>
          <Heading fontSize='xl' p='4' pb='3'>
            Inbox
          </Heading>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Box
                borderBottomWidth='1'
                _dark={{
                  borderColor: 'gray.600',
                }}
                borderColor='coolGray.200'
                pl='4'
                pr='5'
                py='2'
              >
                <HStack space={3} justifyContent='space-between'>
                  <Avatar
                    size='48px'
                    source={{
                      uri: item.avatarUrl,
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color='coolGray.800'
                      bold
                    >
                      {item.fullName}
                    </Text>
                    <Text
                      color='coolGray.600'
                      _dark={{
                        color: 'warmGray.200',
                      }}
                    >
                      {item.recentText}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text
                    fontSize='xs'
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color='coolGray.800'
                    alignSelf='flex-start'
                  >
                    {item.timeStamp}
                  </Text>
                </HStack>
              </Box>
            )}
            keyExtractor={item => item.id}
          />
        </Box>
      );
      break;
    case 'View':
      addComponent(
        <View>
          <Heading>
            A component library for the{' '}
            <Heading color='emerald.400'>React Ecosystem</Heading>
          </Heading>
          <Text pt='3' fontWeight='md'>
            NativeBase is a simple, modular and accessible component library
            that gives you building blocks to build you React applications.
          </Text>
        </View>
      );
      break;
    case 'Image':
      addComponent(
        <Image
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
          alt='Alternate Text'
          size='xl'
        />
      );
      break;
    case 'Icon':
      addComponent(
        <HStack space={2}>
          <CheckIcon size='5' mt='0.5' color='emerald.500' />
          <Text color='emerald.500' fontSize='md'>
            Order Placed Successfully
          </Text>
        </HStack>
      );
      break;
    case 'Avatar':
      addComponent(
        <Avatar
          bg='indigo.500'
          source={{
            uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        >
          JB
        </Avatar>
      );
      break;
    case 'Tooltip':
      addComponent(
        <Tooltip label='Click here to read more' openDelay={500}>
          <Button>Tooltip</Button>
        </Tooltip>
      );
      break;
    case 'Menu':
      addComponent(
        <Menu
          w='190'
          trigger={triggerProps => {
            return (
              <Pressable
                accessibilityLabel='More options menu'
                {...triggerProps}
              >
                <HamburgerIcon />
              </Pressable>
            );
          }}
        >
          <Menu.Item>Sample Item</Menu.Item>
          <Menu.Item>Sample Item</Menu.Item>
        </Menu>
      );
      break;
    case 'Skeleton':
      addComponent(
        <>
          <Skeleton h='40' />
          <Skeleton.Text px='4' />
          <Skeleton px='4' my='4' rounded='md' startColor='primary.100' />
        </>
      );
      break;
    case 'Select':
      addComponent(
        <Select
          selectedValue={''}
          minWidth='200'
          accessibilityLabel='Choose'
          placeholder='Choose'
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size='5' />,
          }}
          mt={1}
        >
          <Select.Item label='Label one' value='one' />
          <Select.Item label='Label two' value='two' />
        </Select>
      );
      break;
  }
};
