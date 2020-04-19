import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div className="jumbotron">
            hello homepage
            <br />
            <Link
                to='/about'
                className="btn btn-primary btn-lg"
            >
                Learn more</Link>
        </div>
    );
};

export default HomePage;