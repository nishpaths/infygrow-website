import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
  // Team members organized by hierarchy
  const founder = {
    name: 'Giridhar Patha',
    title: 'Founder & CEO | Your Trusted Financial Leader',
    credentials: 'Licensed Financial Advisor',
    bio: 'With extensive experience in financial planning, Giridhar specializes in helping families build secure wealth through personalized strategies. He is committed to providing transparent, honest advice that helps clients achieve their long-term financial goals.',
  };


  const otherTeamMembers = [
    {
      name: 'Nish Patha',
      title: 'Web Designer | Your Digital Experience Creator',
      credentials: 'Web Designer',
      bio: 'Nish creates engaging digital experiences that make financial planning accessible and user-friendly. He is dedicated to ensuring our clients have a seamless experience when interacting with our services online.',
    },
  ];

  // Reusable card component
  const TeamCard = ({ member, size = 'standard' }) => {
    const isLarge = size === 'large';
    const photoSize = isLarge ? 'w-40 h-40' : 'w-32 h-32';
    const innerPhotoSize = isLarge ? 'w-36 h-36' : 'w-28 h-28';
    const nameSize = isLarge ? 'text-3xl' : 'text-2xl';
    const titleSize = isLarge ? 'text-base' : 'text-sm';
    const bioSize = isLarge ? 'text-base' : 'text-sm';
    const padding = isLarge ? 'p-8' : 'p-6';
    const maxWidth = isLarge ? 'max-w-2xl' : '';

    return (
      <div
        className={`bg-black rounded-lg ${padding} transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#bab675]/20 border border-transparent hover:border-[#bab675]/30 ${maxWidth} ${isLarge ? 'mx-auto' : ''}`}
      >
        {/* Photo Placeholder */}
        <div className={`${photoSize} mx-auto mb-6 rounded-full bg-gradient-to-br from-[#bab675]/20 to-[#bab675]/5 border-2 border-[#bab675]/30 flex items-center justify-center shadow-lg hover:shadow-[#bab675]/40 transition-shadow duration-300`}>
          <div className={`${innerPhotoSize} rounded-full bg-gray-700 flex items-center justify-center`}>
            <span className={`${isLarge ? 'text-5xl' : 'text-4xl'} text-gray-400 font-bold font-montserrat`}>
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>

        {/* Name */}
        <h3 className={`${nameSize} font-bold text-white font-montserrat mb-2 text-center`}>
          {member.name}
        </h3>

        {/* Title */}
        <p className={`text-[#bab675] font-semibold font-lato mb-2 text-center ${titleSize}`}>
          {member.title}
        </p>

        {/* Credentials */}
        <p className="text-gray-400 font-cabin mb-4 text-center text-xs">
          {member.credentials}
        </p>

        {/* Bio */}
        <p className={`text-gray-300 font-cabin ${bioSize} leading-relaxed text-center`}>
          {member.bio}
        </p>
      </div>
    );
  };

  return (
    <>
      {/* Hero/Intro Section */}
      <section className="min-h-[40vh] flex items-center justify-center bg-black px-4 py-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat mb-6">
            Meet the <span className="text-[#bab675]">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-lato mb-8 max-w-3xl mx-auto leading-relaxed">
            Meet the professionals committed to helping you grow safe, secure wealth through personalized financial planning.
          </p>
        </div>
      </section>

      {/* Team Hierarchy Section */}
      <section className="bg-black py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Founder - Featured at Top */}
          <div className="mb-16">
            <TeamCard member={founder} size="large" />
          </div>

          {/* Other Team Members */}
          {otherTeamMembers.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-montserrat mb-8 text-center">
                Our <span className="text-[#bab675]">Team</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {otherTeamMembers.map((member, index) => (
                  <TeamCard key={index} member={member} size="standard" />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-6">
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl text-gray-300 font-lato mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experienced advisors and take the first step toward achieving your financial goals.
          </p>
          <Link to="/contact">
            <button className="bg-[#bab675] text-black font-bold py-4 px-10 rounded hover:bg-[#a8a664] transition-colors text-lg font-cabin">
              Schedule a Consultation With Our Advisors
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Team;
