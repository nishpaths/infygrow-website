import React from 'react';
import ServiceCard from '../../components/serviceCard';

function Travel(){
    return(
        <> 
        <h1 className="text-4xl font-bold text-center mt-20 text-[#bab675]">VISITOR INSURANCE</h1>
            <section className="flex justify-center items-center min-h-[60vh] px-20 py-20">
                <ServiceCard title="Visitor Insurance" description="Comprehensive medical coverage for every journey—visiting the USA, studying abroad, or exploring the world." link="/services/visitors-insurance" />
            </section>
        </>
    );
}
export default Travel;