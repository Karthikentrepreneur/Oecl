
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import AirFreight from "./pages/services/AirFreight";
import OceanFreight from "./pages/services/OceanFreight";
import Warehousing from "./pages/services/Warehousing";
import CustomsClearance from "./pages/services/CustomsClearance";
import LinearAgency from "./pages/services/LinearAgency";
import LiquidCargo from "./pages/services/LiquidCargo";
import ProjectCargo from "./pages/services/ProjectCargo";
import Services from "./pages/Services";
import IndiaServices from "./pages/services/IndiaServices";
import ThailandServices from "./pages/services/ThailandServices";
import MalaysiaServices from "./pages/services/MalaysiaServices";
import IndonesiaServices from "./pages/services/IndonesiaServices";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutUs from "./pages/aboutus";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import BlogAdmin from "./pages/BlogAdmin";
import BlogEditor from "./pages/BlogEditor";
import NotFound from "./pages/NotFound";
import IndiaHome from "./pages/IndiaHome";
import NewsOverviewPage from "./pages/NewsOverviewPage";
import Blog from "./pages/Blog";
import IndonesiaHome from "./pages/IndonesiaHome";
import MalaysiaHome from "./pages/MalaysiaHome";
import ThailandHome from "./pages/ThailandHome";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import NewsDetailPage from "./pages/NewsDetailPage";
import BlogDetail from "./components/BlogDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CountryRedirect from "./components/CountryRedirect";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <CountryRedirect />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Index />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/services" element={<Services />} />
                <Route path="/:country/services/air-freight" element={<AirFreight />} />
                <Route path="/services/ocean-freight" element={<OceanFreight />} />
                <Route path="/services/warehousing" element={<Warehousing />} />
                 <Route path="/services/project-cargo" element={<ProjectCargo />} />
                <Route path="/services/customs-clearance" element={<CustomsClearance />} />
                <Route path="/services/linear-agency" element={<LinearAgency />} />
                <Route path="/services/liquid-cargo" element={<LiquidCargo />} />
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-editor" element={<BlogEditor />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
                <Route path="/blog-admin" element={<BlogAdmin />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                
                {/* Country-specific routes */}
                <Route path="/india/home" element={<IndiaHome />} />
                <Route path="/india/services" element={<Services />} />
                <Route path="/india/about-us" element={<AboutUs />} />
                <Route path="/india/contact" element={<Contact />} />
                <Route path="/india/blogs" element={<Blog />} />
                
                <Route path="/indonesia/home" element={<IndonesiaHome />} />
                <Route path="/indonesia/services" element={<Services />} />
                <Route path="/indonesia/about-us" element={<AboutUs />} />
                <Route path="/indonesia/contact" element={<Contact />} />
                <Route path="/indonesia/blogs" element={<Blog />} />
                
                <Route path="/malaysia/home" element={<MalaysiaHome />} />
                <Route path="/malaysia/services" element={<Services />} />
                <Route path="/malaysia/about-us" element={<AboutUs />} />
                <Route path="/malaysia/contact" element={<Contact />} />
                <Route path="/malaysia/blogs" element={<Blog />} />
                
                <Route path="/thailand/home" element={<ThailandHome />} />
                <Route path="/thailand/services" element={<ThailandServices />} />
                <Route path="/thailand/about-us" element={<AboutUs />} />
                <Route path="/thailand/contact" element={<Contact />} />
                <Route path="/thailand/blogs" element={<Blog />} />
                
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
