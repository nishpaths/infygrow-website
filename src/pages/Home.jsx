import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import landingImg from '../assets/InfyGrow_landing.png';
import {
  CheckCircleIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  DocumentTextIcon,
  CalendarIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

function Home() {
  // Refs for scroll animations
  const valueGridRef = useRef(null);
  const socialProofRef = useRef(null);
  const processRef = useRef(null);
  const whyRef = useRef(null);
  const teamRef = useRef(null);
  const finalCtaRef = useRef(null);

  // Use useInView hooks
  const valueGridInView = useInView(valueGridRef, { once: true, amount: 0.2 });
  const socialProofInView = useInView(socialProofRef, { once: true, amount: 0.2 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const whyInView = useInView(whyRef, { once: true, amount: 0.2 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });
  const finalCtaInView = useInView(finalCtaRef, { once: true, amount: 0.2 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };


  // Testimonials data
  const testimonials = [
    {
      name: "Sarah L.",
      text: "InfyGrow helped my family reduce taxes and plan for college — I finally feel in control.",
      rating: 5
    },
    {
      name: "John M.",
      text: "The team made retirement planning simple and clear. Highly recommend!",
      rating: 5
    },
    {
      name: "Maria R.",
      text: "Transparent advice and personalized service. Best financial decision we made.",
      rating: 5
    }
  ];

  // Process steps
  const processSteps = [
    {
      title: "Schedule Your Free Review",
      icon: CalendarIcon,
      description: "Book a no-obligation consultation to discuss your financial goals"
    },
    {
      title: "Personalized Assessment",
      icon: ClipboardDocumentCheckIcon,
      description: "We analyze your current situation and identify opportunities"
    },
    {
      title: "Custom Financial Roadmap",
      icon: DocumentTextIcon,
      description: "Receive a tailored plan designed specifically for your needs"
    },
    {
      title: "Ongoing Support",
      icon: ArrowPathIcon,
      description: "Continuous guidance and adjustments as your life evolves"
    }
  ];

  // Value propositions
  const valueProps = [
    {
      title: "Personalized Financial Plans",
      icon: DocumentTextIcon,
      description: "Custom strategies tailored to your unique goals and situation"
    },
    {
      title: "Transparent, No-Pressure Guidance",
      icon: ShieldCheckIcon,
      description: "Honest advice with clear communication and no hidden fees"
    },
    {
      title: "Holistic Approach",
      icon: ChartBarIcon,
      description: "Comprehensive coverage of retirement, tax, insurance & investments"
    },
    {
      title: "Trusted, Local Arizona Team",
      icon: UserGroupIcon,
      description: "Experienced advisors who understand your local needs"
    }
  ];

  // Team members (mini intro)
  const teamMembers = [
    {
      name: "Giridhar Patha",
      title: "Founder & CEO",
      initials: "GP"
    },
    {
      name: "Radhika Pippiri",
      title: "Partner & Financial Advisor",
      initials: "RP"
    },
    {
      name: "Bhavani Battu",
      title: "Partner & Financial Advisor",
      initials: "BB"
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-black">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(186, 182, 117, 0.15) 0%, transparent 50%)"
          }}
          animate={{
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-[#bab675] font-semibold font-lato mb-4"
              >
                GROWING SAFE AND SECURE WEALTH
              </motion.p>
              
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-montserrat mb-6 leading-tight"
              >
                Grow Safe & Secure Wealth With{" "}
                <span className="text-[#bab675]">InfyGrow</span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-white font-lato mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Plan for tomorrow today!
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#bab675] text-black font-bold py-4 px-8 rounded hover:bg-[#a8a664] transition-colors text-lg font-cabin w-full sm:w-auto"
                  >
                    Schedule Free Review
                  </motion.button>
                </Link>
                <Link to="/why-us">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded hover:bg-white hover:text-black transition-colors text-lg font-cabin w-full sm:w-auto"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-300"
              >
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-[#bab675]" />
                  <span className="font-cabin">Licensed Advisors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-[#bab675]" />
                  <span className="font-cabin">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-[#bab675]" />
                  <span className="font-cabin">No Pressure</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.img
                src={landingImg}
                alt="InfyGrow Landing"
                className="w-full max-w-lg mx-auto lg:max-w-full object-cover rounded-lg shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUE GRID SECTION */}
      <section ref={valueGridRef} className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial="hidden"
            animate={valueGridInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white font-montserrat mb-12"
          >
            Why Choose <span className="text-[#bab675]">InfyGrow</span>?
          </motion.h2>

          <motion.div
            initial="hidden"
            animate={valueGridInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {valueProps.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-[#bab675] transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-[#bab675] mb-4" />
                <h3 className="text-xl font-bold text-white font-lato mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-cabin">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section ref={socialProofRef} className="py-24 px-4 bg-neutral-900 relative">
        {/* Smooth transition */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-neutral-900 pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.h2
            initial="hidden"
            animate={socialProofInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white font-montserrat mb-12"
          >
            What Our <span className="text-[#bab675]">Clients Say</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            animate={socialProofInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-black p-6 rounded-lg border border-neutral-800"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIconSolid key={i} className="w-5 h-5 text-[#bab675]" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-300 font-cabin mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#bab675]/30 to-[#bab675]/10 border-2 border-[#bab675]/30 flex items-center justify-center">
                    <span className="text-white font-bold font-montserrat">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold font-lato">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm font-cabin">Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* As Featured In */}
          <motion.div
            initial="hidden"
            animate={socialProofInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-gray-400 font-cabin mb-4">As featured in</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {/* Placeholder logos - can be replaced with actual logos */}
              <div className="h-12 w-32 bg-neutral-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs font-cabin">Logo 1</span>
              </div>
              <div className="h-12 w-32 bg-neutral-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs font-cabin">Logo 2</span>
              </div>
              <div className="h-12 w-32 bg-neutral-800 rounded flex items-center justify-center">
                <span className="text-gray-500 text-xs font-cabin">Logo 3</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section ref={processRef} className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white font-montserrat mb-16"
          >
            How We <span className="text-[#bab675]">Work</span>
          </motion.h2>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <motion.div
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="relative"
            >
              {/* Connecting Line */}
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-neutral-700">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#bab675]"
                  initial={{ width: 0 }}
                  animate={processInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>

              <div className="grid grid-cols-4 gap-8 relative">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto bg-[#bab675] rounded-full flex items-center justify-center relative z-10">
                        <step.icon className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white font-lato mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 font-cabin text-sm">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <motion.div
              initial="hidden"
              animate={processInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="relative"
            >
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-700">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-[#bab675]"
                  initial={{ height: 0 }}
                  animate={processInView ? { height: "100%" } : { height: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex gap-6 relative pl-4"
                  >
                    <div className="w-16 h-16 bg-[#bab675] rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <step.icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold text-white font-lato mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 font-cabin">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY INFYGROW SECTION */}
      <section ref={whyRef} className="py-24 px-4 bg-neutral-900 relative">
        {/* Smooth transition */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-neutral-900 pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.h2
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white font-montserrat mb-12"
          >
            Why Clients Choose <span className="text-[#bab675]">InfyGrow</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-black p-6 rounded-lg border-l-4 border-[#bab675]"
            >
              <CheckCircleIcon className="w-10 h-10 text-[#bab675] mb-4" />
              <h3 className="text-2xl font-bold text-white font-lato mb-3">
                Personalized Financial Plans
              </h3>
              <p className="text-gray-300 font-cabin">
                Custom strategies designed specifically for your family's unique situation and goals.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-black p-6 rounded-lg border-l-4 border-[#bab675]"
            >
              <ShieldCheckIcon className="w-10 h-10 text-[#bab675] mb-4" />
              <h3 className="text-2xl font-bold text-white font-lato mb-3">
                Transparent, No-Pressure Guidance
              </h3>
              <p className="text-gray-300 font-cabin">
                Honest advice with clear communication. No hidden fees or pushy sales tactics.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-black p-6 rounded-lg border-l-4 border-[#bab675]"
            >
              <ChartBarIcon className="w-10 h-10 text-[#bab675] mb-4" />
              <h3 className="text-2xl font-bold text-white font-lato mb-3">
                Holistic Approach
              </h3>
              <p className="text-gray-300 font-cabin">
                Comprehensive coverage of Retirement, Tax, Insurance & Investments all in one place.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-black p-6 rounded-lg border-l-4 border-[#bab675]"
            >
              <UserGroupIcon className="w-10 h-10 text-[#bab675] mb-4" />
              <h3 className="text-2xl font-bold text-white font-lato mb-3">
                Trusted, Local Team
              </h3>
              <p className="text-gray-300 font-cabin">
                Experienced advisors who understand your local needs and are here for the long term.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* FINAL CTA SECTION */}
      <section ref={finalCtaRef} className="py-24 px-4 bg-gradient-to-br from-black via-neutral-900 to-black relative overflow-hidden">
        {/* Smooth transition from Why InfyGrow section */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-neutral-900 via-neutral-900/60 via-neutral-900/30 to-transparent pointer-events-none" />
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#bab675]/10 via-transparent to-[#bab675]/10" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial="hidden"
            animate={finalCtaInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-montserrat mb-6"
            >
              Ready To Grow Your <span className="text-[#bab675]">Secure Wealth</span>?
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 font-lato mb-10 max-w-2xl mx-auto"
            >
              Schedule your free consultation today and take the first step toward financial security.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#bab675] text-black font-bold py-4 px-10 rounded hover:bg-[#a8a664] transition-colors text-lg md:text-xl font-cabin w-full sm:w-auto"
                >
                  Schedule My FREE Consultation
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300"
            >
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-[#bab675] transition-colors font-cabin"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(123) 456-7890</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:text-[#bab675] transition-colors font-cabin"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact Us</span>
              </Link>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-gray-400 mt-8 font-cabin"
            >
              Free consultation • No obligation • Personalized advice
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;
