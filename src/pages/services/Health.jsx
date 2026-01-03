import React from 'react';
import ServiceCard from '../../components/serviceCard';
function Health(){
    return(
        <> 
        <h1 className="text-xl font-semibold font-cabin text-center mt-20 text-[#bab675]">Health Insurance</h1>
            <section className="flex flex-wrap justify-center gap-4 px-20 pt-25 pb-20 min-h-screen">
                <ServiceCard title="Marketplace ACA Plans" description="Safeguard your health and finances with insurance solutions tailored to your needs." link="/services/health-insurance" />
                <ServiceCard title="Supplemental Health Plans" description="Additional coverage beyond your primary insurance to help cover out-of-pocket expenses and deductibles." link="/services/supplemental-health-plans" />
                <ServiceCard title="Visitor/OPT Student Health Plans" description="Comprehensive medical coverage for visitors to the USA, international students, and OPT students." link="/services/visitors-insurance" />
            </section>
        </>
    );
}
export default Health;