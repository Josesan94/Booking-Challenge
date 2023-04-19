import { Box, Stack, Button, Heading } from '@chakra-ui/react';
import { Booking } from '../../App';
import BookingCard from './BookingCard';

export interface BookingListProps {
  bookings: Booking[];
}

const BookingList = ({ bookings }: BookingListProps) => {


const handleConfirmBooking = () => {
  console.log("booking data: ", bookings)
}

  return (
    <>
    <Heading mt={5} color='purple.500'>
      Bookings to be confirmed
    </Heading>
    <Box my="4">
      {bookings.map((booking, index) => (
        <BookingCard key={index} booking={booking} />
        ))}
    </Box>
    <Stack>
      {!bookings.length ? (
        ""
      ) : (
        <Button onClick={handleConfirmBooking}>
          Confirm Bookings
        </Button>
      )}
      </Stack>
    </>
  );
};

export default BookingList;