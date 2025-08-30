import React from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Accessibility First",
      description: "Making AI education accessible to everyone, regardless of technical background"
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: "Hands-On Learning",
      description: "Learning by doing with practical projects and real-world applications"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Community Driven",
      description: "Building a supportive community of learners and educators"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Quality Education",
      description: "Delivering high-quality content that's both engaging and educational"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">InstockAI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're on a mission to democratize AI education and make artificial intelligence 
            accessible to students, teachers, and curious minds everywhere.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                InstockAI was born from a simple observation: AI is everywhere, but quality AI education 
                that's accessible to non-technical audiences is rare. We saw students and educators 
                struggling to understand and apply AI concepts in their work and studies.
              </p>
              <p className="text-gray-600 mb-4">
                That's when we decided to bridge this gap. We started with small workshops at local 
                colleges, focusing on making complex AI concepts digestible and actionable. The response 
                was overwhelming - people were hungry for this kind of practical, approachable AI education.
              </p>
              <p className="text-gray-600">
                Today, we've expanded our reach through online courses, comprehensive learning resources, 
                and partnerships with educational institutions. But our core mission remains the same: 
                making AI simple and accessible for everyone.
              </p>
            </div>
            
            <div className="relative">
              {/* Abstract illustration using CSS */}
              <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 h-80">
                <div className="absolute top-8 left-8 w-16 h-16 bg-blue-500 rounded-lg opacity-80 rotate-12"></div>
                <div className="absolute top-16 right-12 w-12 h-12 bg-green-500 rounded-full opacity-70"></div>
                <div className="absolute bottom-12 left-12 w-14 h-14 bg-orange-500 rounded-lg opacity-75 -rotate-12"></div>
                <div className="absolute bottom-8 right-8 w-10 h-10 bg-purple-500 rounded-full opacity-80"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-blue-300 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To demystify artificial intelligence and empower individuals with the knowledge, 
                skills, and confidence to embrace AI in their personal and professional lives. 
                We believe that AI education should be inclusive, engaging, and practical.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                A world where AI literacy is as fundamental as digital literacy, where everyone 
                has the opportunity to understand, create with, and benefit from artificial 
                intelligence technologies, regardless of their technical background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
            <p className="text-xl text-gray-600">
              The passionate educators behind InstockAI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <div className="text-4xl font-bold text-white">JS</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jamie Smith</h3>
              <p className="text-blue-600 font-medium mb-4">Co-Founder & Lead Educator</p>
              <p className="text-gray-600">
                Former data scientist with 8 years of experience in machine learning. 
                Passionate about making complex AI concepts accessible to everyone through 
                engaging workshops and hands-on learning experiences.
              </p>
            </div>
            
            {/* Founder 2 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <div className="text-4xl font-bold text-white">AP</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alex Patel</h3>
              <p className="text-green-600 font-medium mb-4">Co-Founder & Technology Director</p>
              <p className="text-gray-600">
                Education technology specialist with a background in curriculum development. 
                Focuses on creating innovative learning platforms and resources that make 
                AI education interactive and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;