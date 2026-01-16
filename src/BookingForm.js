import React, { useState } from 'react';

function BookingForm() {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState(1);

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                aria-label="On Click"
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                required 
            />

            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />

            <input type="submit" value="Make Your reservation" aria-label="On Click" />
        </form>
    );
}

export default BookingForm;