import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function Term_Life_Insurance() {
    const serviceData = {
        title: "Term Life Insurance",
        header: "What is Term Life Insurance?",
        description: "Term life insurance provides affordable, temporary coverage for a specific period, typically 10, 20, or 30 years. It offers a straightforward way to protect your loved ones financially during your most critical years, such as when you have a mortgage, young children, or other significant financial obligations. If you pass away during the term, your beneficiaries receive a death benefit. If you outlive the term, the policy expires unless you choose to convert it to permanent coverage.",
        benefits: [
            "Affordable Premiums",
            "Flexible Term Lengths",
            "Income Replacement",
            "Debt Protection",
            "Mortgage Coverage",
            "Family Security",
            "Convertible Options"
        ]
    };

    return <ServiceDetail {...serviceData} />;
}

export default Term_Life_Insurance;

