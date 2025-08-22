import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { MessageProvider } from './contexts/MessageContext';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhyChooseUs from './pages/WhyChooseUs';
import Pricing from './pages/Pricing';
import GetStarted from './pages/GetStarted';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import MoneyBackGuarantee from './pages/MoneyBackGuarantee';
import ROICalculator from './pages/ROICalculator';
import UnifiedLogin from './components/UnifiedLogin';
import AdminDashboard from './components/dashboards/AdminDashboard';
import ClientDashboard from './components/dashboards/ClientDashboard';
import WriterDashboard from './components/dashboards/WriterDashboard';
import ProtectedRoute from './components/ProtectedRoute';

// PayPal configuration with error handling
const getPayPalOptions = () => {
  // Use a known working PayPal sandbox client ID
  const clientId = "sb";
  
  return {
    "client-id": clientId,
    currency: "USD",
    intent: "capture",
    "disable-funding": "card",
    "data-sdk-integration-source": "button-factory"
  };
};

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'client' | 'writer';
  avatar?: string;
  isNewUser?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'admin' | 'client' | 'writer') => Promise<boolean>;
  createClientAccount: (userData: { name: string; email: string; company?: string }) => User;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Predefined users that match the messaging system
const predefinedUsers = [
  { email: 'admin@highdaLink.com', name: 'Admin User', role: 'admin' as const },
  { email: 'john@client.com', name: 'John Client', role: 'client' as const },
  { email: 'jane@writer.com', name: 'Jane Writer', role: 'writer' as const },
  { email: 'sarah@writer.com', name: 'Sarah Johnson', role: 'writer' as const },
  { email: 'mike@writer.com', name: 'Mike Chen', role: 'writer' as const },
  { email: 'emma@writer.com', name: 'Emma Wilson', role: 'writer' as const },
];

function App() {
  const [user, setUser] = useState<User | null>(null);

  const createClientAccount = (userData: { name: string; email: string; company?: string }): User => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.name,
      email: userData.email,
      role: 'client',
      avatar: `https://images.unsplash.com/photo-1507003211169-0a1dd7bf7042?w=150&h=150&fit=crop&crop=face`,
      isNewUser: true
    };
    setUser(newUser);
    return newUser;
  };
  const login = async (email: string, password: string, role: 'admin' | 'client' | 'writer'): Promise<boolean> => {
    if (password === 'demo123') {
      // Find the matching predefined user
      const matchingUser = predefinedUsers.find(u => u.role === role);
      
      if (matchingUser) {
        const mockUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          name: matchingUser.name,
          email: matchingUser.email,
          role: matchingUser.role,
          avatar: `https://images.unsplash.com/photo-${role === 'admin' ? '1472099645785-5658abf4ff4e' : role === 'client' ? '1507003211169-0a1dd7bf7042' : '1494790108755-2616c78e6e70'}?w=150&h=150&fit=crop&crop=face`
        };
        setUser(mockUser);
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const authValue: AuthContextType = {
    user,
    login,
    createClientAccount,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={authValue}>
      <MessageProvider>
        <PayPalScriptProvider 
          options={getPayPalOptions()}
          deferLoading={false}
        >
          <Router>
            <>
              <SEOHead />
              <div className="min-h-screen bg-gray-50 flex flex-col">
                <Header />
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/why-choose-us" element={<WhyChooseUs />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/get-started" element={<GetStarted />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/guarantee" element={<MoneyBackGuarantee />} />
                  <Route path="/roi-calculator" element={<ROICalculator />} />

                  {/* Authentication Routes */}
                  <Route path="/login" element={
                    user ? <Navigate to={`/dashboard/${user.role}`} replace /> : <UnifiedLogin />
                  } />

                  {/* Protected Dashboard Routes */}
                  <Route path="/dashboard/admin" element={
                    <ProtectedRoute requiredRole="admin">
                      <AdminDashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/dashboard/client" element={
                    <ProtectedRoute requiredRole="client">
                      <ClientDashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/dashboard/writer" element={
                    <ProtectedRoute requiredRole="writer">
                      <WriterDashboard />
                    </ProtectedRoute>
                  } />

                  {/* Redirect dashboard to appropriate role */}
                  <Route path="/dashboard" element={
                    user ? <Navigate to={`/dashboard/${user.role}`} replace /> : <Navigate to="/login" replace />
                  } />
                </Routes>
                <Footer />
              </div>
            </>
          </Router>
        </PayPalScriptProvider>
      </MessageProvider>
    </AuthContext.Provider>
  );
}

export default App;