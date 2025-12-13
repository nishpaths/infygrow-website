import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function Visitors_Insurance() {
    const serviceData = {
        title: "Travel and Visitor Insurance",
        header: "Why take travel insurance",
        description: "Visitors insurance is health insurance for those visiting the USA from another country. Securing yourself and family members with USA travel insurance primarily covers unforeseen injuries or illnesses that may occur while you're away.",
        benefits: [
            "Visitor Insurance",
            "Travel Insurance",
            "International Student Health Insurance",
        ]
    };

    return (
    <>
         <ServiceDetail {...serviceData} />
         <div className="flex justify-center px-4 pb-20">
             <a 
                 href="https://giridhar.brokersnexus.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-full max-w-2xl bg-white text-black border-2 border-white rounded-sm px-8 py-2.5 text-center font-semibold uppercase tracking-wide block"
             >
                 GET YOUR QUOTE TODAY!
             </a>
         </div>
    </>
    );
}

export default Visitors_Insurance;