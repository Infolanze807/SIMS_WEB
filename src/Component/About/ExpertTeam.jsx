import React from 'react';

const ExpertTeam = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Meet Our Team of <span className="text-teal-600">DHA-Licensed Experts</span>
          </h2>
          <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Our team is composed of general practitioners, emergency care physicians, pediatricians, nurses, and wellness professionals, all registered with the Dubai Health Authority (DHA).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Clinical Precision</h4>
            <p className="text-gray-600">With years of experience and ongoing medical training, our doctors are equipped to treat a wide range of conditions on-site — with precision and care.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Clinic-Quality Care</h4>
            <p className="text-gray-600">Each home visit is backed by medical-grade equipment and advanced portable diagnostics, ensuring clinic-quality care in your personal space.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;