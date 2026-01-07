import React from 'react';
import ServiceCard from '../../components/serviceCard';

function Legacy_Planning_Section(){
    return(
        <>
        <h1 className="text-xl font-semibold font-cabin text-center mt-20 text-[#bab675]">Legacy Planning</h1>
            <section className="flex flex-wrap justify-center gap-4 px-20 pt-25 pb-20 min-h-screen">
                <ServiceCard title="Will & Trust" description="Protect your assets and ensure your loved ones are cared for with comprehensive estate planning solutions." link="/services/will-trust" />
            </section>
        </>
    );
}
export default Legacy_Planning_Section;

