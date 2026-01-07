import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function Permanent_Life_Insurance() {
    const serviceData = {
        title: "Permanent Life Insurance",
        header: "What is Permanent Life Insurance?",
        description: "Permanent life insurance provides lifetime coverage with the added benefit of cash value accumulation. Unlike term insurance, permanent policies remain in force for your entire life as long as premiums are paid. There are two main types: Whole Life Insurance, which offers guaranteed cash value growth and fixed premiums, and Indexed Universal Life (IUL), which provides flexible premiums and cash value growth tied to market indexes with downside protection. Permanent life insurance serves multiple purposes: it provides a death benefit for your beneficiaries, builds cash value that you can access during your lifetime, and offers tax advantages that can support long-term financial goals like college savings and tax-efficient wealth accumulation.",
        benefits: [
            "Lifetime Coverage",
            "Cash Value Accumulation",
            "Tax-Deferred Growth",
            "Tax-Free Death Benefit",
            "Flexible Premium Payments (IUL)",
            "Market-Linked Growth with Downside Protection (IUL)",
            "College Savings - Use cash value to fund education expenses tax-efficiently",
            "Tax Savings - Access cash value through loans and withdrawals that may be tax-free, reducing your overall tax burden while preserving wealth"
        ]
    };

    return <ServiceDetail {...serviceData} />;
}

export default Permanent_Life_Insurance;

