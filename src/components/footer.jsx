import React from "react";

function Footer(){
    return(
        <footer className = "items-center px-50 my-10">
            <div id = "service links" className = "flex justify-center space-x-3">
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none">
                    <li><a href="/services/will-trust" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Will & Trust</a></li>
                    <li><a href="/services/retirement-planning" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Retirement Planning</a></li>
                    <li><a href="/services/life-insurance" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Life Insurance</a></li>
                    <li><a href="/services/long-term-care" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Long Term Care</a></li>
                    <li><a href="/services/final-expenses" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Final Expenses</a></li>
                    <li><a href="/services/real-estate" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Real Estate</a></li>
                    <li><a href="/services/investments" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Investments</a></li>
                    <li><a href="/services/college-savings" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">College Savings</a></li>
                    <li><a href="/services/tax-savings" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Tax Savings</a></li>
                    <li><a href="/services/health-insurance" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Health Insurance</a></li>
                    <li><a href="/services/visitors-insurance" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Visitors Insurance</a></li>
                    <li><a href="/services/business-opportunity" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Business Opportunity</a></li>
                </ul>
            </div>
            <h3 className = "text-[#bab675] text-m text-center font-bold p-10">InfyGrow Financial Services LLC</h3>
            <p className = "text-sm text-center pb-10" >Copyright © 2025 Infygrow - All Rights Reserved.</p>
        </footer>
    );
}
export default Footer;