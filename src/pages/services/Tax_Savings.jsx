import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function Tax_Savings() {
    const serviceData = {
        title: "Tax Savings",
        header: "What are Tax Savings",
        description: "Effective tax saving helps you retain more of your income and wealth. With customized strategies, you can minimize your tax liabilities and maximize your financial efficiency.",
        benefits: [
            "Reduced Tax Liability",
            "Strategic Deductions",
            "Wealth Preservation",
            "Future Planning",
            "Compliance Assurance"
        ]
    };

    return <ServiceDetail {...serviceData} />;
}

export default Tax_Savings;