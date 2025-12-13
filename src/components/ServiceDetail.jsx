import React from 'react';
import { Link } from 'react-router-dom';

function ServiceDetail({ title, header, description, benefits }) {
    return (
        <div className="bg-black text-white px-4 sm:px-6 lg:px-8 my-40">
            <div className="max-w-6xl mx-auto">
                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-lato font-bold text-center text-[#bab675] mb-12 sm:mb-16 md:mb-20">
                    {title.toUpperCase()}
                </h1>

                {/* Two Column Layout */}
                <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:items-stretch md:gap-10 mb-16">
                    {/* Left: What it Provides */}
                    <div className="w-full md:basis-2/3">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-cabin font-semibold mb-4 sm:mb-6 text-white">
                            {header}
                        </h2>
                        <p className="text-base font-cabin sm:text-[18px] leading-relaxed text-white">
                            {description}
                        </p>
                    </div>

                    {/* Right: Key Benefits */}
                    <div className="w-full md:basis-1/3">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-cabin mb-4 sm:mb-6 text-white">
                            Key Benefits
                        </h2>
                        <ul className="space-y-2 sm:space-y-3 text-base font-cabin sm:text-[18px] text-white">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2 text-white font-cabin">•</span>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 sm:mt-10">
                            <Link 
                                to="/contact" 
                                className="inline-block w-full sm:w-auto text-center border-2 border-white rounded-sm bg-black text-white px-6 sm:px-8 py-3 font-cabin font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
                            >
                                CONTACT US
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetail;