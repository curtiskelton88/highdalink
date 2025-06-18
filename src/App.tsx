import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MessageProvider } from './contexts/MessageContext';
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

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'client' | 'writer';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'admin' | 'client' | 'writer') => Promise<boolean>;
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
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={authValue}>
      <MessageProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              } />
              <Route path="/why-choose-us" element={
                <>
                  <Header />
                  <WhyChooseUs />
                  <Footer />
                </>
              } />
              <Route path="/pricing" element={
                <>
                  <Header />
                  <Pricing />
                  <Footer />
                </>
              } />
              <Route path="/get-started" element={
                <>
                  <Header />
                  <GetStarted />
                  <Footer />
                </>
              } />
              <Route path="/faq" element={
                <>
                  <Header />
                  <FAQ />
                  <Footer />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <Header />
                  <Contact />
                  <Footer />
                </>
              } />
              <Route path="/guarantee" element={
                <>
                  <Header />
                  <MoneyBackGuarantee />
                  <Footer />
                </>
              } />
              <Route path="/roi-calculator" element={
                <>
                  <Header />
                  <ROICalculator />
                  <Footer />
                </>
              } />

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
          </div>
        </Router>
      </MessageProvider>
    </AuthContext.Provider>
  );
}

export default App;