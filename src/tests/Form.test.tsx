import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Homepage';
import { MemoryRouter } from 'react-router-dom';

const mockUseFormik = {
	initialValues: {
		grades: '',
		startTime: '',
		endTime: '',
	},
	onSubmit: jest.fn(),
	handleSubmit: jest.fn(),
	handleChange: jest.fn(),
	values: {
		grades: '',
		startTime: '',
		endTime: '',
	},
};

jest.mock('formik', () => ({
	useFormik: jest.fn(() => mockUseFormik),
}));

const mockSetBookings = jest.fn();

test('handleSubmit function is called when Create Bookings button is clicked', () => {
	render(
		<MemoryRouter>
			<Home setBookings={mockSetBookings} />
		</MemoryRouter>
	);
	const createBookingsButton = screen.getByText('Create Bookings');
	fireEvent.click(createBookingsButton);
	expect(mockUseFormik.handleSubmit).toHaveBeenCalled();
});
