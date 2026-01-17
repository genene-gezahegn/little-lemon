import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={["17:00"]} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})