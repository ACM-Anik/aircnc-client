import React from 'react';
import Container from '../../components/Shared/Container';
import Header from '../../components/Rooms/Header';
import RoomInfo from '../../components/Rooms/RoomInfo';

const RoomDetails = () => {
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <Header></Header>
                    <RoomInfo></RoomInfo>
                    <div className="">Reservation</div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;