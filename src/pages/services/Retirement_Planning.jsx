import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function RetirementPlanning() {
    const serviceData = {
        title: "Retirement Planning",
        header: "Why Plan Early ?",
        description: " Preparing for retirement is one of the most important financial steps you'll take. Retirement and pension planning helps you create a secure and sustainable income for your golden years, ensuring peace of mind and financial independence. ",
        benefits: [
            "Steady Income (Pension)",
            "Tax Efficiency ",
            "Investment Growth",
            "Risk Management",
            "Guardianship Designation",
            "Customized Solutions"
        ]
    };

    return <ServiceDetail {...serviceData} />;
}

export default RetirementPlanning;
