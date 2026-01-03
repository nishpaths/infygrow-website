import React, { useState } from 'react';
import ServiceDetail from '../../components/ServiceDetail';

function Visitors_Insurance() {
    const [showQuote, setShowQuote] = useState(false);

    const serviceData = {
        title: "Visitor/OPT Student Health Plans",
        header: "Why take visitor/OPT student health insurance",
        description: "Visitor and OPT student health insurance provides essential medical coverage for those visiting the USA from another country, international students, and students on Optional Practical Training (OPT). Securing yourself and family members with USA health insurance primarily covers unforeseen injuries or illnesses that may occur while you're in the United States.",
        benefits: [
            "Visitor Insurance",
            "OPT Student Health Insurance",
            "International Student Health Insurance",
        ]
    };

    const handleQuoteClick = (e) => {
        e.preventDefault();
        setShowQuote(true);
    };

    const handleBackClick = (e) => {
        e.preventDefault();
        setShowQuote(false);
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
            {showQuote ? (
                <div className="bg-black text-white px-4 sm:px-6 lg:px-8 my-10 sm:my-16">
                    <div className="max-w-7xl mx-auto">
                        {/* Main Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-lato font-bold text-center text-[#bab675] mb-6 sm:mb-8">
                            {serviceData.title.toUpperCase()}
                        </h1>
                        
                        {/* Back Button and Full-Width Iframe */}
                        <div className="w-full flex flex-col gap-4">
                            <button
                                onClick={handleBackClick}
                                className="w-full sm:w-auto bg-white text-black border-2 border-white rounded-sm px-6 py-2 text-center font-semibold uppercase tracking-wide block hover:bg-gray-100 transition-colors cursor-pointer self-start"
                            >
                                ← Back
                            </button>
                            <iframe
                                src="https://giridhar.brokersnexus.com"
                                title="Visitor/OPT Student Health Plans Quote"
                                className="w-full h-[800px] sm:h-[900px] lg:h-[1000px] border-0 rounded-lg shadow-lg"
                                allow="fullscreen"
                                loading="lazy"
                                style={{ minHeight: '800px' }}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <ServiceDetail {...serviceData} quoteContent={quoteContent} isEmbedded={false} />
            )}
        </div>
    );
}

export default Visitors_Insurance;