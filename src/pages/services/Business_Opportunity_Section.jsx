import React from 'react';
import ServiceCard from '../../components/serviceCard';

function Business_Opportunity_Section(){
    return(
        <>
        <h1 className="text-xl font-semibold font-cabin text-center mt-20 text-[#bab675]">Business Opportunity</h1>
            <section className="flex flex-wrap justify-center gap-4 px-20 pt-25 pb-20 min-h-screen">
                <ServiceCard title="Business Opportunity" description="Looking to open a business in the US? We can help you with that." link="/services/business-opportunity" />
            </section>
        </>
    );
}
export default Business_Opportunity_Section;

