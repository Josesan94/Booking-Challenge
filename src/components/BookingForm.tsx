import { useState } from 'react';
import { Link } from 'react-router-dom';
import { generateRandomStaff } from '../utils/generateRandomData';
import {
	Stack,
	FormControl,
	Select,
	Text,
	Button,
	Heading,
	Checkbox,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import DatesCalendar from '../components/Calendar/Calendar';
import useGrades from '../hooks/useGrades';
import { Booking } from '../models/models';

interface Props {
	setBookings: React.Dispatch<React.SetStateAction<Booking[]>>;
}

type SelectedTime = {
	start: string;
	end: string;
};

const BookingForm: React.FC<Props> = (props) => {
	const { setBookings } = props;
	const { response: grades, loading, error } = useGrades();
	const [selectedDateRange, setSelectedDateRange] = useState<any>(new Date());
	const [selectedTimeRange, setSelectedTimeRange] = useState<SelectedTime>({
		start: '',
		end: '',
	});

	const formik = useFormik({
		initialValues: {
			grades: '',
			end: '',
			start: '',
		},
		onSubmit: (values) => {
			const dates = getDatesBetween(
				new Date(selectedDateRange[0]),
				new Date(selectedDateRange[1])
			);

			const newBookings = dates.map((date: Date) => {
				return {
					grade: values.grades,
					date: date.toLocaleDateString('en-US', {
						weekday: 'short',
						day: 'numeric',
						month: 'short',
						year: 'numeric',
					}),
					startTime: values.start,
					endTime: values.end,
					staff: generateRandomStaff(1),
				};
			});
			setBookings((prevState: Booking[]) => [...prevState, ...newBookings]);
			formik.resetForm();
			setSelectedTimeRange({ start: '', end: '' });
		},
	});

	function getDatesBetween(startDate: Date, endDate: Date) {
		const dates: Date[] = [];
		const currentDate = startDate;

		while (currentDate <= endDate) {
			dates.push(new Date(currentDate));
			currentDate.setDate(currentDate.getDate() + 1);
		}
		return dates;
	}

	const handleStartTimeChange = (startTime: string) => {
		setSelectedTimeRange((prevState) => ({
			...prevState,
			start: startTime,
		}));
	};

	const handleEndTimeChange = (endTime: string) => {
		setSelectedTimeRange((prevState) => ({ ...prevState, end: endTime }));
	};

	const handleSubmit = () => {
		formik.handleSubmit();
	};

	if (error.length > 0) {
		return (
			<Stack>
				<Text>There's been an error with the grades fetch</Text>
			</Stack>
		);
	}

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<Stack
					margin={5}
					flexDirection={'row'}
					alignItems={'center'}
					justifyContent={'space-evenly'}
				>
					<Heading marginLeft={-5} fontSize='3xl' color={'purple.500'}>
						Book from Scratch
					</Heading>
					<Button colorScheme='blue' variant='outline'>
						<Text color={'black'}>Re-book Staff</Text>
					</Button>
				</Stack>
				<Stack
					gap={4}
					marginBottom={5}
					flexDirection={'column'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<FormControl>
						<Select
							placeholder='Select an option'
							name='grades'
							id='grades'
							onChange={formik.handleChange}
							value={formik.values.grades}
						>
							{loading ? 'loading grades' : ''}
							{grades?.map((grade: string, index) => (
								<option key={index} value={grade}>
									{grade}
								</option>
							))}
						</Select>
					</FormControl>
					<Stack
						width={'100%'}
						flexDirection={'row'}
						gap={5}
						alignItems={'center'}
						justifyContent={'space-around'}
					>
						<FormControl>
							<Select
								placeholder='Select an option'
								marginTop={2}
								name='start'
								id='start'
								onChange={(e) => {
									formik.handleChange(e);
									handleEndTimeChange(e.target.value);
								}}
								value={formik.values.start}
							>
								<option value='9:30'>9:30</option>
								<option value='12:30'>12:30</option>
								<option value='17:30'>17:30</option>
							</Select>
						</FormControl>
						<ArrowForwardIcon boxSize={10} color='grey' />
						<FormControl>
							<Select
								placeholder='Select an option'
								name='end'
								id='end'
								onChange={(e) => {
									formik.handleChange(e);
									handleStartTimeChange(e.target.value);
								}}
								value={formik.values.end}
							>
								<option value='9:30'>9:30</option>
								<option value='12:30'>12:30</option>
								<option value='17:30'>17:30</option>
							</Select>
						</FormControl>
					</Stack>
				</Stack>
				<Stack
					alignItems={'flex-start'}
					flexDirection={'row'}
					justifyContent={'flex-start'}
				>
					<Checkbox size={'md'} colorScheme='purple' defaultChecked>
						{' '}
						Been Before
					</Checkbox>
				</Stack>
				<Button marginY={5} width={'100%'} colorScheme='blue' variant='outline'>
					<Text color='black'>Edit Default Settings (2 modified) </Text>
				</Button>
				<FormControl width={'100%'} display={'flex'} justifyContent={'center'}>
					<DatesCalendar
						onChange={setSelectedDateRange}
						value={selectedDateRange}
					/>
				</FormControl>
				<Stack>
					<Link to='/bookings'>
						<Button type='button' onClick={handleSubmit} my={5} w='100%'>
							Create Bookings
						</Button>
					</Link>
				</Stack>
			</form>
		</>
	);
};

export default BookingForm;
