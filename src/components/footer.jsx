import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className = "items-center px-50 my-10">
            <div id = "service links" className = "flex justify-center space-x-3">
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none">
                    <li><Link to="/services/will-trust" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Will & Trust</Link></li>
                    <li><Link to="/services/retirement-planning" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Retirement Planning</Link></li>
                    <li><Link to="/services/life-insurance" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Life Insurance</Link></li>
                    <li><Link to="/services/long-term-care" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Long Term Care</Link></li>
                    <li><Link to="/services/final-expenses" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Final Expenses</Link></li>
                    <li><Link to="/services/real-estate" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Real Estate</Link></li>
                    <li><Link to="/services/investments" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Investments</Link></li>
                    <li><Link to="/services/college-savings" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">College Savings</Link></li>
                    <li><Link to="/services/tax-savings" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Tax Savings</Link></li>
                    <li><Link to="/services/health-insurance" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Health Insurance</Link></li>
                    <li><Link to="/services/visitors-insurance" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Visitors Insurance</Link></li>
                    <li><Link to="/services/business-opportunity" className="text-white uppercase text-[16px] tracking-wider font-semibold font-cabin hover:text-gray-300 transition-colors">Business Opportunity</Link></li>
                </ul>
            </div>
            <h3 className = "text-[#bab675] text-m text-center font-bold p-10">InfyGrow Financial Services LLC</h3>
            <p className = "text-sm text-center pb-10" >Copyright © 2025 Infygrow - All Rights Reserved.</p>
        </footer>
    );
}
export default Footer;