import React, { useEffect, useState } from 'react';
import './Testimonials.css'; // Import the testimonials CSS
import { Button } from '../navbar/Button'; // Import the Button component if needed
// Importing images for the carousel

function Testimonials() {

    return (
        <div className="testimonials-container">
            <div className="testimonials-header">
                <h1>Testimonials</h1>
                <p>What our students and parents say about us</p>
            </div>
        </div>
    );
}

export default Testimonials;