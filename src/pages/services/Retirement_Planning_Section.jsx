import React from 'react';
import ServiceCard from '../../components/serviceCard';

function Retirement_Planning_Section(){
    return(
        <>
        <h1 className="text-xl font-semibold font-cabin text-center mt-20 text-[#bab675]">Retirement Planning</h1>
            <section className="flex flex-wrap justify-center gap-4 px-20 pt-25 pb-20 min-h-screen">
                <ServiceCard title="Retirement Planning" description="Prepare for retirement by saving and investing money to ensure a comfortable lifestyle after leaving the workforce." link="/services/retirement-planning" />
                <ServiceCard title="Investments" description="Smart investing strategies to grow and preserve your wealth, aligned with your goals and risk tolerance." link="/services/investments" />
                <ServiceCard title="Real Estate" description="Build wealth and diversify your financial portfolio through strategic real estate investments." link="/services/real-estate" />
            </section>
        </>
    );
}
export default Retirement_Planning_Section;

