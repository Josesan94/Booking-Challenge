import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Home from './Home';

describe('Home component', () => {
  test('submit button calls setBookings function with the correct data', () => {
    // Define a mock setBookings function
    const mockSetBookings = jest.fn();

    // Render the component
    render(<Home setBookings={mockSetBookings} />);

    // Fill out the form
    const gradeSelect = screen.getByLabelText(/grade/i);
    fireEvent.change(gradeSelect, { target: { value: 'HCA (Care assistant)' } });

    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: '2023-04-19' } });

    const startTimeInput = screen.getByLabelText(/start time/i);
    fireEvent.change(startTimeInput, { target: { value: '17:30' } });

    const endTimeInput = screen.getByLabelText(/end time/i);
    fireEvent.change(endTimeInput, { target: { value: '9:30' } });

    // Click the submit button
    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);

    // Check that the setBookings function was called with the correct data
    expect(mockSetBookings).toHaveBeenCalledWith([
      {
        grade: 'HCA (Care assistant)',
        date: new Date('2023-04-19T00:00:00.000Z'),
        startTime: '17:30',
        endTime: '9:30',
        staff: expect.any(Array),
      },
    ]);
  });
});