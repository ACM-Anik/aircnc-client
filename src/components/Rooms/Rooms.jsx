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
            {rooms?.length}
        </Container>
    );
};

export default Rooms;