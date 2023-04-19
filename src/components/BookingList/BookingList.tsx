import { Box, Stack, Button } from '@chakra-ui/react';
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
    <Box mt="4">
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