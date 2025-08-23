import React, { useState } from 'react';
import { Link2, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../App';
import { useNavigate } from 'react-router-dom';

function UnifiedLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'admin' | 'client' | 'writer'>('client');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(email, password, role);
      if (success) {
        navigate(`/dashboard/${role}`);
      } else {
        setError('Invalid credentials. Please check your email and password.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleChange = (newRole: 'admin' | 'client' | 'writer') => {
    setRole(newRole);
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleForgotPassword = () => {
    if (!resetEmail) {
      setError('Please enter your email address');
      return;
    }
    
    // Simulate password reset
    setResetMessage(`Password reset instructions have been sent to ${resetEmail}`);
    setTimeout(() => {
      setShowForgotPassword(false);
      setResetMessage('');
      setResetEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Link2 className="h-10 w-10 text-blue-600 mr-3" />
              <span className="text-3xl font-bold text-gray-900">HighDALink</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to access your dashboard</p>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Your Role
            </label>
            <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>🔐 Secure Access:</strong>
              </p>
              <ul className="text-xs text-blue-700 mt-2 space-y-1">
                <li>• <strong>Clients:</strong> Login credentials sent to your email after payment</li>
                <li>• <strong>Writers:</strong> Credentials provided by admin via email</li>
                <li>• <strong>Admin:</strong> Contact highdalink@gmail.com for access</li>
              </ul>
            </div>
            
            {/* Demo Access Notice */}
            <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>🚀 Demo Access:</strong> For demonstration purposes, use password "demo123" with any email for the selected role.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleRoleChange('admin')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  role === 'admin'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <User className="h-6 w-6 mx-auto mb-1" />
                  <div className="text-sm font-medium">Admin</div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleRoleChange('client')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  role === 'client'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <User className="h-6 w-6 mx-auto mb-1" />
                  <div className="text-sm font-medium">Client</div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleRoleChange('writer')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  role === 'writer'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <User className="h-6 w-6 mx-auto mb-1" />
                  <div className="text-sm font-medium">Writer</div>
                </div>
              </button>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="flex justify-between items-center mb-6">
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-sm text-blue-600 hover:text-blue-500 transition-colors"
              >
                Forgot your password?
              </button>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Forgot Password Modal */}
          {showForgotPassword && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Reset Password</h3>
                {resetMessage ? (
                  <div className="text-center">
                    <div className="text-green-600 mb-4">✓ {resetMessage}</div>
                    <button
                      onClick={() => setShowForgotPassword(false)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                      <p className="text-sm text-blue-800">
                        <strong>Admin:</strong> Password reset will be sent to highdalink@gmail.com<br/>
                        <strong>Others:</strong> Instructions sent to your registered email
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={handleForgotPassword}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Send Reset Link
                      </button>
                      <button
                        onClick={() => setShowForgotPassword(false)}
                        className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Back to Website */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-blue-600 hover:text-blue-500 transition-colors"
            >
              ← Back to Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnifiedLogin;