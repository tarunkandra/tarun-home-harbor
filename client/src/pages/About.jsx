import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto bg-gray-100'>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className='text-3xl font-bold mb-6 text-slate-800'>About Home Harbor</h1>
        <div className="about-text">
          <p className='mb-6 text-lg text-slate-700'>Home Harbor is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
          <p className='mb-6 text-lg text-slate-700'>
            Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
          </p>
          <p className='mb-6 text-lg text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
        </div>
      </div>
      <style jsx>{`
        .about-text {
          animation: slide-in 1s ease-out; /* Animation for text */
        }

        @keyframes slide-in {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .bg-gray-100 {
         
          height: 100vh;
          width: 100vw; /* Set width to full viewport width */
        }

        .mb-6 {
          margin-bottom: 1.5rem; /* Adjusted margin for better spacing */
        }

        /* Additional CSS styles */
      `}</style>
    </div>
  );
}
