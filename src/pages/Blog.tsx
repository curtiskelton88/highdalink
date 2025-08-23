import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useBlog } from '../contexts/BlogContext';

function Blog() {
  const { getPublishedPosts } = useBlog();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts - in a real app, this would come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: 'Achieving DR90+ Editorial Backlinks and SEO-Optimized Content: A Comprehensive Guide',
      slug: 'achieving-dr90-editorial-backlinks-seo-guide',
      excerpt: 'Learn the proven strategies for acquiring high-authority editorial backlinks from DR90+ domains and creating content that dominates search rankings.',
      content: `# Achieving DR90+ Editorial Backlinks and SEO-Optimized Content: A Comprehensive Guide for High-Ranking Websites`
    }
  ];
  const publishedPosts = getPublishedPosts();

  const categories = ['all', 'SEO Strategy', 'Link Building', 'Content Marketing', 'Case Studies'];

  const filteredPosts = publishedPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOHead 
        title="Blog - Expert Insights on Link Building & SEO | HighDALink"
        description="Expert insights, strategies, and case studies on DR90+ editorial backlinks, SEO, and digital marketing from the HighDALink team."
        keywords="SEO blog, link building strategies, editorial backlinks, digital marketing insights, SEO tips, content marketing"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert <span className="text-orange-400">SEO Insights</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover proven strategies, industry insights, and expert tips for building authority with DR90+ editorial backlinks
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Articles' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Featured Article */}
                {filteredPosts.find(post => post.featured) && (
                  <div className="lg:col-span-2">
                    <FeaturedArticle post={filteredPosts.find(post => post.featured)!} />
                  </div>
                )}

                {/* Sidebar */}
                <div className="space-y-8">
                  <BlogSidebar />
                </div>
              </div>
            )}

            {/* Regular Articles Grid */}
            {filteredPosts.filter(post => !post.featured).length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.filter(post => !post.featured).map((post) => (
                    <ArticleCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

function FeaturedArticle({ post }: { post: any }) {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.publishDate}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h2>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag: string, index: number) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          
          <Link
            to={`/blog/${post.slug}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center"
          >
            Read More
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ArticleCard({ post }: { post: any }) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <div className="flex items-center space-x-3 text-sm text-gray-600 mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
            {post.category}
          </span>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {post.publishDate}
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            {post.readTime}
          </div>
          
          <Link
            to={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center"
          >
            Read More
            <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
        <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
        <p className="text-blue-100 text-sm mb-4">
          Get the latest SEO insights and link building strategies delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500"
          />
          <button className="w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['DR90+ Backlinks', 'Editorial Links', 'SEO Strategy', 'Link Building', 'Content Marketing', 'Digital PR'].map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 cursor-pointer transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
        <div className="space-y-3">
          <Link to="/get-started" className="block text-blue-600 hover:text-blue-700 font-medium">
            Get Started Today
          </Link>
          <Link to="/pricing" className="block text-blue-600 hover:text-blue-700 font-medium">
            View Pricing
          </Link>
          <Link to="/why-choose-us" className="block text-blue-600 hover:text-blue-700 font-medium">
            Why Choose Us
          </Link>
          <Link to="/contact" className="block text-blue-600 hover:text-blue-700 font-medium">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;