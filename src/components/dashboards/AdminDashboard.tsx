import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import Modal from '../Modal';
import { useMessages } from '../../contexts/MessageContext';
import { useAuth } from '../../App';
import { 
  BarChart3, Users, FileText, DollarSign, TrendingUp, 
  Eye, Edit, Trash2, Plus, Calendar, Award, AlertCircle,
  CheckCircle, Clock, UserCheck, CreditCard, MessageSquare,
  Send, Reply, X
} from 'lucide-react';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebar = (
    <nav className="p-6 space-y-2">
      <div className="mb-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Navigation</h3>
      </div>
      <button
        onClick={() => setActiveTab('overview')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'overview' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <BarChart3 className="h-5 w-5 mr-3" />
        <span className="font-medium">Overview</span>
      </button>
      <button
        onClick={() => setActiveTab('clients')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'clients' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <Users className="h-5 w-5 mr-3" />
        <span className="font-medium">Clients</span>
      </button>
      <button
        onClick={() => setActiveTab('writers')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'writers' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <UserCheck className="h-5 w-5 mr-3" />
        <span className="font-medium">Writers</span>
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
        <span className="font-medium">Projects</span>
      </button>
      <button
        onClick={() => setActiveTab('revenue')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'revenue' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <DollarSign className="h-5 w-5 mr-3" />
        <span className="font-medium">Revenue</span>
      </button>
      <button
        onClick={() => setActiveTab('payments')}
        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
          activeTab === 'payments' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
        }`}
      >
        <CreditCard className="h-5 w-5 mr-3" />
        <span className="font-medium">Payment Management</span>
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
    </nav>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'clients':
        return <ClientsTab />;
      case 'writers':
        return <WritersTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'revenue':
        return <RevenueTab />;
      case 'payments':
        return <PaymentManagementTab />;
      case 'messages':
        return <MessagesTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <DashboardLayout sidebar={sidebar} title="Admin Dashboard">
      <div className="transition-all duration-300 ease-in-out">
        {renderContent()}
      </div>
    </DashboardLayout>
  );
}

function OverviewTab() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your link building operations</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Total Clients</p>
              <p className="text-3xl font-bold">247</p>
            </div>
            <Users className="h-12 w-12 text-blue-200" />
          </div>
          <div className="flex items-center mt-4 text-blue-100">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+12% this month</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Active Projects</p>
              <p className="text-3xl font-bold">89</p>
            </div>
            <FileText className="h-12 w-12 text-green-200" />
          </div>
          <div className="flex items-center mt-4 text-green-100">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+8% this week</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Elite Writers</p>
              <p className="text-3xl font-bold">34</p>
            </div>
            <Award className="h-12 w-12 text-orange-200" />
          </div>
          <div className="flex items-center mt-4 text-orange-100">
            <CheckCircle className="h-4 w-4 mr-1" />
            <span className="text-sm">All verified</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Monthly Revenue</p>
              <p className="text-3xl font-bold">$156K</p>
            </div>
            <DollarSign className="h-12 w-12 text-purple-200" />
          </div>
          <div className="flex items-center mt-4 text-purple-100">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+23% this month</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Projects</h3>
          <div className="space-y-4">
            {[
              { client: 'TechCorp Inc.', package: 'Enterprise Max', status: 'In Progress', writer: 'Sarah Johnson' },
              { client: 'Digital Agency', package: 'Authority Pro', status: 'Completed', writer: 'Mike Chen' },
              { client: 'StartupXYZ', package: 'Elite One', status: 'Review', writer: 'Emma Wilson' },
            ].map((project, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{project.client}</div>
                  <div className="text-sm text-gray-600">{project.package}</div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${
                    project.status === 'Completed' ? 'text-green-600' :
                    project.status === 'In Progress' ? 'text-blue-600' : 'text-orange-600'
                  }`}>
                    {project.status}
                  </div>
                  <div className="text-xs text-gray-500">Writer: {project.writer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Alerts</h3>
          <div className="space-y-3">
            {[
              { type: 'warning', message: '3 projects approaching deadline', time: '2 hours ago' },
              { type: 'info', message: 'New writer application received', time: '4 hours ago' },
              { type: 'success', message: '15 links delivered successfully', time: '6 hours ago' },
            ].map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                {alert.type === 'warning' && <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />}
                {alert.type === 'info' && <Clock className="h-5 w-5 text-blue-500 mt-0.5" />}
                {alert.type === 'success' && <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />}
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientsTab() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [clients, setClients] = useState([
    { id: 1, name: 'TechCorp Inc.', email: 'admin@techcorp.com', projects: 12, revenue: '$15,200', status: 'Active' },
    { id: 2, name: 'Digital Agency', email: 'hello@digitalagency.com', projects: 8, revenue: '$8,800', status: 'Active' },
    { id: 3, name: 'StartupXYZ', email: 'founder@startupxyz.com', projects: 3, revenue: '$1,800', status: 'New' },
  ]);

  const handleAddClient = (formData: any) => {
    const newClient = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      projects: 0,
      revenue: '$0',
      status: 'New'
    };
    setClients([...clients, newClient]);
    setShowAddModal(false);
  };

  const handleDeleteClient = (id: number) => {
    if (confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(client => client.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Clients Management</h1>
          <p className="text-gray-600 mt-2">Manage your client accounts</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Client
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Client</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Projects</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Revenue</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{client.name}</div>
                    <div className="text-sm text-gray-500">{client.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{client.projects}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{client.revenue}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    client.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {client.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteClient(client.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Client"
      >
        <AddClientForm onSubmit={handleAddClient} onCancel={() => setShowAddModal(false)} />
      </Modal>
    </div>
  );
}

function AddClientForm({ onSubmit, onCancel }: { onSubmit: (data: any) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter client name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter email address"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({...formData, company: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter company name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter phone number"
        />
      </div>
      <div className="flex space-x-3 pt-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Client
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function WritersTab() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [writers, setWriters] = useState([
    { id: 1, name: 'Sarah Johnson', email: 'sarah@email.com', speciality: 'Technology', articles: 45, rating: 4.9, status: 'Active', paypal: 'sarah.j@paypal.com' },
    { id: 2, name: 'Mike Chen', email: 'mike@email.com', speciality: 'Finance', articles: 38, rating: 4.8, status: 'Active', paypal: 'mike.chen@paypal.com' },
    { id: 3, name: 'Emma Wilson', email: 'emma@email.com', speciality: 'Healthcare', articles: 52, rating: 5.0, status: 'Active', paypal: 'emma.w@paypal.com' },
  ]);

  const handleAddWriter = (formData: any) => {
    const newWriter = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      speciality: formData.speciality,
      articles: 0,
      rating: 5.0,
      status: 'Active',
      paypal: formData.paypal
    };
    setWriters([...writers, newWriter]);
    setShowAddModal(false);
  };

  const handleDeleteWriter = (id: number) => {
    if (confirm('Are you sure you want to delete this writer?')) {
      setWriters(writers.filter(writer => writer.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Writers Management</h1>
          <p className="text-gray-600 mt-2">Manage your writer network</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Writer
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Writer</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Speciality</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Articles</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Rating</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">PayPal</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {writers.map((writer) => (
              <tr key={writer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{writer.name}</div>
                    <div className="text-sm text-gray-500">{writer.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{writer.speciality}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{writer.articles}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">{writer.rating}</span>
                    <div className="flex ml-2">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} className={`h-4 w-4 ${i < writer.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{writer.paypal}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteWriter(writer.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Writer"
      >
        <AddWriterForm onSubmit={handleAddWriter} onCancel={() => setShowAddModal(false)} />
      </Modal>
    </div>
  );
}

function AddWriterForm({ onSubmit, onCancel }: { onSubmit: (data: any) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    speciality: '',
    paypal: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Writer Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter writer name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter email address"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Speciality</label>
        <select
          required
          value={formData.speciality}
          onChange={(e) => setFormData({...formData, speciality: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select speciality</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Marketing">Marketing</option>
          <option value="E-commerce">E-commerce</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">PayPal Email</label>
        <input
          type="email"
          required
          value={formData.paypal}
          onChange={(e) => setFormData({...formData, paypal: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter PayPal email"
        />
      </div>
      <div className="flex space-x-3 pt-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Writer
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function ProjectsTab() {
  const [projects, setProjects] = useState([
    { id: 1, client: 'TechCorp Inc.', package: 'Enterprise Max', status: 'In Progress', deadline: '2024-02-15', progress: 75 },
    { id: 2, client: 'Digital Agency', package: 'Authority Pro', status: 'Completed', deadline: '2024-01-20', progress: 100 },
    { id: 3, client: 'StartupXYZ', package: 'Elite One', status: 'Review', deadline: '2024-02-10', progress: 90 },
  ]);

  const generateReport = (projectId: number) => {
    alert(`Generating report for project ${projectId}...`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects Management</h1>
          <p className="text-gray-600 mt-2">Monitor all active projects</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          New Project
        </button>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{project.client}</h3>
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
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => generateReport(project.id)}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-medium"
              >
                Generate Report
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm font-medium">
                Update Status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RevenueTab() {
  const generateReport = () => {
    alert('Generating revenue report...');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Revenue Analytics</h1>
          <p className="text-gray-600 mt-2">Track financial performance</p>
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
          <p className="text-3xl font-bold">$156,200</p>
          <p className="text-green-100 text-sm mt-2">+23% from last month</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
          <h3 className="text-blue-100">This Quarter</h3>
          <p className="text-3xl font-bold">$428,500</p>
          <p className="text-blue-100 text-sm mt-2">+18% from last quarter</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white">
          <h3 className="text-purple-100">Annual</h3>
          <p className="text-3xl font-bold">$1,654,800</p>
          <p className="text-purple-100 text-sm mt-2">Target: $2M</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Package</h3>
        <div className="space-y-4">
          {[
            { package: 'Enterprise Max', revenue: '$45,600', percentage: 35, color: 'bg-blue-500' },
            { package: 'Authority Pro', revenue: '$38,200', percentage: 29, color: 'bg-orange-500' },
            { package: 'Agency Monthly', revenue: '$52,400', percentage: 40, color: 'bg-purple-500' },
            { package: 'Elite One', revenue: '$20,000', percentage: 15, color: 'bg-green-500' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded ${item.color}`}></div>
                <span className="font-medium text-gray-900">{item.package}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="font-semibold text-gray-900 w-20 text-right">{item.revenue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PaymentManagementTab() {
  const [adminPaypalEmail, setAdminPaypalEmail] = useState('admin@highdaLink.com');
  const pendingPayments = [
    { id: 1, writer: 'Sarah Johnson', amount: '$850', articles: 3, paypal: 'sarah.j@paypal.com', dueDate: '2024-02-01' },
    { id: 2, writer: 'Mike Chen', amount: '$640', articles: 2, paypal: 'mike.chen@paypal.com', dueDate: '2024-02-01' },
    { id: 3, writer: 'Emma Wilson', amount: '$920', articles: 4, paypal: 'emma.w@paypal.com', dueDate: '2024-02-01' },
  ];

  const recentPayments = [
    { id: 1, writer: 'Sarah Johnson', amount: '$750', date: '2024-01-28', status: 'Completed' },
    { id: 2, writer: 'Mike Chen', amount: '$560', date: '2024-01-28', status: 'Completed' },
    { id: 3, writer: 'Emma Wilson', amount: '$840', date: '2024-01-28', status: 'Completed' },
  ];

  const handleSendPayment = (writerId: number) => {
    alert(`Payment sent to writer ${writerId} via PayPal`);
  };

  const handleWithdrawFunds = () => {
    alert(`Withdrawal request sent to PayPal: ${adminPaypalEmail}`);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Payment Management</h1>
        <p className="text-gray-600 mt-2">Manage writer payments and withdrawals</p>
      </div>

      {/* Admin Withdrawal Section */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white mb-8">
        <h3 className="text-xl font-semibold mb-4">Admin Withdrawal</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-green-100 text-sm font-medium mb-2">
              Available Balance
            </label>
            <div className="text-3xl font-bold">$12,450</div>
          </div>
          <div>
            <label className="block text-green-100 text-sm font-medium mb-2">
              PayPal Email
            </label>
            <div className="flex space-x-2">
              <input
                type="email"
                value={adminPaypalEmail}
                onChange={(e) => setAdminPaypalEmail(e.target.value)}
                className="flex-1 px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-green-200"
                placeholder="admin@highdaLink.com"
              />
              <button
                onClick={handleWithdrawFunds}
                className="bg-white text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors font-semibold"
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Payments */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Payments</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Writer</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Articles</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">PayPal</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Due Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pendingPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{payment.writer}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{payment.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{payment.articles}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{payment.paypal}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{payment.dueDate}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleSendPayment(payment.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Send Payment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Payments */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Payments</h3>
        <div className="space-y-3">
          {recentPayments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">{payment.writer}</div>
                <div className="text-sm text-gray-600">{payment.date}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">{payment.amount}</div>
                <div className="text-sm text-green-600">{payment.status}</div>
              </div>
            </div>
          ))}
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
    toRole: 'client' as 'admin' | 'client' | 'writer',
    subject: '',
    content: ''
  });

  const messages = getUserMessages();
  const allUsers = getAllUsers().filter(u => u.email !== user?.email);

  const handleCompose = () => {
    if (composeData.to && composeData.subject && composeData.content) {
      sendMessage(composeData.to, composeData.toName, composeData.toRole, composeData.subject, composeData.content);
      setComposeData({ to: '', toName: '', toRole: 'client', subject: '', content: '' });
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
          <p className="text-gray-600 mt-2">Manage communications with clients and writers</p>
        </div>
        <button 
          onClick={() => setShowCompose(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <Send className="h-5 w-5 mr-2" />
          Compose Message
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Inbox ({messages.length})</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {messages.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No messages yet. Start a conversation by composing a new message.
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
        title="Compose Message"
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

export default AdminDashboard;