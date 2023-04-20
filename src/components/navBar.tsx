import {
	Box,
	Flex,
	Text,
	Stack,
	Collapse,
	useColorModeValue,
	HStack,
} from '@chakra-ui/react';
import { HamburgerIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { Link, useLocation  } from 'react-router-dom';



export const NavigationBar = () => {

	const location = useLocation();


	let pageTitle = '';
	switch (location.pathname) {
	  case '/':
		pageTitle = 'Make a Booking';
		break;
	  case '/bookings':
		pageTitle = 'Accept Booking';
		break;
	  default:
		pageTitle = 'Make a Booking';
	}
	return (
		<Box zIndex='1000' boxShadow='dark-lg' marginBottom={0.5}>
			<Flex
				bg={useColorModeValue('default', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}
			>
				<Flex flex={{ base: 1 }} justify={{ base: 'flex-start', md: 'start' }}>
					{pageTitle === 'Make a Booking' ? (
						<HamburgerIcon />
					) : (
						<Link to='/'>
							<ArrowBackIcon />
						</Link>
					)}
				</Flex>
				<HStack
					width={'80%'}
					flexDirection={'row'}
					justifyContent={'space-evenly'}
					alignItems={'center'}
					spacing={6}
				>
					<Text fontWeight={'bold'}>{pageTitle}</Text>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '40px',
							height: '40px',
							backgroundColor: 'grey',
							borderRadius: '50%',
						}}
					>
						<Text color={'white'}>MS</Text>
					</div>
				</HStack>
			</Flex>
			<Collapse animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
};

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue('white', 'gray.800')}
			p={4}
			display={{ md: 'none' }}
		></Stack>
	);
};
