import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function Real_Estate() {
    const serviceData = {
        title: "Real Estate",
        header: "What is Real Estate",
        description: "Real estate is a powerful tool for building wealth and diversifying your financial portfolio. With expert guidance, you can make informed decisions to achieve your property investment goals. ",
        benefits: [
            "Wealth Building",
            "Diversification",
            "Tax Advantages",
            "Future Planning",
            "Strategic Guidance ",
            "Legacy Creation"
        ]
    };

    return <ServiceDetail {...serviceData} />;
}

export default Real_Estate;