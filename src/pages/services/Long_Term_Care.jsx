import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function Long_Term_Care() {
    const serviceData = {
        title: "Long Term Care",
        header: "What can we do",
        description: "At Infygrow, we understand that planning for long-term care is a critical part of safeguarding your financial future and maintaining your independence. We provide personalized solutions to help you prepare for potential healthcare needs, ensuring that you can focus on living your life with dignity and peace of mind.",
        benefits: [
            "Support for Chronic conditions",
            "Personalized care",
            "Improved quality of life ",
            "Care giver support",
            "Medical and Health Management",
            "Financial Protection"
        ]
    };

    return <ServiceDetail {...serviceData} />;
}

export default Long_Term_Care;
