
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, Truck, Globe, Shield, Award } from "lucide-react";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleLogin = () => {
    // Simulate login process
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Welcome to your customer portal!",
      });
      setIsOpen(false);
      setEmail("");
      setPassword("");
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
    }
  };

  const handleQuoteRequest = () => {
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you within 24 hours with a competitive quote.",
    });
    setIsOpen(false);
  };

  return (
    <section className="relative bg-gradient-to-r from-kargon-dark to-gray-800 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-kargon-red/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Global Logistics
                <span className="block text-kargon-red">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your trusted partner for comprehensive freight forwarding, customs clearance, 
                and supply chain management across Asia and beyond.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-kargon-red hover:bg-kargon-red/90 text-white px-8 py-3">
                    Customer Portal
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md z-[9999] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl font-bold">Customer Portal</DialogTitle>
                    <DialogDescription className="text-center">
                      Access your shipments and account information
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="quote">Get Quote</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="login" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <Button onClick={handleLogin} className="w-full bg-kargon-red hover:bg-kargon-red/90">
                        Login to Portal
                      </Button>
                      <p className="text-sm text-center text-gray-600">
                        Don't have an account? Contact us to get started.
                      </p>
                    </TabsContent>
                    
                    <TabsContent value="quote" className="space-y-4">
                      <div className="text-center space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-blue-900 mb-2">Quick Quote Request</h3>
                          <p className="text-sm text-blue-700">
                            Get a competitive quote for your shipping needs within 24 hours.
                          </p>
                        </div>
                        <Button onClick={handleQuoteRequest} className="w-full bg-blue-600 hover:bg-blue-700">
                          Request Quote Now
                        </Button>
                        <p className="text-xs text-gray-600">
                          Our team will contact you shortly with a detailed quote.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>

              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-kargon-dark px-8 py-3">
                Track Shipment
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-kargon-red/20 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="bg-kargon-red/20 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Truck className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-gray-300">Shipments</div>
              </div>
              <div className="text-center">
                <div className="bg-kargon-red/20 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-gray-300">Reliability</div>
              </div>
              <div className="text-center">
                <div className="bg-kargon-red/20 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Award className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-kargon-red/20 to-blue-500/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Card className="bg-transparent border-0 shadow-none">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">Why Choose OECL?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 p-0">
                    <div className="flex items-start space-x-3">
                      <div className="bg-kargon-red rounded-full p-2 mt-1">
                        <Globe className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Global Network</h3>
                        <p className="text-gray-300 text-sm">Extensive network across Asia-Pacific region</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-kargon-red rounded-full p-2 mt-1">
                        <Shield className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Secure & Reliable</h3>
                        <p className="text-gray-300 text-sm">Advanced tracking and insurance coverage</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-kargon-red rounded-full p-2 mt-1">
                        <Award className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Expert Team</h3>
                        <p className="text-gray-300 text-sm">Experienced professionals handling your cargo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
