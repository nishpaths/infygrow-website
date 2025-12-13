import React from 'react';
import ServiceCard from '../../components/serviceCard';

function Wealth(){
    return(
        <>
        <section className="flex flex-wrap justify-center gap-4 px-20 pt-25 pb-20">
            <ServiceCard title="Will & Trust" description="Wealth is the total value of all assets owned by an individual or entity, including cash, investments, property, and other valuables." link="/services/will-trust" />
            <ServiceCard title="Retirement Planning" description="Retirement planning is the process of preparing for retirement by saving and investing money to ensure a comfortable lifestyle after leaving the workforce." link="/services/retirement-planning" />
            <ServiceCard title="Life Insurance" description="Life insurance is a contract between an insurance company and a policyholder, where the insurer promises to pay a death benefit to named beneficiaries upon the death of the policyholder." link="/services/life-insurance" />
            <ServiceCard title="Long Term Care" description="Long term care is a type of insurance that provides coverage for the cost of living in a nursing home or assisted living facility." link="/services/long-term-care" />
            <ServiceCard title="Final Expenses" description="Final expenses are the costs associated with the death of a person, including funeral expenses, medical bills, and other expenses." link="/services/final-expenses" />
            <ServiceCard title="Real Estate" description="Real estate is the property of land and the buildings on it, including the land itself, the buildings, and the improvements thereon." link="/services/real-estate" />
            <ServiceCard title="Investments" description="Investments are the purchase of assets, such as stocks, bonds, and real estate, with the expectation of earning a profit." link="/services/investments" />
            <ServiceCard title="College Savings" description="College savings is the process of saving money for the cost of college." link="/services/college-savings" />
            <ServiceCard title="Tax Savings" description="Tax savings is the process of saving money on taxes." link="/services/tax-savings" />
            <ServiceCard title="Health Insurance" description="Safeguard your health and finances with insurance solutions tailored to your needs." link="/services/health-insurance" />
            <ServiceCard title="Buisness Opportunity" description= "Looking to open a buisness in the US? We can help you with that." link="/services/business-opportunity" />
            </section>
        </>
    );
}
export default Wealth;