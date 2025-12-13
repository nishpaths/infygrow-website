import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function College_Savings() {
    const serviceData = {
        title: "College Savings",
        header: "What are college savings",
        description: "A college education is a significant investment, and planning ahead can make it more affordable. College savings plans ensure your children or grandchildren have the resources they need for success. ",
        benefits: [
            "Tax Advantages",
            "Future Security",
            "Investment Growth",
        ]
    };

    return <ServiceDetail {...serviceData} />;
}

export default College_Savings;