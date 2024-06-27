// Adding a rooms:-
export const addRoom = async (roomData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',

        },
        body: JSON.stringify(roomData),
    });

    const data = await response.json();
    return data;
};

// Getting all the rooms:-
export const getAllRooms = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`);

    const data = await response.json();
    return data;
};

// Getting all the rooms:-
export const getRoom = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`);

    const data = await response.json();
    return data;
};
