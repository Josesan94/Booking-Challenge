import { Booking } from '../models/models';
import BookingForm from '../components/BookingForm';

interface Props {
  setBookings: React.Dispatch<React.SetStateAction<Booking[]>>
}

const Home: React.FC<Props> = (props) => {
	const { setBookings } = props;

	return (
		<>
			<BookingForm setBookings={setBookings}/>
		</>
	);
};

export default Home;
