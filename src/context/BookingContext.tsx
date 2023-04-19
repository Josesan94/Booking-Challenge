import { createContext, useContext, useState, ReactNode } from 'react';
import { Booking } from '../App';

const BookingContext = createContext<{
  bookings: Booking[];
  setBookings: (bookings: Booking[]) => void;
}>({
  bookings: [],
  setBookings: () => {},
});

export const useBookingContext = () => {
  return useContext(BookingContext);
};

interface BookingProviderProps {
    children: ReactNode;
  }

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  return (
    <BookingContext.Provider value={{ bookings, setBookings }}>
      {children}
    </BookingContext.Provider>
  );
};