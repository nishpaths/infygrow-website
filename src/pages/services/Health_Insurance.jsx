import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function Health_Insurance() {
    const serviceData = {
        title: "Health Insurance",
        header: "What is Health Insurance",
        description: " ACA Individual & Family Health insurance protects your well-being and finances by covering medical expenses. Market place plans help you access the care you need without financial strain.",
        benefits: [
            "Market Place  Medical Plans",
            "Market Place Dental Plans",
        ]
    };

    return (
    <>
         <ServiceDetail {...serviceData} />
         <div className="flex justify-center px-4 pb-20">
             <a 
                 href="https://www.healthsherpa.com/?_agent_id=giridhar-patha" 
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

export default Health_Insurance;

