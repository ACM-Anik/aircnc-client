import react, { useState } from 'react';
import AddRoomForm from '../../components/Forms/AddRoomForm';

const AddRoom = () => {
    const [loading, setLoading] = useState(false);

    //handle form submit:-
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const location = event.target.location.value;
        const category = event.target.category.value;
        const title = event.target.title.value;
        const from = dates.startDate;
        const to = dates.endDate;
        const price = event.target.price.value;
        const total_guest = event.target.total_guest.value;
        const bedrooms = event.target.bedrooms.value;
        const description = event.target.description.value;
        const image = event.target.image.files[0];
        console.log(location);
        console.log(category);
        console.log(title);
        console.log(from);
        console.log(to);
        console.log(price);
        console.log(total_guest);
        console.log(bedrooms);
        console.log(description);
        console.log(image);
    };


    return (
        <div>
            <AddRoomForm
                handleSubmit={handleSubmit}
                loading={loading}
            ></AddRoomForm>
        </div>
    );
};

export default AddRoom;