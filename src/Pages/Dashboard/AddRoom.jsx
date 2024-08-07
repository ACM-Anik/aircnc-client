import { useContext, useState } from 'react';
import AddRoomForm from '../../components/Forms/AddRoomForm';
import { imageUpload } from '../../api/utils';
import { AuthContext } from '../../providers/AuthProvider';
import { addRoom } from '../../api/rooms';
import toast from 'react-hot-toast';

const AddRoom = () => {
    const { user } = useContext(AuthContext);
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

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
        const guest = event.target.guest.value;
        const bedrooms = event.target.bedrooms.value;
        const bathrooms = event.target.bathrooms.value;
        const description = event.target.description.value;
        const image = event.target.image.files[0];

        // upload image 
        if (image) {
            imageUpload(image)
                .then(res => {
                    const roomData = {
                        location,
                        title,
                        from,
                        to,
                        price: parseFloat(price),
                        guest,
                        bedrooms,
                        bathrooms,
                        description,
                        image: res.data.display_url,
                        host: {
                            name: user?.displayName,
                            image: user?.photoURL,
                            email: user?.email,
                        },
                        category,
                    };
                    console.log(roomData);

                    // Post room data to server:-
                    addRoom(roomData)
                        .then(data => {
                            console.log(data);
                            toast.success('Successfully added the room!');
                        })
                        .catch(err => console.log(err))

                    setLoading(false);
                })
                .catch(err => {
                    console.log(err.message);
                    setLoading(false);
                });
        }else{
            toast.error('Please add an image the rooms');
            setLoading(false);
        };
    };

    // Handle the name-changing in the image upload button:-
    const handleImageChange = (image) => {
        setUploadButtonText(image.name)
    };

    // handle date range picker
    const handleDates = (ranges) => {
        setDates(ranges.selection);
    };

    return (
        <div>
            <AddRoomForm
                handleSubmit={handleSubmit}
                loading={loading}
                handleImageChange={handleImageChange}
                uploadButtonText={uploadButtonText}
                dates={dates}
                handleDates={handleDates}
            ></AddRoomForm>
        </div>
    );
};

export default AddRoom;