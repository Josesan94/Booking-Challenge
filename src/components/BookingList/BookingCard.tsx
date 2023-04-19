import { Avatar, Box, Flex, Text, Stack, Button } from "@chakra-ui/react";
import { Booking } from "../../App";


interface BookingCardProps {
    booking: Booking;
  }

const BookingCard: React.FC<BookingCardProps> = (props) => {

    const { booking } = props




    return (
      <>
      <Box p={4} boxShadow="lg" borderRadius="md" mb={4}>
        <Flex alignItems="center" mb={2}>
          <Avatar
            size="sm"
            name={`${booking.staff[0].firstName} ${booking.staff[0].lastName}`}
            mr={2}
          />
          <Text fontWeight="bold">
            {`${booking.staff[0].firstName} ${booking.staff[0].lastName}`}
          </Text>
        </Flex>
        <Flex alignItems="center" mb={2}>
          <Text mr={2} fontWeight="bold">
          </Text>
          <Text>{booking.date}</Text>
        </Flex>
        <Flex alignItems="center" mb={2}>
          <Text>{booking.startTime} - </Text>
        </Flex>
        <Flex alignItems="center">
          <Text>{booking.endTime}</Text>
        </Flex>
      </Box>
      
      </>
    );
  };
  
  export default BookingCard;