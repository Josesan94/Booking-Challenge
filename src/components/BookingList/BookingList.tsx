import { Box, Stack, Button, Heading, Text } from '@chakra-ui/react';
import { Booking } from '../../models/models';
import BookingCard from './BookingCard';

export interface BookingListProps {
	bookings: Booking[];
}

const BookingList = ({ bookings }: BookingListProps) => {
	const handleConfirmBooking = () => {
		console.log('booking data: ', bookings);
	};

	return (
		<>
			{bookings.length === 0 ? (
				<Stack my={50} alignItems={'center'} justifyContent={'center'}>
					<Text size={'sm'} color='purple.500'>
						Sorry! You didn't make any booking. Please, go to homepage and make
						one.
					</Text>
				</Stack>
			) : (
				<>
					<Heading mt={5} color='purple.500'>
						Bookings to be confirmed
					</Heading>
					<Box my='4'>
						{bookings.map((booking, index) => (
							<BookingCard key={index} booking={booking} />
						))}
					</Box>
					<Stack>
						{bookings.length === 0 ? (
							''
						) : (
							<Button onClick={handleConfirmBooking}>Confirm Bookings</Button>
						)}
					</Stack>
				</>
			)}
		</>
	);
};

export default BookingList;
