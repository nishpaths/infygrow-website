import React from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function Supplemental_Health_Plans() {
    const serviceData = {
        title: "Supplemental Health Plans",
        header: "What are Supplemental Health Plans",
        description: "Supplemental health insurance plans provide additional coverage beyond your primary health insurance. These plans help cover out-of-pocket expenses, deductibles, and costs that your main insurance may not fully cover, offering extra financial protection for unexpected medical situations.",
        benefits: [
            "Critical Illness Coverage",
            "Accident Insurance",
            "Hospital Indemnity Plans",
            "Gap Coverage for Deductibles",
        ]
    };

    const handleQuoteClick = (e) => {
        e.preventDefault();
        const url = "https://shop.uhone.com/en/quote/census?brokerid=AA5613626";
        const width = 1200;
        const height = 800;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
        
        window.open(
            url,
            'SupplementalHealthPlansQuote',
            `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
        );
    };

    const quoteContent = (
        <button
            onClick={handleQuoteClick}
            className="w-full max-w-2xl mx-auto bg-white text-black border-2 border-white rounded-sm px-8 py-3 text-center font-semibold uppercase tracking-wide block hover:bg-gray-100 transition-colors cursor-pointer"
        >
            GET YOUR QUOTE TODAY!
        </button>
    );

    return (
        <div className="pb-20">
            <ServiceDetail {...serviceData} quoteContent={quoteContent} isEmbedded={false} />
        </div>
    );
}

export default Supplemental_Health_Plans;

