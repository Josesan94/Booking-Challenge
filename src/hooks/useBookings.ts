import { useState } from "react";
import { generateRandomStaff } from "../utils/generateRandomData";
import { useFormik } from "formik";
import { Booking } from '../App'
import { Staff } from '../App'

interface UseBookingProps {
    grades: string;
}

interface UseHomeState {
selectedDateRange: Date[];
selectedTimeRange: { start: string; end: string };
availableStaff: Staff[];
}

interface UseHomeActions {
  setSelectedDateRange: (selectedDateRange: Date[]) => void;
  setSelectedTimeRange: (selectedTimeRange: { start: string; end: string }) => void;
  setAvailableStaff: (availableStaff: Staff[]) => void;
  setBookings: (bookings: Booking[]) => void;
  handleSubmit: (values: { grades: string; date: Date; startTime: string; endTime: string }) => void;
  handleStartTimeChange: (startTime: string) => void;
  handleEndTimeChange: (endTime: string) => void;
}


const useBookings = ({ grades }:any): any => {
  
  const [selectedDateRange, setSelectedDateRange] = useState<Date[]>([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState<{ start: string; end: string }>({ start: "", end: "" });
  const [bookings, setBookings] = useState<any>([]);

  const handleSubmit = (values: { grades:string, date:Date,  startTime: string; endTime: string  }) => {
    const formik = useFormik({
      initialValues: {
        grades: "",
        date: new Date(),
        startTime: "",
        endTime: ""
      },
      onSubmit: (values) => {
        const booking:Booking = {
          grade: values.grades,
          date:  selectedDateRange.map((date:any) => date.toLocaleDateString("es-ES", { weekday: 'short', day: 'numeric', month: 'short' })),
          startTime: selectedTimeRange.start,
          endTime: selectedTimeRange.end,
          staff: generateRandomStaff(Math.floor(Math.random() * 5) + 1),
        };
        setBookings((prevState:any) => [...prevState, booking]);
        formik.resetForm()

      },
    })
  }

  const handleStartTimeChange = (startTime: string) => {
    setSelectedTimeRange((prevState) => ({ ...prevState, start: startTime }));
  };

  const handleEndTimeChange = (endTime: string) => {
    setSelectedTimeRange((prevState) => ({ ...prevState, end: endTime }));
  };

  const bookingsState: any = {
    bookings,
    setBookings,
    handleSubmit,
    handleStartTimeChange,
    handleEndTimeChange,
    selectedDateRange,
    selectedTimeRange,
  };



  return bookingsState;
};


export default useBookings;