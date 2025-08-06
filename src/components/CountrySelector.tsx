import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocation } from 'react-router-dom';

interface CountryData {
  country: string;
  company: string;
  website: string;
  priority: number;
  flag?: string;
  route?: string;
  slug?: string;
}

const countries: CountryData[] = [
  { country: "SINGAPORE", company: "OECL", website: "https://www.oecl.sg/home", priority: 1, flag: "/sg.svg", route: "/home", slug: "" },
  { country: "MALAYSIA", company: "OECL", website: "https://www.oecl.sg/malaysia/home", priority: 2, flag: "/my.svg", route: "/malaysia/home", slug: "malaysia" },
  { country: "INDONESIA", company: "OECL", website: "https://www.oecl.sg/indonesia/home", priority: 3, flag: "/id.svg", route: "/indonesia/home", slug: "indonesia" },
  { country: "THAILAND", company: "OECL", website: "https://www.oecl.sg/thailand/home", priority: 4, flag: "/th.svg", route: "/thailand/home", slug: "thailand" },
  { country: "INDIA", company: "OECL", website: "https://www.oecl.sg/india/home", priority: 5, flag: "/in.svg", route: "/india/home", slug: "india" },
  { country: "SRI LANKA", company: "GC", website: "https://www.globalconsol.com", priority: 6, flag: "/lk.svg", slug: "sri-lanka" },
  { country: "MYANMAR", company: "GC", website: "https://www.globalconsol.com", priority: 7, flag: "/mm.svg", slug: "myanmar" },
  { country: "CHINA", company: "Haixun", website: "https://www.haixun.co/", priority: 8, flag: "/cn.svg", slug: "china" },
  { country: "PAKISTAN", company: "GC", website: "https://www.globalconsol.com", priority: 9, flag: "/pk.svg", slug: "pakistan" },
  { country: "USA", company: "GGL", website: "https://gglusa.us/", priority: 10, flag: "/us.svg", slug: "usa" },
  { country: "UK", company: "Moltech", website: "https://moltech.uk/", priority: 11, flag: "/gb.svg", slug: "uk" },
];

const CountrySelector = () => {
  const location = useLocation();
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);

  useEffect(() => {
    // Extract slug from URL
    const segments = location.pathname.split('/');
    const slug = segments[1]?.toLowerCase() || "";

    // Match slug to country list
    const match = countries.find(c => c.slug?.toLowerCase() === slug);

    if (match) {
      setSelectedCountry(match);
    } else {
      // Default to Singapore
      const singapore = countries.find(c => c.country === "SINGAPORE");
      setSelectedCountry(singapore || null);
    }
  }, [location.pathname]);

  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        className="border-[#F6B100] bg-white text-gray-800 hover:bg-[#F6B100]/10 px-4 py-2 rounded-full flex items-center gap-2"
      >
        {selectedCountry?.flag ? (
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.country + " Flag"}
            className="w-6 h-6 rounded-sm object-cover shadow-sm"
          />
        ) : (
          <Globe className="w-6 h-6 text-[#F6B100]" />
        )}
        <span className="text-sm font-medium">
          {selectedCountry?.country || "Switch Country"}
        </span>
        <ChevronDown className="h-3 w-3 ml-1 text-gray-500" />
      </Button>
    </div>
  );
};

export default CountrySelector;
