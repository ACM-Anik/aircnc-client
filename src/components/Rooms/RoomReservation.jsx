import React, { useContext, useState } from 'react';
import Calender from './Calender';
import Button from '../Button/Button';
import { AuthContext } from '../../providers/AuthProvider';
import BookingModal from '../Modal/BookingModal';
import { formatDistance, subDays } from "date-fns";

const RoomReservation = ({ roomData }) => {
    const { user, role } = useContext(AuthContext);
    console.log(roomData);
    const totalPrice = parseFloat(formatDistance(new Date(roomData.to), new Date(roomData.from)).split(' ')[0]);
    console.log(totalPrice);
    const { isOpen, setIsOpen } = useState(false);
    const { BookingInfo, setBookingInfo } = useState({
        guest: {
            name: user.displayName,
            email: user.email,
            image: user.photoURL
        },
        host: roomData.host.email,
        location: roomData.location,
        price: roomData.price,
    });

    return (
        <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
            <div className="flex flex-row items-center gap-1 p-4">
                <div className="text-2xl font-semibold">$ {roomData?.price}</div>
                <div className="text-neutral-600 font-light">night</div>
            </div>
            <hr />
            <div className="flex justify-center">
                <Calender></Calender>
            </div>
            <hr />
            {/* Reserve Button */}
            <div className="p-4">
                <Button
                    onClick={() => setIsOpen(true)}
                    disabled={roomData?.host.email === user?.email}
                    label="Reserve"
                ></Button>
            </div>
            <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
                <div>Total</div>
                <div>$ 300</div>
            </div>

            {/* <BookingModal
                isOpen={isOpen}
            ></BookingModal> */}
        </div>
    );
};

export default RoomReservation;