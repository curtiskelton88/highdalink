import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import Modal from '../Modal';
import AdvancedChart from '../AdvancedChart';
import FileUpload from '../FileUpload';
import { useMessages } from '../../contexts/MessageContext';
import { useAuth } from '../../App';
import { 
  FileText, Clock, CheckCircle, DollarSign, Award, Calendar,
  BarChart3, Upload, Eye, Edit, MessageSquare, TrendingUp, CreditCard, Save,
  Send, Reply, Trash2
} from 'lucide-react';

function WriterDashboard() {
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
        onClick={() => setActiveTab('assignments')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'assignments' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <FileText className="h-5 w-5 mr-3" />
        <span className="font-medium">Assignments</span>
      </button>
      <button
        onClick={() => setActiveTab('submissions')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'submissions' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <Upload className="h-5 w-5 mr-3" />
        <span className="font-medium">Submissions</span>
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
        <span className="font-medium">Files & Briefs</span>
      </button>
      <button
        onClick={() => setActiveTab('earnings')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'earnings' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <DollarSign className="h-5 w-5 mr-3" />
        <span className="font-medium">Earnings</span>
      </button>
      <button
        onClick={() => setActiveTab('payment-settings')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'payment-settings' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <CreditCard className="h-5 w-5 mr-3" />
        <span className="font-medium">Payment Settings</span>
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
        onClick={() => setActiveTab('profile')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'profile' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <Award className="h-5 w-5 mr-3" />
        <span className="font-medium">Profile</span>
      </button>
    </nav>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'assignments':
        return <AssignmentsTab />;
      case 'submissions':
        return <SubmissionsTab />;
      case 'files':
        return <FilesTab />;
      case 'earnings':
        return <EarningsTab />;
      case 'payment-settings':
        return <PaymentSettingsTab />;
      case 'messages':
        return <MessagesTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <DashboardLayout sidebar={sidebar} title="Writer Portal">
      <div className="transition-all duration-300 ease-in-out">
        {renderContent()}
      </div>
    </DashboardLayout>
  );
}

function DashboardTab() {
  // Sample data for charts
  const earningsData = [
    { label: 'Jan', value: 2800 },
    { label: 'Feb', value: 3200 },
    { label: 'Mar', value: 2950 },
    { label: 'Apr', value: 3400 },
    { label: 'May', value: 3100 },
    { label: 'Jun', value: 3600 }
  ];

  const articlesData = [
    { label: 'Technology', value: 45, color: 'bg-blue-500' },
    { label: 'Healthcare', value: 32, color: 'bg-green-500' },
    { label: 'Finance', value: 28, color: 'bg-orange-500' },
    { label: 'Marketing', value: 22, color: 'bg-purple-500' }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back, Jane!</h1>
        <p className="text-gray-600 mt-2">Your elite writer dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Articles Written</p>
              <p className="text-3xl font-bold">127</p>
            </div>
            <FileText className="h-12 w-12 text-blue-200" />
          </div>
          <div className="flex items-center mt-4 text-blue-100">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+8 this month</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Active Assignments</p>
              <p className="text-3xl font-bold">5</p>
            </div>
            <Clock className="h-12 w-12 text-green-200" />
          </div>
          <div className="flex items-center mt-4 text-green-100">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="text-sm">2 due this week</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Rating</p>
              <p className="text-3xl font-bold">4.9</p>
            </div>
            <Award className="h-12 w-12 text-orange-200" />
          </div>
          <div className="flex items-center mt-4 text-orange-100">
            <Award className="h-4 w-4 mr-1" />
            <span className="text-sm">Elite writer</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">This Month</p>
              <p className="text-3xl font-bold">$3.2K</p>
            </div>
            <DollarSign className="h-12 w-12 text-purple-200" />
          </div>
          <div className="flex items-center mt-4 text-purple-100">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+15% vs last month</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <AdvancedChart
          title="Monthly Earnings"
          data={earningsData}
          type="line"
          showTrend={true}
        />
        <AdvancedChart
          title="Articles by Category"
          data={articlesData}
          type="pie"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Assignments</h3>
          <div className="space-y-4">
            {[
              { title: 'Future of SaaS Technology', client: 'TechCorp', deadline: '2024-02-05', status: 'In Progress' },
              { title: 'Digital Marketing Trends', client: 'Marketing Agency', deadline: '2024-02-08', status: 'Draft' },
              { title: 'AI in Healthcare', client: 'HealthTech Inc.', deadline: '2024-02-12', status: 'Planning' },
            ].map((assignment, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{assignment.title}</div>
                  <div className="text-sm text-gray-600">{assignment.client}</div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${
                    assignment.status === 'In Progress' ? 'text-blue-600' :
                    assignment.status === 'Draft' ? 'text-orange-600' : 'text-gray-600'
                  }`}>
                    {assignment.status}
                  </div>
                  <div className="text-xs text-gray-500">Due: {assignment.deadline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">On-time Delivery</span>
              <span className="text-2xl font-bold text-green-600">98%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Client Satisfaction</span>
              <span className="text-2xl font-bold text-blue-600">4.9/5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Word Count</span>
              <span className="text-2xl font-bold text-purple-600">2,450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Revisions Required</span>
              <span className="text-2xl font-bold text-orange-600">5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssignmentsTab() {
  const assignments = [
    { 
      id: 1, 
      title: 'Future of SaaS Technology', 
      client: 'TechCorp Inc.', 
      wordCount: 2500, 
      deadline: '2024-02-05', 
      status: 'In Progress',
      briefing: 'Write about emerging SaaS trends and their impact on businesses.',
      targetUrl: 'https://techcorp.com/saas-platform',
      keywords: 'SaaS, cloud technology, business automation'
    },
    { 
      id: 2, 
      title: 'Digital Marketing Trends 2024', 
      client: 'Marketing Agency', 
      wordCount: 2000, 
      deadline: '2024-02-08', 
      status: 'Draft',
      briefing: 'Comprehensive guide on digital marketing trends for 2024.',
      targetUrl: 'https://marketingagency.com/services',
      keywords: 'digital marketing, SEO, social media marketing'
    },
    { 
      id: 3, 
      title: 'AI in Healthcare Revolution', 
      client: 'HealthTech Inc.', 
      wordCount: 1800, 
      deadline: '2024-02-12', 
      status: 'Planning',
      briefing: 'Explore how AI is transforming healthcare delivery and patient outcomes.',
      targetUrl: 'https://healthtech.com/ai-solutions',
      keywords: 'AI healthcare, medical technology, patient care'
    },
  ];

  const handleStartWriting = (assignmentId: number) => {
    alert(`Starting work on assignment ${assignmentId}...`);
  };

  const handleAskQuestion = (assignmentId: number) => {
    alert(`Opening messaging for assignment ${assignmentId}...`);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Assignments</h1>
        <p className="text-gray-600 mt-2">Current writing assignments and briefs</p>
      </div>

      <div className="space-y-6">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{assignment.title}</h3>
                <p className="text-sm text-gray-600">{assignment.client}</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 text-xs rounded-full ${
                  assignment.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  assignment.status === 'Draft' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {assignment.status}
                </span>
                <p className="text-sm text-gray-500 mt-1">Due: {assignment.deadline}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm text-gray-600">Word Count</div>
                <div className="text-lg font-bold text-gray-900">{assignment.wordCount}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm text-gray-600">Target URL</div>
                <div className="text-sm font-medium text-blue-600 truncate">{assignment.targetUrl}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm text-gray-600">Keywords</div>
                <div className="text-sm text-gray-900">{assignment.keywords}</div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Brief</h4>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{assignment.briefing}</p>
            </div>

            <div className="flex justify-end space-x-2">
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-medium flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                View Full Brief
              </button>
              <button 
                onClick={() => handleAskQuestion(assignment.id)}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-medium flex items-center"
              >
                <MessageSquare className="h-4 w-4 mr-1" />
                Ask Question
              </button>
              <button 
                onClick={() => handleStartWriting(assignment.id)}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm font-medium flex items-center"
              >
                <Edit className="h-4 w-4 mr-1" />
                Start Writing
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubmissionsTab() {
  const submissions = [
    { id: 1, title: 'Startup Growth Strategies', client: 'StartupXYZ', submittedDate: '2024-01-25', status: 'Published', link: 'entrepreneur.com' },
    { id: 2, title: 'E-commerce Trends Analysis', client: 'RetailCorp', submittedDate: '2024-01-22', status: 'Under Review', link: 'pending' },
    { id: 3, title: 'Fintech Innovation Report', client: 'FinanceGuru', submittedDate: '2024-01-18', status: 'Published', link: 'forbes.com' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Submissions</h1>
        <p className="text-gray-600 mt-2">Track your submitted articles and their status</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Article</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Client</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Submitted</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Published</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {submissions.map((submission) => (
              <tr key={submission.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">{submission.title}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{submission.client}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{submission.submittedDate}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    submission.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {submission.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {submission.link !== 'pending' ? submission.link : 'Pending'}
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
    </div>
  );
}

function FilesTab() {
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: '1',
      name: 'Assignment_Brief_TechCorp.pdf',
      size: 1250000,
      type: 'application/pdf',
      uploadDate: '2024-01-15T10:30:00Z',
      url: '#'
    },
    {
      id: '2',
      name: 'Style_Guide.docx',
      size: 890000,
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      uploadDate: '2024-01-20T14:20:00Z',
      url: '#'
    }
  ]);

  const handleFileUpload = (files: any[]) => {
    setUploadedFiles(files);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Files & Briefs</h1>
        <p className="text-gray-600 mt-2">Access assignment briefs and upload completed articles</p>
      </div>

      <div className="space-y-8">
        {/* Assignment Briefs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Assignment Briefs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'TechCorp SaaS Brief', type: 'PDF', size: '1.2 MB', date: '2024-02-01', status: 'Active' },
              { name: 'Marketing Agency Brief', type: 'PDF', size: '890 KB', date: '2024-01-28', status: 'Active' },
              { name: 'HealthTech AI Brief', type: 'PDF', size: '1.5 MB', date: '2024-01-25', status: 'Pending' },
              { name: 'Style Guide v2.1', type: 'DOCX', size: '456 KB', date: '2024-01-20', status: 'Reference' }
            ].map((brief, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl">📄</div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    brief.status === 'Active' ? 'bg-green-100 text-green-800' :
                    brief.status === 'Pending' ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {brief.status}
                  </span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm">{brief.name}</h4>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>{brief.type} • {brief.size}</div>
                  <div>{brief.date}</div>
                </div>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 px-3 rounded text-xs hover:bg-blue-700 transition-colors">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* File Upload Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Submit Articles</h3>
          <p className="text-gray-600 mb-6">Upload your completed articles and any supporting materials.</p>
          
          <FileUpload
            projectId="writer-submissions"
            onFileUpload={handleFileUpload}
            existingFiles={uploadedFiles}
            allowedTypes={['pdf', 'doc', 'docx', 'txt']}
            maxFileSize={15}
            maxFiles={5}
          />
        </div>
      </div>
    </div>
  );
}

function EarningsTab() {
  const generateReport = () => {
    alert('Generating earnings report...');
  };

  // Sample data for earnings chart
  const monthlyEarningsData = [
    { label: 'Jan', value: 2800 },
    { label: 'Feb', value: 3200 },
    { label: 'Mar', value: 2950 },
    { label: 'Apr', value: 3400 },
    { label: 'May', value: 3100 },
    { label: 'Jun', value: 3600 }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Earnings & Payments</h1>
          <p className="text-gray-600 mt-2">Track your writing income and payment history</p>
        </div>
        <button 
          onClick={generateReport}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Generate Report
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white">
          <h3 className="text-green-100">This Month</h3>
          <p className="text-3xl font-bold">$3,200</p>
          <p className="text-green-100 text-sm mt-2">8 articles completed</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
          <h3 className="text-blue-100">Total Earned</h3>
          <p className="text-3xl font-bold">$47,850</p>
          <p className="text-blue-100 text-sm mt-2">127 articles published</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white">
          <h3 className="text-purple-100">Average Rate</h3>
          <p className="text-3xl font-bold">$0.18</p>
          <p className="text-purple-100 text-sm mt-2">Per word (premium)</p>
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="mb-8">
        <AdvancedChart
          title="Monthly Earnings Trend"
          data={monthlyEarningsData}
          type="line"
          showTrend={true}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment History</h3>
        <div className="space-y-3">
          {[
            { date: '2024-01-31', amount: '$2,850', method: 'PayPal', status: 'Paid' },
            { date: '2023-12-31', amount: '$3,120', method: 'PayPal', status: 'Paid' },
            { date: '2023-11-30', amount: '$2,940', method: 'PayPal', status: 'Paid' },
          ].map((payment, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">{payment.date}</div>
                <div className="text-sm text-gray-600">{payment.method}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">{payment.amount}</div>
                <div className="text-sm text-green-600">{payment.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Earnings Breakdown</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">By Article Length</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">1500-2000 words</span>
                <span className="text-sm font-medium">$270-360</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">2000-2500 words</span>
                <span className="text-sm font-medium">$360-450</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">2500+ words</span>
                <span className="text-sm font-medium">$450+</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Bonus Opportunities</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Rush delivery</span>
                <span className="text-sm font-medium text-green-600">+25%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Technical topics</span>
                <span className="text-sm font-medium text-green-600">+15%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Client satisfaction 5.0</span>
                <span className="text-sm font-medium text-green-600">+10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentSettingsTab() {
  const [paypalEmail, setPaypalEmail] = useState('jane.writer@paypal.com');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    alert('PayPal email updated successfully!');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Payment Settings</h1>
        <p className="text-gray-600 mt-2">Manage your payment methods and preferences</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">PayPal Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              PayPal Email Address
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="email"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
                disabled={!isEditing}
                className={`flex-1 px-4 py-3 border border-gray-300 rounded-lg transition-colors ${
                  isEditing 
                    ? 'focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                    : 'bg-gray-50 cursor-not-allowed'
                }`}
                placeholder="your.email@paypal.com"
              />
              {isEditing ? (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </button>
              )}
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-blue-800 mb-2">Important Notes:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Payments are processed monthly on the last business day</li>
              <li>• Ensure your PayPal account is verified and can receive business payments</li>
              <li>• Minimum payout threshold is $100</li>
              <li>• Payment processing typically takes 2-3 business days</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment History & Settings</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Current Settings</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-medium">PayPal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Currency:</span>
                <span className="font-medium">USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Schedule:</span>
                <span className="font-medium">Monthly</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Next Payment</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Pending Amount:</span>
                <span className="font-medium text-green-600">$850.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Date:</span>
                <span className="font-medium">February 29, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Articles:</span>
                <span className="font-medium">3 completed</span>
              </div>
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
          <p className="text-gray-600 mt-2">Communicate with admin and project managers</p>
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
                      <span className={`px-2 py-1 text-xs rounded-full ${{
                        'admin': 'bg-purple-100 text-purple-800',
                        'client': 'bg-blue-100 text-blue-800',
                        'writer': 'bg-green-100 text-green-800'
                      }[message.to === user?.email ? message.fromRole : message.toRole]}`}>
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

function ProfileTab() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Jane Wilson',
    email: 'jane@email.com',
    specialization: 'Healthcare & Medical',
    bio: 'Experienced healthcare writer with 8+ years covering medical technology, patient care innovations, and healthcare policy. Previously published in major medical journals and healthcare publications.'
  });

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Writer Profile</h1>
        <p className="text-gray-600 mt-2">Manage your professional profile and expertise</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Professional Information</h3>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg transition-colors ${
                      isEditing 
                        ? 'focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                        : 'bg-gray-50 cursor-not-allowed'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg transition-colors ${
                      isEditing 
                        ? 'focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                        : 'bg-gray-50 cursor-not-allowed'
                    }`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                <select 
                  value={profileData.specialization}
                  onChange={(e) => setProfileData({...profileData, specialization: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-lg transition-colors ${
                    isEditing 
                      ? 'focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                      : 'bg-gray-50 cursor-not-allowed'
                  }`}
                >
                  <option>Healthcare & Medical</option>
                  <option>Technology & SaaS</option>
                  <option>Finance & Fintech</option>
                  <option>Marketing & Advertising</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                  rows={4}
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-lg transition-colors ${
                    isEditing 
                      ? 'focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
                      : 'bg-gray-50 cursor-not-allowed'
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio</h3>
            <div className="space-y-4">
              {[
                { title: 'AI in Medical Diagnosis', publication: 'Healthcare Today', date: '2024-01-15' },
                { title: 'Telemedicine Revolution', publication: 'Medical News', date: '2024-01-08' },
                { title: 'Digital Health Trends', publication: 'Health Tech Weekly', date: '2023-12-22' },
              ].map((article, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{article.title}</div>
                    <div className="text-sm text-gray-600">{article.publication}</div>
                  </div>
                  <div className="text-sm text-gray-500">{article.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Overall Rating</span>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900">4.9</span>
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className={`h-4 w-4 ${i < 4.9 ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Articles Completed</span>
                <span className="text-2xl font-bold text-gray-900">127</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">On-time Delivery</span>
                <span className="text-2xl font-bold text-green-600">98%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Client Retention</span>
                <span className="text-2xl font-bold text-blue-600">94%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
            <h3 className="text-blue-100 mb-2">Elite Writer Status</h3>
            <p className="text-2xl font-bold mb-2">Verified</p>
            <div className="flex items-center text-blue-100">
              <Award className="h-4 w-4 mr-1" />
              <span className="text-sm">Top 5% performer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriterDashboard;