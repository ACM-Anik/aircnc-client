import React, { useContext, useState } from 'react';
import Calender from './Calender';
import Button from '../Button/Button';
import { AuthContext } from '../../providers/AuthProvider';
import BookingModal from '../Modal/BookingModal';
import { formatDistance, subDays } from "date-fns";

const RoomReservation = ({ roomData }) => {
    const { isOpen, setIsOpen } = useState(false);
    const { user, role } = useContext(AuthContext);
    console.log(roomData);

    // Price Calculation (with date-fns):-
    const totalPrice = parseFloat(formatDistance(new Date(roomData.to), new Date(roomData.from)).split(' ')[0]) * roomData.price;

    // Start-End date picking:-
    const [value, setValue] = useState({
        startDate: new Date(roomData?.from),
        endDate: new Date(roomData?.to),
        key: 'selection',
    });

    // Booking State (Info collecting):-
  // Booking state
  const [bookingInfo, setBookingInfo] = useState({
    guest: { name: user.displayName, email: user.email, image: user.photoURL },
    host: roomData.host.email,
    location: roomData.location,
    price: totalPrice,
    from: value.startDate,
    to: value.endDate,
    title: roomData.title,
    roomId: roomData._id,
    image: roomData.image,
  })
  const handleSelect = ranges => {
    setValue({ ...value })
  }

  const modalHandler = () => {
    console.log('modalhandler');
  }


    return (
        <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
            <div className="flex flex-row items-center gap-1 p-4">
                <div className="text-2xl font-semibold">$ {roomData?.price}</div>
                <div className="text-neutral-600 font-light">night</div>
            </div>
            <hr />
            <div className="flex justify-center">
                <Calender
                    value={value}
                    handleSelect={handleSelect}
                ></Calender>
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
                <div>$ {totalPrice}</div>
            </div>

            <BookingModal
                bookingInfo={bookingInfo}
                isOpen={isOpen}
            ></BookingModal>
        </div>
    );
};

export default RoomReservation;