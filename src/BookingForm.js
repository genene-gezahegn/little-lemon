import React, { useState } from 'react';

function BookingForm({availableTimes, dispatch, submitForm}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({type: 'UPDATE_TIMES', date: e.target.value});
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} required aria-label="Select Date" />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required aria-label="Select Time">
                {availableTimes.map(times => <option key={times}>{times}</option>)}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} aria-label="Number of Guests" />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} aria-label="Select Occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation" aria-label="Submit Reservation" />
        </form>
    );
}
export default BookingForm;