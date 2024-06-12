import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container';


const Rooms = () => {
    const [rooms, setRooms] = useState();

    useEffect(() => {
        fetch("./rooms.json")
            .then(res => res.json())
            .then(data => setRooms(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <Container>
            <div
                className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
            >
                {
                    rooms?.map(room => (
                        <div
                            key={room.location}
                            className="">
                            {room.location}
                        </div>
                    ))
                }
            </div>
        </Container>
    );
};

export default Rooms;