import React, { useState } from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    HStack,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    LockIcon
  } from '@chakra-ui/icons';


  export const NavigationBar = () =>  {


    return (
      <Box zIndex="1000" boxShadow='dark-lg' marginBottom={0.5}>
        <Flex
          bg={useColorModeValue('default', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex flex={{ base: 1 }} justify={{ base: 'flex-start', md: 'start' }}>
            <HamburgerIcon/>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <HStack
            width={'80%'}
            flexDirection={'row'}
            justifyContent={'space-evenly'}
            alignItems={'center'}
            spacing={6}>
                <Text fontWeight={'bold'}>
                Make a Booking
                </Text>
            <div style={{display:'flex',alignItems:'center', justifyContent:'center',width:'40px', height:'40px', backgroundColor:'grey', borderRadius:'50%'}}>
              <Text color={'white'}>MS</Text>
            </div>
          </HStack>
        </Flex>
        <Collapse  animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }

  const DesktopNav = () => {

    return (
      <Stack direction={'row'} spacing={4} >

      </Stack>
    );
  };


  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
      </Stack>
    );
  };
  
  const MobileNavItem = () => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4}>
        <Flex
          py={2}
          as={Link}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
          </Text>
        </Flex>
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
          </Stack>
        </Collapse>
      </Stack>
    );
  };