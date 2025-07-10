
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import AdminRoute from "@/components/AdminRoute";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogEditor from "./pages/BlogEditor";
import AboutUs from "./pages/aboutus";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import BlogAdmin from "./pages/BlogAdmin";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NewsOverviewPage from "./pages/NewsOverviewPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import BlogDetail from "./components/BlogDetail";

// Service pages
import AirFreight from "./pages/services/AirFreight";
import OceanFreight from "./pages/services/OceanFreight";
import ProjectCargo from "./pages/services/ProjectCargo";
import CustomsClearance from "./pages/services/CustomsClearance";
import Warehousing from "./pages/services/Warehousing";
import Consolidation from "./pages/services/Consolidation";
import LinearAgency from "./pages/services/LinearAgency";
import LiquidCargo from "./pages/services/LiquidCargo";

// Country-specific pages
import IndiaHome from "./pages/IndiaHome";
import IndonesiaHome from "./pages/IndonesiaHome";
import MalaysiaHome from "./pages/MalaysiaHome";
import ThailandHome from "./pages/ThailandHome";

// Country-specific service pages
import IndiaServices from "./pages/services/IndiaServices";
import IndonesiaServices from "./pages/services/IndonesiaServices";
import MalaysiaServices from "./pages/services/MalaysiaServices";
import ThailandServices from "./pages/services/ThailandServices";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/blog-editor" element={<BlogEditor />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/news" element={<NewsOverviewPage />} />
              <Route path="/news/:id" element={<NewsDetailPage />} />

              {/* Service routes */}
              <Route path="/services/air-freight" element={<AirFreight />} />
              <Route path="/services/ocean-freight" element={<OceanFreight />} />
              <Route path="/services/project-cargo" element={<ProjectCargo />} />
              <Route path="/services/customs-clearance" element={<CustomsClearance />} />
              <Route path="/services/warehousing" element={<Warehousing />} />
              <Route path="/services/consolidation" element={<Consolidation />} />
              <Route path="/services/linear-agency" element={<LinearAgency />} />
              <Route path="/services/liquid-cargo" element={<LiquidCargo />} />

              {/* Country-specific routes */}
              <Route path="/india" element={<IndiaHome />} />
              <Route path="/indonesia" element={<IndonesiaHome />} />
              <Route path="/malaysia" element={<MalaysiaHome />} />
              <Route path="/thailand" element={<ThailandHome />} />

              {/* Country-specific service routes */}
              <Route path="/india/services" element={<IndiaServices />} />
              <Route path="/indonesia/services" element={<IndonesiaServices />} />
              <Route path="/malaysia/services" element={<MalaysiaServices />} />
              <Route path="/thailand/services" element={<ThailandServices />} />

              {/* Protected routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />

              {/* Admin routes */}
              <Route path="/admin" element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } />
              
              <Route path="/blog-admin" element={
                <AdminRoute>
                  <BlogAdmin />
                </AdminRoute>
              } />

              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
