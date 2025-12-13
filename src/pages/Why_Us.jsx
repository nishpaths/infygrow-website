import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircleIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  DocumentTextIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  LightBulbIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

function Why_Us() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-black px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat mb-6">
            Why Choose <span className="text-[#bab675]">InfyGrow</span>?
          </h1>
          <p className="text-xl md:text-2xl text-white font-lato mb-8 max-w-3xl mx-auto leading-relaxed">
            We help families build secure wealth with clear plans, honest advice, and personal support.
          </p>
          <Link to="/contact">
            <button className="bg-[#bab675] text-black font-bold py-4 px-10 rounded hover:bg-[#a8a664] transition-colors text-lg font-cabin">
              Get Your Free Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-montserrat mb-16">
            Our Core Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Wealth Building */}
            <div className="bg-black p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <ChartBarIcon className="w-10 h-10 text-[#bab675] mr-4" />
                <h3 className="text-2xl font-bold text-[#bab675] font-lato">
                  Wealth Building Strategies
                </h3>
              </div>
              <p className="text-lg text-white mb-4 font-cabin">
                We help you identify and pursue growth, income, and diversification aligned with your goals.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 font-cabin">
                <li>Income Growth</li>
                <li>Diversification</li>
                <li>Risk-adjusted investments</li>
                <li>Long-term wealth accumulation</li>
              </ul>
            </div>

            {/* Emergency Fund */}
            <div className="bg-black p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <ShieldCheckIcon className="w-10 h-10 text-[#bab675] mr-4" />
                <h3 className="text-2xl font-bold text-[#bab675] font-lato">
                  Emergency Fund Protection
                </h3>
              </div>
              <p className="text-lg text-white mb-4 font-cabin">
                Building a safety net to protect your family from unexpected financial challenges.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 font-cabin">
                <li>Liquid savings strategies</li>
                <li>Emergency fund sizing</li>
                <li>Accessible protection</li>
                <li>Peace of mind planning</li>
              </ul>
            </div>

            {/* Tax Optimization */}
            <div className="bg-black p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <BanknotesIcon className="w-10 h-10 text-[#bab675] mr-4" />
                <h3 className="text-2xl font-bold text-[#bab675] font-lato">
                  Tax Savings & Optimization
                </h3>
              </div>
              <p className="text-lg text-white mb-4 font-cabin">
                Strategic tax planning to maximize your savings and minimize your tax burden.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 font-cabin">
                <li>Tax-efficient investing</li>
                <li>Retirement account strategies</li>
                <li>Deduction optimization</li>
                <li>Long-term tax planning</li>
              </ul>
            </div>

            {/* Estate Planning */}
            <div className="bg-black p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <DocumentTextIcon className="w-10 h-10 text-[#bab675] mr-4" />
                <h3 className="text-2xl font-bold text-[#bab675] font-lato">
                  Estate & Legacy Planning
                </h3>
              </div>
              <p className="text-lg text-white mb-4 font-cabin">
                Ensuring your wealth is protected and passed on according to your wishes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 font-cabin">
                <li>Will and trust services</li>
                <li>Beneficiary planning</li>
                <li>Estate tax strategies</li>
                <li>Legacy preservation</li>
              </ul>
            </div>

            {/* Retirement Planning */}
            <div className="bg-black p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <BuildingLibraryIcon className="w-10 h-10 text-[#bab675] mr-4" />
                <h3 className="text-2xl font-bold text-[#bab675] font-lato">
                  Retirement Planning
                </h3>
              </div>
              <p className="text-lg text-white mb-4 font-cabin">
                Creating a comprehensive plan to ensure a secure and comfortable retirement.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 font-cabin">
                <li>Retirement goal setting</li>
                <li>401(k) and IRA strategies</li>
                <li>Income planning</li>
                <li>Healthcare considerations</li>
              </ul>
            </div>

            {/* Insurance Protection */}
            <div className="bg-black p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <ShieldCheckIcon className="w-10 h-10 text-[#bab675] mr-4" />
                <h3 className="text-2xl font-bold text-[#bab675] font-lato">
                  Insurance & Protection
                </h3>
              </div>
              <p className="text-lg text-white mb-4 font-cabin">
                Comprehensive protection for your family's health, life, and financial security.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 font-cabin">
                <li>Life insurance planning</li>
                <li>Health insurance solutions</li>
                <li>Long-term care planning</li>
                <li>Disability protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="bg-black py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-6">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-lato">
            Let's discuss how we can help you achieve your financial goals.
          </p>
          <Link to="/contact">
            <button className="bg-white text-black font-bold py-3 px-8 rounded border-2 border-[#bab675] hover:bg-[#bab675] hover:text-black transition-colors text-lg font-cabin">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* How We Help - Service Outcomes */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-montserrat mb-16">
            How We Help You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg">
              <UserGroupIcon className="w-12 h-12 text-[#bab675] mb-4" />
              <h3 className="text-xl font-bold text-white font-lato mb-3">Personalized Financial Plans</h3>
              <p className="text-gray-300 font-cabin mb-4">
                Custom strategies designed specifically for your family's unique situation and goals.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm font-cabin">
                <li>Goal-based planning</li>
                <li>Risk assessment</li>
                <li>Customized solutions</li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <LightBulbIcon className="w-12 h-12 text-[#bab675] mb-4" />
              <h3 className="text-xl font-bold text-white font-lato mb-3">Education & Guidance</h3>
              <p className="text-gray-300 font-cabin mb-4">
                Clear explanations in plain language so you understand every decision and strategy.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm font-cabin">
                <li>Jargon-free communication</li>
                <li>Regular check-ins</li>
                <li>Ongoing education</li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <ChartBarIcon className="w-12 h-12 text-[#bab675] mb-4" />
              <h3 className="text-xl font-bold text-white font-lato mb-3">Investment Management</h3>
              <p className="text-gray-300 font-cabin mb-4">
                Professional portfolio management aligned with your risk tolerance and time horizon.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm font-cabin">
                <li>Diversified portfolios</li>
                <li>Regular rebalancing</li>
                <li>Performance monitoring</li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <DocumentTextIcon className="w-12 h-12 text-[#bab675] mb-4" />
              <h3 className="text-xl font-bold text-white font-lato mb-3">Retirement Readiness</h3>
              <p className="text-gray-300 font-cabin mb-4">
                Comprehensive planning to ensure you can retire comfortably and securely.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm font-cabin">
                <li>Retirement projections</li>
                <li>Withdrawal strategies</li>
                <li>Healthcare planning</li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <BanknotesIcon className="w-12 h-12 text-[#bab675] mb-4" />
              <h3 className="text-xl font-bold text-white font-lato mb-3">Tax Strategy</h3>
              <p className="text-gray-300 font-cabin mb-4">
                Minimize your tax burden while maximizing your savings and investment returns.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm font-cabin">
                <li>Tax-efficient strategies</li>
                <li>Deduction optimization</li>
                <li>Year-round planning</li>
              </ul>
            </div>

            <div className="bg-black p-6 rounded-lg">
              <ShieldCheckIcon className="w-12 h-12 text-[#bab675] mb-4" />
              <h3 className="text-xl font-bold text-white font-lato mb-3">Protection Planning</h3>
              <p className="text-gray-300 font-cabin mb-4">
                Safeguard your family's future with comprehensive insurance and protection strategies.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm font-cabin">
                <li>Life insurance review</li>
                <li>Health coverage analysis</li>
                <li>Estate protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why InfyGrow vs Competitors */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-montserrat mb-16">
            Why InfyGrow vs. Competitors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg border-l-4 border-[#bab675]">
              <h3 className="text-2xl font-bold text-[#bab675] font-lato mb-4">Personalized Service</h3>
              <p className="text-white font-cabin mb-4">
                Unlike large firms where you're just a number, we take time to understand your unique situation and build genuine relationships.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 font-cabin">
                <li>Direct access to your advisor</li>
                <li>Customized solutions, not cookie-cutter plans</li>
                <li>Regular personal check-ins</li>
              </ul>
            </div>

            <div className="bg-black p-8 rounded-lg border-l-4 border-[#bab675]">
              <h3 className="text-2xl font-bold text-[#bab675] font-lato mb-4">Transparent Pricing</h3>
              <p className="text-white font-cabin mb-4">
                No hidden fees or confusing commission structures. We believe in clear, upfront communication about costs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 font-cabin">
                <li>Clear fee structure</li>
                <li>No surprise charges</li>
                <li>Value-focused approach</li>
              </ul>
            </div>

            <div className="bg-black p-8 rounded-lg border-l-4 border-[#bab675]">
              <h3 className="text-2xl font-bold text-[#bab675] font-lato mb-4">Holistic Approach</h3>
              <p className="text-white font-cabin mb-4">
                We don't just manage investments. We coordinate all aspects of your financial life for true comprehensive planning.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 font-cabin">
                <li>Integration of all financial areas</li>
                <li>Coordinated strategy across services</li>
                <li>Big-picture thinking</li>
              </ul>
            </div>

            <div className="bg-black p-8 rounded-lg border-l-4 border-[#bab675]">
              <h3 className="text-2xl font-bold text-[#bab675] font-lato mb-4">Clear Communication</h3>
              <p className="text-white font-cabin mb-4">
                Financial jargon can be intimidating. We explain everything in plain language so you're confident in every decision.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 font-cabin">
                <li>Plain language explanations</li>
                <li>Regular progress updates</li>
                <li>Education-focused approach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="bg-black py-20 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-montserrat mb-12">
            Trust & Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#bab675] font-lato mb-6">Professional Credentials</h3>
              <p className="text-white font-cabin mb-4">
                Our team holds industry-recognized certifications and licenses to serve you with expertise and integrity.
              </p>
              <ul className="space-y-3 text-gray-300 font-cabin">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-[#bab675] mr-3" />
                  <span>Licensed Financial Advisors</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-[#bab675] mr-3" />
                  <span>Industry Certifications</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-[#bab675] mr-3" />
                  <span>Ongoing Professional Education</span>
                </li>
              </ul>
            </div>
            <div className="bg-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#bab675] font-lato mb-6">Licensed to Serve</h3>
              <p className="text-white font-cabin mb-4">
                We are licensed to provide financial services in multiple states, ensuring we can serve you wherever you are.
              </p>
              <p className="text-gray-300 font-cabin italic">
                {/* Placeholder for licensed states - to be updated with actual states */}
                Licensed in multiple states across the United States
              </p>
              <p className="text-white font-cabin mt-6">
                Contact us to confirm we're licensed in your state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-montserrat mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-lato max-w-2xl mx-auto">
            Let's work together to build a comprehensive financial plan that protects and grows your wealth.
          </p>
          <Link to="/contact">
            <button className="bg-[#bab675] text-black font-bold py-4 px-12 rounded hover:bg-[#a8a664] transition-colors text-lg font-cabin inline-flex items-center">
              Get Started Today
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </Link>
          <p className="text-gray-400 mt-6 font-cabin">
            Free consultation • No obligation • Personalized advice
          </p>
        </div>
      </section>
    </>
  );
}

export default Why_Us;
