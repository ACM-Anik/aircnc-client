// Adding a booking:-
export const addBooking = async (bookingData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    });

    const data = await response.json();
    return data;
};

// Update room status:-
export const updateStatus = async (id, status) => {
    const url = `${import.meta.env.VITE_API_URL}/rooms/status/${id}`;
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ status }),
    });
    const data = await response.json();
    return data;
};

// Get all the Bookings for a user by email:-
export const getBookings = async (email) => {
    const url = `${import.meta.env.VITE_API_URL}/bookings?email=${email}`;
    const response = await fetch(url);
    const bookings = await response.json();
    return bookings;
};

// Delete a booking:-
export const deleteBooking = async (id) => {
    const url = `${import.meta.env.VITE_API_URL}/bookings/${id}`;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};
