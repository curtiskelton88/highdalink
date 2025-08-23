import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useBlog } from '../contexts/BlogContext';

function BlogPost() {
  const { slug } = useParams();
  const { getPostBySlug } = useBlog();

  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Article URL copied to clipboard!');
    }
  };

  return (
    <>
      <SEOHead 
        title={`${post.title} | HighDALink Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/blog"
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-blue-200 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.publishDate}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <button
                onClick={handleShare}
                className="flex items-center hover:text-white transition-colors"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              {/* Featured Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 lg:h-96 object-cover rounded-xl mb-8"
              />
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-8">$1</h1>')
                      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">$1</h2>')
                      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">$1</h3>')
                      .replace(/^- (.*$)/gm, '<li class="mb-2">$1</li>')
                      .replace(/(<li.*<\/li>)/gs, '<ul class="list-disc list-inside mb-6 space-y-2 text-gray-700">$1</ul>')
                      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-700 underline">$1</a>')
                      .replace(/\n\n/g, '</p><p class="mb-6 text-gray-700 leading-relaxed">')
                      .replace(/^(?!<[h|u|l])/gm, '<p class="mb-6 text-gray-700 leading-relaxed">')
                      .replace(/$(?![<\/])/gm, '</p>')
                  }}
                />
              </div>
              
              {/* Author Bio Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">HD</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">About HighDALink</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        HighDALink is the premier provider of <strong>DR90+ editorial backlinks</strong> and <strong>high-authority link building services</strong>. 
                        Our team of SEO experts and elite writers specializes in <strong>white-hat link building strategies</strong>, 
                        <strong>premium editorial placements</strong>, and <strong>organic SEO growth</strong>. With years of experience in 
                        digital marketing, content creation, and search engine optimization, we've helped hundreds of businesses achieve 
                        top search rankings through strategic link building campaigns.
                      </p>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Our expertise includes <strong>DR90+ editorial backlinks</strong>, <strong>DA90+ editorial backlinks</strong>, 
                        <strong>premium SEO services</strong>, <strong>high-authority link building</strong>, 
                        <strong>organic editorial placements</strong>, and <strong>professional content marketing</strong>. 
                        We work exclusively with elite clients who demand the highest quality backlinks from top-tier publications and authoritative domains.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link 
                          to="/why-choose-us"
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          Learn More About Our Services
                        </Link>
                        <Link 
                          to="/get-started"
                          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                        >
                          Get Started Today
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Authority?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our experts help you acquire DR90+ editorial backlinks and dominate your search rankings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-started"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="text-center text-gray-600">
              <p>More expert insights coming soon...</p>
              <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
                Browse all articles →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogPost;