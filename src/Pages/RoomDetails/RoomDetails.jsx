import React from 'react';
import Container from '../../components/Shared/Container';

const RoomDetails = () => {
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <div className="">Header</div>
                    <div className="">Room Info</div>
                    <div className="">Reservation</div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;