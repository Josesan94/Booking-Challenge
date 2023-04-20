import { Booking } from '../models/models';
import BookingList from '../components/BookingList/BookingList';

export interface BookingListProps {
	bookings: Booking[];
}

const BookingListPage = ({ bookings }: BookingListProps) => {
	return (
		<>
			<BookingList bookings={bookings} />
		</>
	);
};

export default BookingListPage;
