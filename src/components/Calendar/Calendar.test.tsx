import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DatesCalendar from './Calendar';

test('should not allow selecting past dates', () => {
	const mockOnChange = jest.fn();
	render(<DatesCalendar onChange={mockOnChange} value={new Date()} />);

	// Find past date button
	const currentDate = new Date();
	const pastDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
	const pastDateButton = screen.getByText(pastDate.getDate().toString());

	// Check if the past date button has the 'aria-disabled' attribute set to 'true'
	expect(pastDateButton.closest('button')).toBeDisabled();
});
