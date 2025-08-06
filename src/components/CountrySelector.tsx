import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { getCurrentCountryFromPath, detectCountryByIP, CountryInfo } from '@/services/countryDetection';

interface CountryData {
  country: string;
  company: string;
  website: string;
  priority: number;
  flag?: string;
  route?: string;
}

const countries: CountryData[] = [
  { country: "SINGAPORE", company: "OECL", website: "https://www.oecl.sg/home", priority: 1, flag: "/sg.svg", route: "/home" },
  { country: "MALAYSIA", company: "OECL", website: "https://www.oecl.sg/malaysia/home", priority: 2, flag: "/my.svg", route: "/malaysia/home" },
  { country: "INDONESIA", company: "OECL", website: "https://www.oecl.sg/indonesia/home", priority: 3, flag: "/id.svg", route: "/indonesia/home" },
  { country: "THAILAND", company: "OECL", website: "https://www.oecl.sg/thailand/home", priority: 4, flag: "/th.svg", route: "/thailand/home" },
  { country: "MYANMAR", company: "GC", website: "https://www.globalconsol.com", priority: 5, flag: "/mm.svg" },
  { country: "CHINA", company: "Haixun", website: "https://www.haixun.co/", priority: 6, flag: "/cn.svg" },
  { country: "AUSTRALIA", company: "Moltech AU", website: "https://www.moltechglobal.com/", priority: 7, flag: "/au.svg" },
  { country: "INDIA", company: "OECL", website: "https://www.oecl.sg/india/home", priority: 8, flag: "/in.svg", route: "/india/home" },
  { country: "SRI LANKA", company: "GC", website: "https://www.globalconsol.com", priority: 9, flag: "/lk.svg" },
  { country: "PAKISTAN", company: "GC", website: "https://www.globalconsol.com", priority: 10, flag: "/pk.svg" },
  { country: "QATAR", company: "ONE GLOBAL", website: "https://oneglobalqatar.com/", priority: 11, flag: "/qa.svg" },
  { country: "SAUDI ARABIA", company: "AMASS", website: "https://amassmiddleeast.com/", priority: 12, flag: "/sa.svg" },
  { country: "UAE", company: "AMASS", website: "https://amassmiddleeast.com/", priority: 13, flag: "/ae.svg" },
  { country: "USA", company: "GGL", website: "https://gglusa.us/", priority: 14, flag: "/us.svg" },
  { country: "UK", company: "Moltech", website: "https://moltech.uk/", priority: 15, flag: "/gb.svg" }
];

const CountrySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [detectedCountry, setDetectedCountry] = useState<CountryInfo | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const currentCountry = getCurrentCountryFromPath(location.pathname);

  // Set initial selected country based on URL
  useEffect(() => {
    const matchedCountry = countries.find(c => c.country.toLowerCase() === currentCountry.name.toLowerCase());
    if (matchedCountry) {
      setSelectedCountry(matchedCountry);
    }
  }, [location.pathname]);

  // Detect user country by IP
  useEffect(() => {
    const detectUserCountry = async () => {
      try {
        const country = await detectCountryByIP();
        setDetectedCountry(country);
      } catch (error) {
        console.log('Country detection failed:', error);
      }
    };
    detectUserCountry();
  }, []);

  const availableCountries = countries.filter(
    (c) => c.country.toUpperCase() !== currentCountry.name.toUpperCase()
  );

  const sortedCountries = [...availableCountries].sort((a, b) => a.priority - b.priority);

  const handleCountrySelect = (country: CountryData) => {
    setSelectedCountry(country); // Update selected flag
    if (country.route) {
      const currentPath = location.pathname;
      let targetRoute = country.route;
      const prefix = country.country === 'SINGAPORE' ? '' : `/${country.country.toLowerCase()}`;

      if (currentPath.includes('/about-us')) {
        targetRoute = `${prefix}/about-us`;
      } else if (currentPath.includes('/contact')) {
        targetRoute = `${prefix}/contact`;
      }

      window.location.href = targetRoute;
    } else {
      window.open(country.website, '_blank', 'noopener,noreferrer');
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {/* Country Selector Dropdown */}
      <div ref={dropdownRef} className="relative z-50">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-[#F6B100] bg-white text-gray-800 hover:bg-[#F6B100]/10 px-4 py-2 rounded-full flex items-center gap-2"
            >
              {selectedCountry?.flag ? (
                <img
                  src={selectedCountry.flag}
                  alt={`${selectedCountry.country} flag`}
                  className="w-6 h-6 rounded-sm shadow-sm object-cover"
                />
              ) : (
                <Globe className="w-6 h-6 text-[#F6B100]" />
              )}
              <span className="flex items-center gap-1 text-sm font-medium">
                {selectedCountry?.country || "Switch Country"} <ChevronDown className="h-3 w-3 ml-1 text-gray-500" />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="w-[280px] border border-amber-100 bg-white p-2 rounded-lg shadow-lg"
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <ScrollArea className="h-[300px] w-full pr-2">
              <div className="grid grid-cols-1 gap-1 p-1">
                {sortedCountries.map((country) => (
                  <DropdownMenuItem
                    key={country.country}
                    onSelect={(e) => {
                      e.preventDefault();
                      handleCountrySelect(country);
                    }}
                    className="cursor-pointer hover:bg-amber-50 p-2 rounded-md flex items-center gap-2 transition-colors"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center w-full">
                      <div className="flex-shrink-0">
                        {country.flag ? (
                          <img
                            src={country.flag}
                            alt={`${country.country} flag`}
                            className="w-6 h-6 rounded-sm shadow-sm object-cover"
                          />
                        ) : (
                          <Globe className="w-6 h-6 text-[#F6B100]" />
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="font-medium text-sm">{country.country}</div>
                        <div className="text-xs text-gray-500">{country.company}</div>
                      </div>
                    </motion.div>
                  </DropdownMenuItem>
                ))}
              </div>
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default CountrySelector;
