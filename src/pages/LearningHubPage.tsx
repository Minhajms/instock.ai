import React, { useState } from 'react';
import { Search, BookOpen, Video, FileText, ExternalLink, Clock, Star } from 'lucide-react';

const LearningHubPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tutorials', 'Articles', 'Tools', 'Courses'];

  const resources = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      description: 'Learn the fundamentals of ML algorithms and applications',
      type: 'Tutorial',
      duration: '15 min read',
      difficulty: 'Beginner',
      rating: 4.8,
      category: 'Tutorials',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 2,
      title: 'ChatGPT Best Practices Guide',
      description: 'Master prompt engineering and get better AI responses',
      type: 'Article',
      duration: '10 min read',
      difficulty: 'Beginner',
      rating: 4.9,
      category: 'Articles',
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 3,
      title: 'Building Your First AI Chatbot',
      description: 'Step-by-step video guide to creating a simple chatbot',
      type: 'Video Course',
      duration: '45 min',
      difficulty: 'Intermediate',
      rating: 4.7,
      category: 'Courses',
      icon: <Video className="w-5 h-5" />
    },
    {
      id: 4,
      title: 'AI Ethics and Responsible Use',
      description: 'Understanding the ethical implications of AI technology',
      type: 'Article',
      duration: '12 min read',
      difficulty: 'Beginner',
      rating: 4.6,
      category: 'Articles',
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 5,
      title: 'Data Visualization with AI',
      description: 'Create stunning charts and graphs using AI tools',
      type: 'Tutorial',
      duration: '20 min read',
      difficulty: 'Intermediate',
      rating: 4.8,
      category: 'Tutorials',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 6,
      title: 'AI Writing Assistant Setup',
      description: 'Configure and optimize AI writing tools for productivity',
      type: 'Tool Guide',
      duration: '8 min read',
      difficulty: 'Beginner',
      rating: 4.5,
      category: 'Tools',
      icon: <ExternalLink className="w-5 h-5" />
    }
  ];

  const blogPosts = [
    {
      title: 'The Future of AI in Education',
      excerpt: 'Exploring how artificial intelligence is transforming learning experiences...',
      date: 'March 10, 2025',
      readTime: '5 min read',
      author: 'Jamie Smith'
    },
    {
      title: 'Top 10 AI Tools for Students',
      excerpt: 'Discover the most useful AI applications that can boost your productivity...',
      date: 'March 5, 2025',
      readTime: '7 min read',
      author: 'Alex Patel'
    },
    {
      title: 'Demystifying Natural Language Processing',
      excerpt: 'Breaking down NLP concepts in simple, understandable terms...',
      date: 'February 28, 2025',
      readTime: '10 min read',
      author: 'Jamie Smith'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI Learning <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Hub</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your free resource library for AI education. Tutorials, guides, tools, and insights 
            to accelerate your AI learning journey.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    {resource.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                    {resource.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {resource.duration}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span className="text-sm font-medium">{resource.rating}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-medium hover:shadow-md transition-all duration-200">
                  Access Resource
                </button>
              </div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest AI trends and insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center space-x-1">
                      <span>Read More</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest AI resources and insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningHubPage;