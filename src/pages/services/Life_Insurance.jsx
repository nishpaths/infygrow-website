import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function LifeInsurance() {
    const serviceData = {
        title: "Life Insurance",
        header: "What is Life Insurance?",
        description: " A cornerstone of financial security, life insurance protects your family and loved ones in times of uncertainty. It ensures they are financially supported in case of the unexpected. ",
        benefits: [
            "Income Replacement",
            "Debt Coverage",
            "Mortgage protection",
            "Future Planning",
            "Kids education expenses",
            "Estate Protection",
            "Peace of Mind"
        ]
    };

    return <ServiceDetail {...serviceData} />;
}

export default LifeInsurance;
