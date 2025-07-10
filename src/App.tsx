
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/contexts/AuthContext';
import CountryRedirect from '@/components/CountryRedirect';
import ProtectedRoute from '@/components/ProtectedRoute';
import AdminRoute from '@/components/AdminRoute';

// Page imports
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import ForgotPassword from '@/pages/ForgotPassword';
import Dashboard from '@/pages/Dashboard';
import AdminDashboard from '@/pages/AdminDashboard';
import AboutUs from '@/pages/aboutus';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogDetail from '@/pages/BlogDetail';
import BlogAdmin from '@/pages/BlogAdmin';
import Services from '@/pages/Services';
import OceanFreight from '@/pages/services/OceanFreight';
import AirFreight from '@/pages/services/AirFreight';
import CustomsClearance from '@/pages/services/CustomsClearance';
import Warehousing from '@/pages/services/Warehousing';
import ProjectCargo from '@/pages/services/ProjectCargo';
import Consolidation from '@/pages/services/Consolidation';
import LinearAgency from '@/pages/services/LinearAgency';
import LiquidCargo from '@/pages/services/LiquidCargo';
import ThirdPartyLogistics from '@/pages/services/3PL';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsAndConditions from '@/pages/TermsAndConditions';
import Projects from '@/pages/Projects';
import NewsOverviewPage from '@/pages/NewsOverviewPage';
import NewsDetailPage from '@/pages/NewsDetailPage';
import NotFound from '@/pages/NotFound';

// Country-specific page imports
import ThailandHome from '@/pages/ThailandHome';
import ThailandServices from '@/pages/services/ThailandServices';
import MalaysiaHome from '@/pages/MalaysiaHome';
import MalaysiaServices from '@/pages/services/MalaysiaServices';
import IndiaHome from '@/pages/IndiaHome';
import IndiaServices from '@/pages/services/IndiaServices';
import IndonesiaHome from '@/pages/IndonesiaHome';
import IndonesiaServices from '@/pages/services/IndonesiaServices';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <AuthProvider>
        <Router>
          <div className="App">
            <CountryRedirect />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                <Route path="/blog-admin" element={<BlogAdmin />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/ocean-freight" element={<OceanFreight />} />
                <Route path="/services/air-freight" element={<AirFreight />} />
                <Route path="/services/customs-clearance" element={<CustomsClearance />} />
                <Route path="/services/warehousing" element={<Warehousing />} />
                <Route path="/services/project-cargo" element={<ProjectCargo />} />
                <Route path="/services/consolidation" element={<Consolidation />} />
                <Route path="/services/linear-agency" element={<LinearAgency />} />
                <Route path="/services/liquid-cargo" element={<LiquidCargo />} />
                <Route path="/services/3pl" element={<ThirdPartyLogistics />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsAndConditions />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/news" element={<NewsOverviewPage />} />
                <Route path="/news/:id" element={<NewsDetailPage />} />

                {/* Country-specific routes */}
                <Route path="/thailand" element={<ThailandHome />} />
                <Route path="/thailand/services" element={<ThailandServices />} />
                <Route path="/malaysia" element={<MalaysiaHome />} />
                <Route path="/malaysia/services" element={<MalaysiaServices />} />
                <Route path="/india" element={<IndiaHome />} />
                <Route path="/india/services" element={<IndiaServices />} />
                <Route path="/indonesia" element={<IndonesiaHome />} />
                <Route path="/indonesia/services" element={<IndonesiaServices />} />

                {/* Protected Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <AdminRoute>
                      <AdminDashboard />
                    </AdminRoute>
                  }
                />
                
                <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
