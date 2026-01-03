import React from 'react';
import { Link } from 'react-router-dom';

function ServiceDetail({ title, header, description, benefits, quoteContent, isEmbedded }) {
    return (
        <div className="bg-black text-white px-4 sm:px-6 lg:px-8 my-10 sm:my-16">
            <div className="max-w-7xl mx-auto">
                {/* Main Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-lato font-bold text-center text-[#bab675] mb-6 sm:mb-8">
                    {title.toUpperCase()}
                </h1>

                {/* Layout: If embedded iframe exists, use side-by-side layout; otherwise 2-column */}
                {quoteContent && isEmbedded ? (
                    <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 mb-8">
                        {/* Left: Description and Benefits */}
                        <div className="w-full xl:basis-2/5 flex flex-col gap-6">
                            {/* Description */}
                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-cabin font-semibold mb-3 sm:mb-4 text-white">
                                    {header}
                                </h2>
                                <p className="text-sm sm:text-base font-cabin leading-relaxed text-white">
                                    {description}
                                </p>
                            </div>

                            {/* Key Benefits */}
                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold font-cabin mb-3 sm:mb-4 text-white">
                                    Key Benefits
                                </h2>
                                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base font-cabin text-white">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="mr-2 text-white font-cabin">•</span>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right: Embedded Quote Form */}
                        <div className="w-full xl:basis-3/5">
                            {quoteContent}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-stretch md:gap-10 mb-8">
                            {/* Left: What it Provides */}
                            <div className="w-full md:basis-2/3">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-cabin font-semibold mb-3 sm:mb-4 text-white">
                                    {header}
                                </h2>
                                <p className="text-sm sm:text-base font-cabin leading-relaxed text-white">
                                    {description}
                                </p>
                            </div>

                            {/* Right: Key Benefits */}
                            <div className="w-full md:basis-1/3">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold font-cabin mb-3 sm:mb-4 text-white">
                                    Key Benefits
                                </h2>
                                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base font-cabin text-white">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="mr-2 text-white font-cabin">•</span>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                {!quoteContent && (
                                    <div className="mt-6 sm:mt-8">
                                        <Link 
                                            to="/contact" 
                                            className="inline-block w-full sm:w-auto text-center border-2 border-white rounded-sm bg-black text-white px-6 sm:px-8 py-3 font-cabin font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
                                        >
                                            CONTACT US
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Quote Button - Show below description and benefits for button-based quotes */}
                        {quoteContent && !isEmbedded && (
                            <div className="flex justify-center mt-8">
                                {quoteContent}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default ServiceDetail;