import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function Investments() {
    const serviceData = {
        title: "Investments",
        header: "",
        description: "Smart investing is essential for growing and preserving your wealth. Tailored investment strategies help align your portfolio with your goals and risk tolerance.",
        benefits: [
            "Debt Management",
            "Emergency Fund",
            "Financial Protection",
            "Long-Term Planning",
            "Build wealth",
            "Preserve Wealth",
        ]
    };

    return <ServiceDetail {...serviceData} />;
}

export default Investments;