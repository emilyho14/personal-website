
// import { useEffect, useState } from "react";

// export default function Contact() {
//     return (
//         <div>
//             <h2> Hi! Please reach out to me if you would like to chat or learn more about my experiences! </h2>
//         </div>
//     );
// };

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";


function Contact() {
    return (
        <div>
            <div className='contact-container'>
                <p> Hello there! </p>
                <p>I'd love to connect! Whether you want to talk about software development, research, or collaboration opportunities, feel free to reach out below.</p>
            </div>
            <p className="contact-icons">
                <a href="mailto:eeho2@illinois.edu" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/emily-ho14" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/emilyho14" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </p>
        </div>

    );
}

export default Contact;
