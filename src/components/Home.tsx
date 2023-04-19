
import { useState } from 'react';
import { Link } from 'react-router-dom'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import { generateRandomStaff } from '../utils/generateRandomData';
import {
  Stack,
  Container, 
  FormControl,
  Select,
  Text, 
  Button,
  Heading,
  Checkbox} from '@chakra-ui/react'
import { useFormik } from "formik";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css'
import DatesCalendar from './Calendar';
import  useBooking from '../hooks/useBookings'
import useGrades from '../hooks/useGrades';

type Props = {
  setBookings: (arg0: any) => void;
}

interface Booking {
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


const Home:React.FC<Props> = (props) => {
  const {setBookings} = props;
  const {response:grades, loading, error} = useGrades();
  const [selectedDateRange, setSelectedDateRange] = useState<any>(new Date());
  const [selectedTimeRange, setSelectedTimeRange] = useState({ start: '', end: '' });
  const [availableStaff, setAvailableStaff] = useState<Staff[]>([]);




  const formik = useFormik({
    initialValues: {
      grades: "",
      startTime: "",
      endTime: ""
    },
    onSubmit: (values) => {
      const dates = getDatesBetween(new Date(selectedDateRange[0]), new Date(selectedDateRange[1]));

      const newBookings = dates.map((date:any) => {
        return {
          grade: values.grades,
          date: date.toLocaleDateString("es-ES", {
            weekday: "short",
            day: "numeric",
            month: "short",
          }),
          startTime: selectedTimeRange.start,
          endTime: selectedTimeRange.end,
          staff: generateRandomStaff(1),
      };
    })
    setBookings((prevState: Booking[]) => [...prevState, ...newBookings]);
    formik.resetForm();
    setSelectedTimeRange({ start: "", end: "" });
    },
  });

  function getDatesBetween(startDate: Date, endDate: Date) {
    const dates: Date[] = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

    const handleStartTimeChange = (startTime:string) => {
      setSelectedTimeRange((prevState:any) => ({ ...prevState, start: startTime }));
    };

    const handleEndTimeChange = (endTime:string) => {
      setSelectedTimeRange((prevState:any) => ({ ...prevState, end: endTime }));
    };

    const handleSubmit = () => {
      formik.handleSubmit();
    };
    


  return (
    <>
    <form  onSubmit={formik.handleSubmit}>
    
      <Stack margin={5} flexDirection={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
        <Heading marginLeft={-5} fontSize='3xl' color={'purple.500'}>Book from Scratch</Heading>
        <Button colorScheme='blue' variant='outline'><Text color={'black'}>Re-book Staff</Text></Button>
      </Stack>
      <Stack gap={4} marginBottom={5} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
          <FormControl>
          <Select placeholder="Select an option" name="grades" id="grades" 
                onChange={formik.handleChange}
                value={formik.values.grades}>
            {grades?.map((grade:any, index) => (
              <option key={index}  value={grade}>
                {grade}
              </option>
            ))}
          </Select>
          </FormControl>
          <Stack width={"100%"} flexDirection={'row'} gap={5} alignItems={'center'} justifyContent={'space-around'} >
            <FormControl>
            <Select placeholder="Select an option" marginTop={2} name="startTime"  id="startTime" 
            onChange={(e) => {
              formik.handleChange(e);
              handleEndTimeChange(e.target.value);
            }}
                value={formik.values.startTime}
            >
              <option value="9:30">9:30</option>
              <option value="12:30">12:30</option>
              <option value="17:30">17:30</option>
          </Select>
            </FormControl>
          <ArrowForwardIcon boxSize={10} color="grey"/>
          <FormControl>
          <Select placeholder="Select an option" name="endTime" id="endTtime" 
              onChange={(e) => {
                formik.handleChange(e);
                handleStartTimeChange(e.target.value);
              }}
                value={formik.values.endTime}>
              <option value="9:30">9:30</option>
              <option value="12:30">12:30</option>
              <option value="17:30">17:30</option>
          </Select>
          </FormControl>
          </Stack>
      </Stack>
      <Stack alignItems={'flex-start'} flexDirection={'row'} justifyContent={'flex-start'}>
        <Checkbox size={'md'} colorScheme='purple' defaultChecked > Been Before</Checkbox>
      </Stack>
      <Button marginY={5} width={'100%'} colorScheme='blue' variant='outline'>
       <Text color="black">Edit Default Settings (2 modified) </Text> 
      </Button>
      <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
      <FormControl>
        <DatesCalendar onChange={setSelectedDateRange} value={selectedDateRange}/>
    </FormControl>
      </Stack>
    <Stack>
      <Link to='/bookings'>
    <Button type="button" onClick={handleSubmit} >
      Create Bookings
    </Button>
      </Link>
    </Stack>
      </form>
    </>
  )
}

export default Home