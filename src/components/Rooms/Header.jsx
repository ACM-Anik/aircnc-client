import React from 'react';
import Heading from '../Heading/Heading';

const Header = () => {
    return (
        <>
            <Heading
                title="This room is the best!"
                subtitle="Please Select other Category."
                center={false}
            ></Heading>

            <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                <img 
                className="object-cover w-full"
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400" alt="header image" />
            </div>
        </>
    );
};

export default Header;