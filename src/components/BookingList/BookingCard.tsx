import { Avatar, Box, Flex, Text, Stack } from '@chakra-ui/react';
import { Booking } from '../../models/models';
import { ChevronRightIcon } from '@chakra-ui/icons';

interface BookingCardProps {
	booking: Booking;
}

const BookingCard: React.FC<BookingCardProps> = (props) => {
	const { booking } = props;

	return (
		<>
			<Box p={4} border={'1px solid grey'}>
				<Stack flexDirection={'row'} justifyContent={'space-between'}>
					<Stack>
						<Flex alignItems='center' flexDirection={'row'}>
							<Avatar
								size='md'
								name={`${booking.staff[0].firstName} ${booking.staff[0].lastName}`}
								mr={2}
							/>
							<Text fontWeight='bold'>{booking.date}</Text>
							<Stack ml={40} flexDirection={'row'} alignItems={'center'}>
								<Text>
									{booking.startTime} - {booking.endTime}{' '}
								</Text>
							</Stack>
						</Flex>
						<Flex alignItems='center' px={55}>
							{booking.staff[0].isAvailable ? (
								<Text color='green.300' fontWeight={'bold'}>
									{`${booking.staff[0].firstName} ${booking.staff[0].lastName}`}{' '}
									is available
								</Text>
							) : (
								<Text color='orange.300' fontWeight={'bold'}>
									Suitable staff member will be assigned
								</Text>
							)}
						</Flex>
					</Stack>
					<Stack alignItems={'end'} justifyContent={'center'} gap={5}>
						<ChevronRightIcon boxSize={7} color='purple.500' />
					</Stack>
				</Stack>
			</Box>
		</>
	);
};

export default BookingCard;
