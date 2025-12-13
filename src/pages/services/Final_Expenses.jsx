import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function Final_Expenses() {
    const serviceData = {
        title: "Final Expenses",
        header: "What are Final Expenses",
        description: "Final expense insurance is a type of life insurance that helps pay for end-of-life expenses. It's a permanent policy that provides a death benefit to your loved ones when you pass away.",
        benefits: [
            "Covers end of Life Expenses ",
            "Guaranteed Death Benefit",
            "Avoid financial burden on Family"
        ]
    };

    return <ServiceDetail {...serviceData} />;
}

export default Final_Expenses;