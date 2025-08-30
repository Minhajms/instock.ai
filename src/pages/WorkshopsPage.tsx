import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Star, ArrowRight } from 'lucide-react';

const WorkshopsPage = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);

  const upcomingWorkshops = [
    {
      id: '1',
      title: 'AI Fundamentals for Beginners',
      date: 'March 15, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Virtual',
      capacity: '50 students',
      description: 'Perfect introduction to AI concepts, no technical background required',
      price: 'Free',
      featured: true
    },
    {
      id: '2',
      title: 'ChatGPT for Educators',
      date: 'March 22, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Stanford University',
      capacity: '30 students',
      description: 'Learn how to integrate AI tools into your teaching methodology',
      price: '$29',
      featured: false
    },
    {
      id: '3',
      title: 'AI in Creative Industries',
      date: 'March 29, 2025',
      time: '11:00 AM - 3:00 PM',
      location: 'Virtual',
      capacity: '40 students',
      description: 'Explore AI tools for design, writing, and creative problem-solving',
      price: '$39',
      featured: true
    }
  ];

  const pastEvents = [
    {
      title: 'AI Workshop at UC Berkeley',
      date: 'February 2025',
      attendees: 85,
      rating: 4.9
    },
    {
      title: 'High School AI Bootcamp',
      date: 'January 2025',
      attendees: 120,
      rating: 4.8
    },
    {
      title: 'Corporate AI Training',
      date: 'December 2024',
      attendees: 45,
      rating: 5.0
    }
  ];

  const testimonials = [
    {
      text: "The workshop was incredibly well-structured. I went from knowing nothing about AI to building my first chatbot!",
      author: "Maria Rodriguez",
      role: "Marketing Student"
    },
    {
      text: "As a teacher, this workshop gave me practical tools to incorporate AI into my curriculum effectively.",
      author: "David Kim",
      role: "High School Teacher"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI Workshops & <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our interactive workshops and learn AI in a supportive, hands-on environment. 
            From complete beginners to advanced users, we have something for everyone.
          </p>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-xl text-gray-600">
              Reserve your spot in our next learning adventure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWorkshops.map((workshop) => (
              <div
                key={workshop.id}
                className={`bg-white rounded-2xl shadow-sm border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  workshop.featured ? 'border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50' : 'border-gray-100'
                }`}
              >
                {workshop.featured && (
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-t-2xl text-sm font-medium text-center">
                    Featured Workshop
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {workshop.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      {workshop.capacity}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">
                      {workshop.price}
                    </div>
                    <button 
                      onClick={() => setSelectedWorkshop(workshop.id)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <span>Register</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      {selectedWorkshop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Register for Workshop</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Complete Beginner</option>
                  <option>Some Experience</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setSelectedWorkshop(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-600">
              See what we've accomplished together
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.date}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {event.attendees} attendees
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="text-sm font-medium">{event.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Workshop Reviews
            </h2>
            <p className="text-xl text-gray-600">
              What participants are saying
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl">
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
    </div>
  );
};

export default WorkshopsPage;