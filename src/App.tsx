import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavigationBar } from './components/navBar';
import Home from './pages/Homepage';
import BookingList from './pages/BookingListPage';
import { Container } from '@chakra-ui/react';
import { Booking } from './models/models';

function App() {
	const [bookings, setBookings] = useState<Booking[]>([]);

	return (
		<>
			<NavigationBar />
			<Container maxW='container.lg'>
				<Routes>
					<Route path='/' element={<Home setBookings={setBookings} />} />
					<Route
						path='/bookings'
						element={<BookingList bookings={bookings} />}
					/>
				</Routes>
			</Container>
		</>
	);
}

export default App;
