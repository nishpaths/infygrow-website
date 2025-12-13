import React from 'react';

function ServiceCard({ title, description, link }){
    return(
        <div class="bg-neutral-primary-soft block max-w-sm p-6 shadow-xs text-center">
            <h5 class="mb-3 text-[#bab675] text-2xl font-semibold font-lato tracking-tight text-heading leading-8">{title}</h5>
            <p class="text-[18px] font-semibold mb-6 font-cabin">{description}</p>
            <a href={link} class="inline-flex items-center text-white bg-brand box-border hover:bg-brand-strong hover:text-[#bab675] transition-colors focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                Learn more
                <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </a>
        </div>
    );
}
export default ServiceCard;