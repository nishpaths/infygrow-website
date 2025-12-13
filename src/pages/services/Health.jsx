import React from 'react';
import ServiceCard from '../../components/serviceCard';
function Health(){
    return(
        <> 
        <h1 className="text-xl font-semibold font-cabin text-center mt-20 text-[#bab675]">Health Insurance</h1>
            <section className="flex justify-center items-center min-h-screen">
                <ServiceCard title="Health Insurance" description="Safeguard your health and finances with insurance solutions tailored to your needs." link="/services/health-insurance" />
            </section>
        </>
    );
}
export default Health;