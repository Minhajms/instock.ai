import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Lightbulb, Star } from 'lucide-react';

const HomePage = () => {
  const testimonials = [
    {
      text: "InstockAI made AI concepts so easy to understand. The workshops are interactive and fun!",
      author: "Sarah Chen",
      role: "Computer Science Student"
    },
    {
      text: "As a teacher, these resources helped me introduce AI to my students in an engaging way.",
      author: "Mark Rodriguez",
      role: "High School Teacher"
    },
    {
      text: "I went from complete beginner to building my first AI project in just 3 workshops!",
      author: "Alex Thompson",
      role: "Marketing Professional"
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Interactive Workshops",
      description: "Hands-on learning experiences designed for all skill levels"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      title: "Free Resources",
      description: "Access tutorials, guides, and tools to start your AI journey"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Real Applications",
      description: "Learn how AI is transforming industries and daily life"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              {/* Abstract AI illustration using CSS */}
              <div className="relative mx-auto w-64 h-32 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-4 left-8 w-6 h-6 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-8 right-12 w-4 h-4 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-16 w-5 h-5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-12 left-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '3s' }}></div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI Made{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Simple
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the power of artificial intelligence through hands-on workshops, 
              interactive tutorials, and a supportive community. No tech background required!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/workshops"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Join the AI Movement</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/learning-hub"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
              >
                Explore Free Resources
              </Link>
            </div>
            
            <div className="mt-12 flex justify-center items-center space-x-8 text-gray-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm">Students Taught</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-sm">Workshops Delivered</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">15+</div>
                <div className="text-sm">Partner Colleges</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose InstockAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We break down complex AI concepts into digestible, actionable learning experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real learners
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of learners who are already exploring the future of technology
          </p>
          <Link
            to="/workshops"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <span>Book Your First Workshop</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;