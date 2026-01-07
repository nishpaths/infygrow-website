import React from 'react';
import ServiceCard from '../../components/serviceCard';

function Life_Insurance_Section(){
    return(
        <>
        <h1 className="text-xl font-semibold font-cabin text-center mt-20 text-[#bab675]">Life Insurance</h1>
            <section className="flex flex-wrap justify-center gap-4 px-20 pt-25 pb-20 min-h-screen">
                <ServiceCard title="Term Life Insurance" description="Affordable life insurance coverage for a specific period, providing financial protection when you need it most." link="/services/term-life-insurance" />
                <ServiceCard title="Permanent Life Insurance" description="Lifetime coverage with cash value accumulation, including Whole Life and Indexed Universal Life (IUL) options." link="/services/permanent-life-insurance" />
                <ServiceCard title="Final Expenses" description="Final expense insurance helps pay for end-of-life expenses, ensuring your loved ones aren't burdened financially." link="/services/final-expenses" />
                <ServiceCard title="Long Term Care" description="Comprehensive coverage for chronic conditions and long-term care needs, protecting your independence and financial future." link="/services/long-term-care" />
            </section>
        </>
    );
}
export default Life_Insurance_Section;

