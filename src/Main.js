import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

// Mock function for available times
export const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
export const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') return ["17:00", "18:00", "19:00", "20:00", "21:00"];
    return state;
};

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <main>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </main>
    );
}
export default Main;