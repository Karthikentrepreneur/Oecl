
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
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutUs from "./pages/aboutus";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
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
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/air-freight" element={<AirFreight />} />
                <Route path="/services/ocean-freight" element={<OceanFreight />} />
                <Route path="/services/warehousing" element={<Warehousing />} />
                 <Route path="/services/project-cargo" element={<ProjectCargo />} />
                <Route path="/services/customs-clearance" element={<CustomsClearance />} />
                <Route path="/services/linear-agency" element={<LinearAgency />} />
                <Route path="/services/liquid-cargo" element={<LiquidCargo />} />
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
                 <Route path="/blog/:id" element={<NewsDetailPage />} />
                <Route path="/india/home" element={<IndiaHome />} />
                <Route path="/indonesia/home" element={<IndonesiaHome />} />
                <Route path="/malaysia/home" element={<MalaysiaHome />} />
                <Route path="/thailand/home" element={<ThailandHome />} />
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
