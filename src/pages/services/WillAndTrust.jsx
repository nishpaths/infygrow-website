import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function WillAndTrust() {
    const serviceData = {
        title: "Will and Trust",
        header: "What a Will and Trust Provides",
        description: "Planning for the future is essential to ensure that your assets are protected and your loved ones are cared for. A will and trust are key components of a comprehensive estate plan, providing clarity, security, and peace of mind. Together, they allow you to outline your wishes, reduce legal complications, and ensure a smooth transfer of your wealth.",
        benefits: [
            "Asset Protection",
            "Family Security",
            "Avoid Probate",
            "Customized Distribution",
            "Guardianship Designation",
            "Privacy Preservation"
        ]
    };

    return <ServiceDetail {...serviceData} />;
}

export default WillAndTrust;
