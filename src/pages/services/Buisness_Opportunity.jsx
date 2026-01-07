import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function Buisness_Opportunity() {
    const serviceData = {
        title: "Buisness Opportunity",
        header: "What is the OPPORTUNITY?",
        description: "What is the reason for you to do Business?\nAre you willing to spend few hours learn and earn in business?\nAre you coachable?\nLooking for Income growth?",
        benefits: [
            "Startup Guidance",
            "Financial knowledge",
            "Field building",
        ]
    };

    return <ServiceDetail {...serviceData} />;
}

export default Buisness_Opportunity;