import React from 'react';
import { Redirect } from 'react-router-dom'

const NotFound = () => {
    return (
        // it automatically redirect to to home page
        // <Redirect to="/"></Redirect>
        <h1>
            Page not found!
        </h1>
    );
};

export default NotFound;