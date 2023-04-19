import { useEffect, useState} from 'react'
import { Route, Routes, Navigate  } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import {NavigationBar} from './components/navBar';
import Home from './components/Home';
import BookingList from './components/BookingList/BookingList';
import { Container } from '@chakra-ui/react';



export interface Booking {
  grade: string;
  date: any;
  startTime: string;
  endTime: string;
  staff: Staff[];
}

export interface Staff {
  firstName: string;
  lastName: string;
  isAvailable: boolean;
}


function App() {

  const [bookings, setBookings] = useState<Booking[]>([]);

  return (
    <>
    <NavigationBar pageTitle={!bookings.length ? "Make a Booking" : "Confirm Booking"}/>
    <Container  maxW="container.lg">
      <Routes>
        <Route path='/' element={<Home setBookings={setBookings}/>}/>
        <Route path='/bookings' element={<BookingList  bookings={bookings}/>}/>
      </Routes>
    </Container>
    </>
  )
}

export default App;
