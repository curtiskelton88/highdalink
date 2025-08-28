import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import Modal from '../Modal';
import ProgressTracker from '../ProgressTracker';
import AdvancedChart from '../AdvancedChart';
import FileUpload from '../FileUpload';
import { useMessages } from '../../contexts/MessageContext';
import { useAuth } from '../../App';
import { 
  FileText, TrendingUp, Clock, CheckCircle, Eye, Download,
  BarChart3, Calendar, Link2, Award, Star, MessageSquare,
  Send, Reply, Trash2, Upload, Package
} from 'lucide-react';

function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const sidebar = (
    <nav className="p-6 space-y-2">
      <div className="mb-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Navigation</h3>
      </div>
      <button
        onClick={() => setActiveTab('dashboard')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'dashboard' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <BarChart3 className="h-5 w-5 mr-3" />
        <span className="font-medium">Dashboard</span>
      </button>
      <button
        onClick={() => setActiveTab('projects')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'projects' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <FileText className="h-5 w-5 mr-3" />
        <span className="font-medium">My Projects</span>
      </button>
      <button
        onClick={() => setActiveTab('links')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'links' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <Link2 className="h-5 w-5 mr-3" />
        <span className="font-medium">Link Portfolio</span>
      </button>
      <button
        onClick={() => setActiveTab('analytics')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'analytics' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <TrendingUp className="h-5 w-5 mr-3" />
        <span className="font-medium">Analytics</span>
      </button>
      <button
        onClick={() => setActiveTab('files')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'files' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <Upload className="h-5 w-5 mr-3" />
        <span className="font-medium">Files & Reports</span>
      </button>
      <button
        onClick={() => setActiveTab('messages')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'messages' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <MessageSquare className="h-5 w-5 mr-3" />
        <span className="font-medium">Messages</span>
      </button>
      <button
        onClick={() => setActiveTab('support')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'support' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <MessageSquare className="h-5 w-5 mr-3" />
        <span className="font-medium">Support</span>
      </button>
    </nav>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'links':
        return <LinksTab />;
      case 'analytics':
        return <AnalyticsTab />;
      case 'files':
        return <FilesTab />;
      case 'messages':
        return <MessagesTab />;
      case 'support':
        return <SupportTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <DashboardLayout sidebar={sidebar} title="Client Portal">
      <div className="transition-all duration-300 ease-in-out">
        {renderContent()}
      </div>
    </DashboardLayout>
  );
}

function DashboardTab() {
  const { user } = useAuth();
  const [showWelcomeModal, setShowWelcomeModal] = useState(user?.isNewUser || false);
  const [currentPackage] = useState({
    name: 'Authority Pro',
    price: '$1,100',
    linksRemaining: 1,
    totalLinks: 2,
    status: 'Active',
    nextDelivery: '2024-02-05'
  });

  const handleUpgradePackage = () => {
    alert('Redirecting to upgrade options...');
  };

  // Check if user has any delivered links
  const hasDeliveredLinks = false; // This would be determined by actual data
  const hasActiveProjects = false; // This would be determined by actual data

  return (
    <div>
      {/* Welcome Modal for New Users */}
      <Modal
        isOpen={showWelcomeModal}
        onClose={() => setShowWelcomeModal(false)}
        title="Welcome to HighDALink!"
        maxWidth="max-w-2xl"
      >
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
            <p className="text-gray-600">Your account has been created and your campaign is being set up.</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Our team will contact you within 24 hours</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>We'll discuss your specific requirements and goals</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Elite writers will begin creating your content</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>DR90+ editorial backlinks delivered within 7-14 days</span>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <div>
                <h5 className="font-medium text-yellow-800 mb-1">Important Login Information</h5>
                <p className="text-sm text-yellow-700">
                  Your account has been created with email: <strong>{user?.email}</strong><br/>
                  Default password: <strong>demo123</strong><br/>
                  <span className="text-xs">Please change your password in account settings.</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={() => setShowWelcomeModal(false)}
              className="flex-1 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-green-600 transition-all font-semibold"
            >
              Explore Dashboard
            </button>
            <button
              onClick={() => {
                setShowWelcomeModal(false);
                // Could navigate to messages or support
              }}
              className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-all font-semibold"
            >
              Contact Support
            </button>
          </div>
        </div>
      </Modal>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back, {user?.name?.split(' ')[0] || 'Client'}!</h1>
        <p className="text-gray-600 mt-2">Here's an overview of your link building campaigns</p>
      </div>

      {/* Current Package Card */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2">Current Package</h3>
            <div className="text-3xl font-bold mb-1">{currentPackage.name}</div>
            <div className="text-blue-100">{currentPackage.price} package</div>
          </div>
          <div className="text-right">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <div className="text-sm text-blue-100">Links Progress</div>
              <div className="text-xl font-bold">{currentPackage.totalLinks - currentPackage.linksRemaining}/{currentPackage.totalLinks}</div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex space-x-3">
          <button 
            onClick={handleUpgradePackage}
            className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center"
          >
            <Package className="h-4 w-4 mr-2" />
            Upgrade Package
          </button>
          <div className="text-blue-100 text-sm self-center">
            Next delivery: {currentPackage.nextDelivery}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Total Links</p>
              <p className="text-3xl font-bold">0</p>
            </div>
            <Link2 className="h-12 w-12 text-blue-200" />
          </div>
          <div className="flex items-center mt-4 text-blue-100">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">Campaign starting soon</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Avg Domain Rating</p>
              <p className="text-3xl font-bold">DR90+</p>
            </div>
            <Award className="h-12 w-12 text-green-200" />
          </div>
          <div className="flex items-center mt-4 text-green-100">
            <Star className="h-4 w-4 mr-1" />
            <span className="text-sm">Premium quality guaranteed</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Active Projects</p>
              <p className="text-3xl font-bold">1</p>
            </div>
            <FileText className="h-12 w-12 text-orange-200" />
          </div>
          <div className="flex items-center mt-4 text-orange-100">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">Starting soon</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Investment</p>
              <p className="text-3xl font-bold">{currentPackage.price}</p>
            </div>
            <TrendingUp className="h-12 w-12 text-purple-200" />
          </div>
          <div className="flex items-center mt-4 text-purple-100">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">ROI tracking starts after delivery</span>
          </div>
        </div>
      </div>

      {/* Charts - Show only when data is available */}
      {hasDeliveredLinks && (
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Analytics</h3>
            <p className="text-gray-500">Analytics will appear here after your first links are delivered and indexed by search engines.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ranking Progress</h3>
            <p className="text-gray-500">Ranking data will be available 2-4 weeks after link delivery.</p>
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Links Delivered</h3>
          <div className="text-center py-12">
            <Link2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No Links Delivered Yet</h4>
            <p className="text-gray-500 mb-4">Your DR90+ editorial backlinks will appear here once delivered.</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-sm mx-auto">
              <p className="text-sm text-blue-800">
                <strong>Expected Timeline:</strong> 7-14 days from project start
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Updates</h3>
          <div className="text-center py-12">
            <Clock className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">Project Starting Soon</h4>
            <p className="text-gray-500 mb-4">Updates will appear here as your campaign progresses.</p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-sm mx-auto">
              <p className="text-sm text-green-800">
                <strong>Next Step:</strong> Our team will contact you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsTab() {
  const [projects] = useState([
    { 
      id: 1, 
      name: 'Authority Building Campaign', 
      package: 'Authority Pro', 
      status: 'Pending Start', 
      progress: 0, 
      links: 0, 
      totalLinks: 2,
      startDate: 'TBD',
      deadline: 'TBD'
    }
  ]);

  const generateReport = (projectId: number) => {
    alert('Reports will be available after project completion.');
  };

  // Initial milestone data for new projects
  const sampleMilestones = [
    {
      id: '1',
      title: 'Project Kickoff',
      description: 'Initial briefing and strategy discussion',
      status: 'pending' as const,
      date: 'TBD',
      assignee: 'Account Manager'
    },
    {
      id: '2',
      title: 'Content Creation',
      description: 'Elite writers create high-quality articles',
      status: 'pending' as const,
      date: 'TBD',
      assignee: 'Elite Writer Team'
    },
    {
      id: '3',
      title: 'Publication Outreach',
      description: 'Securing placements on DR90+ publications',
      status: 'pending' as const,
      date: 'TBD',
      assignee: 'Outreach Team'
    },
    {
      id: '4',
      title: 'Link Delivery',
      description: 'Final links delivered with comprehensive reporting',
      status: 'pending' as const,
      date: 'TBD',
      assignee: 'Admin Team'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
        <p className="text-gray-600 mt-2">Track your link building campaigns</p>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.package}</p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {project.status}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">Due: {project.deadline}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600">Progress</div>
                  <div className="text-xl font-bold text-gray-900">{project.progress}%</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600">Links Delivered</div>
                  <div className="text-xl font-bold text-gray-900">{project.links}/{project.totalLinks}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600">Started</div>
                  <div className="text-xl font-bold text-gray-900">{project.startDate === 'TBD' ? 'Starting Soon' : project.startDate}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-medium flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  View Details
                </button>
                <button 
                  onClick={() => generateReport(project.id)}
                  className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-medium flex items-center"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download Report
                </button>
              </div>
            </div>

            {/* Progress Tracker for first project */}
            {project.id === 1 && (
              <ProgressTracker
                projectId={project.id.toString()}
                milestones={sampleMilestones}
                completionPercentage={project.progress}
                estimatedCompletion="7-14 days from project start"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function LinksTab() {
  const links: any[] = []; // Empty array for new clients

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Link Portfolio</h1>
        <p className="text-gray-600 mt-2">All your high-authority backlinks</p>
      </div>

      {links.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
          <Link2 className="h-16 w-16 text-gray-300 mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">No Links Delivered Yet</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Your DR90+ editorial backlinks will appear here once they're delivered. Each link will include detailed metrics and verification.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-lg mx-auto">
            <h4 className="font-semibold text-blue-900 mb-2">What to Expect:</h4>
            <ul className="text-sm text-blue-800 space-y-1 text-left">
              <li>• Domain Rating 90+ publications</li>
              <li>• Editorial placements by verified writers</li>
              <li>• Live link verification</li>
              <li>• Comprehensive reporting</li>
              <li>• Delivery within 7-14 days</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Domain</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">DR/DA</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Article Title</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {links.map((link, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{link.domain}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-1">DR{link.dr}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">DA{link.da}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{link.article}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{link.date}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      {link.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    </div>
  );
}

function AnalyticsTab() {
  const generateReport = () => {
    alert('Analytics reports will be available after your first links are delivered and indexed.');
  };

  const hasAnalyticsData = false; // This would be determined by actual delivered links

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Performance</h1>
          <p className="text-gray-600 mt-2">Track the impact of your link building campaigns</p>
        </div>
        <button 
          onClick={generateReport}
          className="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg cursor-not-allowed"
          disabled
        >
          Generate Report
        </button>
      </div>

      {!hasAnalyticsData ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
          <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Coming Soon</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Your performance analytics will be available 2-4 weeks after your first DR90+ editorial backlinks are delivered and indexed by search engines.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-blue-900 mb-2">Traffic Growth</h4>
              <p className="text-sm text-blue-800">Monitor organic traffic increases from your new backlinks</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-green-900 mb-2">Domain Authority</h4>
              <p className="text-sm text-green-800">Track your domain authority improvements over time</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-purple-900 mb-2">Keyword Rankings</h4>
              <p className="text-sm text-purple-800">See how your target keywords climb the search results</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
              <h3 className="text-blue-100">Domain Authority Growth</h3>
              <p className="text-3xl font-bold">+0 DA</p>
              <p className="text-blue-100 text-sm mt-2">Tracking starts after delivery</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white">
              <h3 className="text-green-100">Organic Traffic</h3>
              <p className="text-3xl font-bold">+0%</p>
              <p className="text-green-100 text-sm mt-2">Baseline being established</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white">
              <h3 className="text-purple-100">Keyword Rankings</h3>
              <p className="text-3xl font-bold">+0</p>
              <p className="text-purple-100 text-sm mt-2">Monitoring setup in progress</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function FilesTab() {
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: '1',
      name: 'Welcome_Package.pdf',
      size: 1250000,
      type: 'application/pdf',
      uploadDate: new Date().toISOString(),
      url: '#'
    }
  ]);

  const handleFileUpload = (files: any[]) => {
    setUploadedFiles(files);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Files & Reports</h1>
        <p className="text-gray-600 mt-2">Upload briefs, download reports, and manage project files</p>
      </div>

      <div className="space-y-8">
        {/* File Upload Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Files</h3>
          <p className="text-gray-600 mb-6">Share brand guidelines, content briefs, or any other project-related files with your team.</p>
          
          <FileUpload
            projectId="client-project-1"
            onFileUpload={handleFileUpload}
            existingFiles={uploadedFiles}
            allowedTypes={['pdf', 'doc', 'docx', 'txt', 'png', 'jpg', 'jpeg', 'zip']}
            maxFileSize={25}
            maxFiles={10}
          />
        </div>

        {/* Available Reports */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Reports</h3>
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No Reports Available Yet</h4>
            <p className="text-gray-500 mb-4">Reports will be generated after your campaign is completed.</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-blue-800">
                <strong>Coming Soon:</strong> Link delivery reports, traffic analysis, and performance summaries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessagesTab() {
  const { getUserMessages, sendMessage, deleteMessage, markAsRead, getAllUsers } = useMessages();
  const { user } = useAuth();
  const [showCompose, setShowCompose] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [showMessageDetail, setShowMessageDetail] = useState(false);
  const [composeData, setComposeData] = useState({
    to: '',
    toName: '',
    toRole: 'admin' as 'admin' | 'client' | 'writer',
    subject: '',
    content: ''
  });

  const messages = getUserMessages();
  const allUsers = getAllUsers().filter(u => u.email !== user?.email);

  const handleCompose = () => {
    if (composeData.to && composeData.subject && composeData.content) {
      sendMessage(composeData.to, composeData.toName, composeData.toRole, composeData.subject, composeData.content);
      setComposeData({ to: '', toName: '', toRole: 'admin', subject: '', content: '' });
      setShowCompose(false);
      alert('Message sent successfully!');
    }
  };

  const handleViewMessage = (message: any) => {
    setSelectedMessage(message);
    setShowMessageDetail(true);
    if (!message.read && message.to === user?.email) {
      markAsRead(message.id);
    }
  };

  const handleDeleteMessage = (messageId: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      deleteMessage(messageId);
      if (selectedMessage?.id === messageId) {
        setShowMessageDetail(false);
      }
    }
  };

  const handleReply = () => {
    if (selectedMessage) {
      setComposeData({
        to: selectedMessage.from,
        toName: selectedMessage.fromName,
        toRole: selectedMessage.fromRole,
        subject: `Re: ${selectedMessage.subject}`,
        content: ''
      });
      setShowMessageDetail(false);
      setShowCompose(true);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-2">Communicate with your account manager and writers</p>
        </div>
        <button 
          onClick={() => setShowCompose(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Send className="h-5 w-5 mr-2" />
          Send Message
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Inbox ({messages.length})</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {messages.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No messages yet. Start a conversation by sending a new message.
            </div>
          ) : (
            messages.map((message) => (
              <div 
                key={message.id} 
                className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${!message.read && message.to === user?.email ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''}`}
                onClick={() => handleViewMessage(message)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`font-medium ${!message.read && message.to === user?.email ? 'text-gray-900' : 'text-gray-700'}`}>
                        {message.to === user?.email ? `From: ${message.fromName}` : `To: ${message.toName}`}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        (() => {
                          const role = message.to === user?.email ? message.fromRole : message.toRole;
                          const roleClasses = {
                            'admin': 'bg-purple-100 text-purple-800',
                            'client': 'bg-blue-100 text-blue-800',
                            'writer': 'bg-green-100 text-green-800'
                          };
                          return roleClasses[role] || 'bg-gray-100 text-gray-800';
                        })()
                      }`}>
                        {message.to === user?.email ? message.fromRole : message.toRole}
                      </span>
                      {!message.read && message.to === user?.email && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                      )}
                    </div>
                    <h4 className={`font-medium mb-1 ${!message.read && message.to === user?.email ? 'text-gray-900' : 'text-gray-700'}`}>
                      {message.subject}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{message.content}</p>
                  </div>
                  <div className="text-right ml-4">
                    <span className="text-sm text-gray-500">{formatDate(message.timestamp)}</span>
                    <div className="mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteMessage(message.id);
                        }}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Compose Modal */}
      <Modal
        isOpen={showCompose}
        onClose={() => setShowCompose(false)}
        title="Send Message"
        maxWidth="max-w-2xl"
      >
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <select
              value={composeData.to}
              onChange={(e) => {
                const selectedUser = allUsers.find(u => u.email === e.target.value);
                if (selectedUser) {
                  setComposeData({
                    ...composeData,
                    to: selectedUser.email,
                    toName: selectedUser.name,
                    toRole: selectedUser.role
                  });
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select recipient</option>
              {allUsers.map((user) => (
                <option key={user.email} value={user.email}>
                  {user.name} ({user.role}) - {user.email}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              value={composeData.subject}
              onChange={(e) => setComposeData({...composeData, subject: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter subject"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              value={composeData.content}
              onChange={(e) => setComposeData({...composeData, content: e.target.value})}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              onClick={handleCompose}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </button>
            <button
              onClick={() => setShowCompose(false)}
              className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      {/* Message Detail Modal */}
      <Modal
        isOpen={showMessageDetail}
        onClose={() => setShowMessageDetail(false)}
        title="Message Details"
        maxWidth="max-w-3xl"
      >
        {selectedMessage && (
          <div className="p-6">
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{selectedMessage.subject}</h3>
                  <div className="text-sm text-gray-600">
                    <p><strong>From:</strong> {selectedMessage.fromName} ({selectedMessage.fromRole})</p>
                    <p><strong>To:</strong> {selectedMessage.toName} ({selectedMessage.toRole})</p>
                    <p><strong>Date:</strong> {formatDate(selectedMessage.timestamp)}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteMessage(selectedMessage.id)}
                  className="text-red-500 hover:text-red-700 transition-colors p-2"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.content}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleReply}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Reply className="h-4 w-4 mr-2" />
                Reply
              </button>
              <button
                onClick={() => setShowMessageDetail(false)}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

function SupportTab() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
        <p className="text-gray-600 mt-2">Get help with your campaigns</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Your Account Manager</h3>
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616c78e6e70?w=150&h=150&fit=crop&crop=face"
              alt="Account Manager"
              className="h-16 w-16 rounded-full"
            />
            <div>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-600">Senior Account Manager</div>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm text-green-600">Online now</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Start Slack Conversation
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Schedule Call
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
              <FileText className="h-5 w-5 text-blue-600 mr-3" />
              Request Campaign Report
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
              <Calendar className="h-5 w-5 text-green-600 mr-3" />
              Request Rush Delivery
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
              <MessageSquare className="h-5 w-5 text-purple-600 mr-3" />
              Submit Content Feedback
            </button>
            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
              <TrendingUp className="h-5 w-5 text-orange-600 mr-3" />
              Upgrade Package
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">How long does delivery take?</h4>
            <p className="text-sm text-gray-600">Most campaigns are completed within 7-14 days from approval.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Can I request specific publications?</h4>
            <p className="text-sm text-gray-600">Yes, we can target specific publications based on your requirements.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">How do you ensure link quality?</h4>
            <p className="text-sm text-gray-600">All links come from DR90+ domains through organic editorial placements.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Do you provide reporting?</h4>
            <p className="text-sm text-gray-600">Yes, detailed reports with live links and metrics are provided for every campaign.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;