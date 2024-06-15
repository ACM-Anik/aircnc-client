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
        </>
    );
};

export default Header;