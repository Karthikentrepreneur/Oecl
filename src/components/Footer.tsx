import { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getCurrentCountryFromPath } from "@/services/countryDetection";

const Footer = () => {
  const location = useLocation();
  const currentCountry = getCurrentCountryFromPath(location.pathname);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  const addressData: Record<string, { office: string; phone: string }[]> = {
    SG: [
      {
        office: `OECL (Singapore) Pte Ltd.\nBlk 511 Kampong Bahru Road\n#03-01 Keppel Distripark\nSingapore - 099447`,
        phone: `+65 69080838`
      }
    ],
    IN: [
      {
        office: `Roma Building, Door No. 10, 3rd Floor, G.S.T. Road, Alandur, Chennai-600 016`,
        phone: `044 4689 4646`
      },
      {
        office: `Chennai Warehouse\nSurvey No.209/6A(Part), Perambakkam Road, Sriperumbudur, Kanchipuram`,
        phone: `+91 9994355523`
      },
      {
        office: `Delhi - Plot No. 15, 1st Floor, Sector 17, Dwarka, New Delhi 110075`,
        phone: `+91 11 41088871`
      },
      {
        office: `Kolkata - Imagine Techpark, Salt Lake City, WB - 700091`,
        phone: `+91 33 4814 9162 – 63`
      },
      {
        office: `Bengaluru - HRBR LAYOUT 1st Block, Kalayan Nagar, Bengaluru - 560043`,
        phone: `+91 9841676259`
      },
      {
        office: `Cochin - Thevara Ferry Jn, Cochin 682013`,
        phone: `+91 484 4019192 / 93`
      },
      {
        office: `Hyderabad - Indian Airlines colony, Begumpet, Hyderabad-500016`,
        phone: `040-49559704`
      },
      {
        office: `Mumbai - Town Center - 2, Andheri East, Mumbai - 400059`,
        phone: `+91 8879756838`
      }
    ],
    ID: [
      {
        office: `Jakarta - 408, Lina Building, JL.HR Rasuna Said kav B7`,
        phone: `+62 21 529 20292`
      },
      {
        office: `Surabaya - Japfa Indoland Center, JL Jend, Surabaya 60271`,
        phone: `+62 21 529 20292`
      }
    ],
    MY: [
      {
        office: `Pasirgudang - Unit 20-03A, Menara Zurich, Johor Bahru`,
        phone: `603-3319 2778 / 74`
      },
      {
        office: `PortKlang - MTBBT 2, Jalan Batu Nilam, Klang`,
        phone: `+603 - 3319 2778 / 74`
      }
    ],
    TH: [
      {
        office: `Bangkok - 109 CCT Building, 3rd Floor, Surawong Road, Bangkok 10500`,
        phone: `+662-634-3240`
      }
    ]
  };

  const addresses = addressData[currentCountry.code] || addressData["SG"];

  return (
    <footer className="pt-16 pb-8 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Address Scroll Buttons */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div className="flex gap-2">
            <button onClick={() => scroll("left")} className="bg-white text-black p-1 rounded hover:bg-yellow-500 transition">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll("right")} className="bg-white text-black p-1 rounded hover:bg-yellow-500 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Address List */}
        <div ref={scrollRef} className="overflow-x-auto whitespace-nowrap scroll-smooth flex gap-6 pb-4 pr-4">
          {addresses.map((addr, index) => (
            <div
              key={index}
              className="min-w-[260px] max-w-xs bg-white/10 p-4 rounded-md shadow-md flex-shrink-0"
            >
              <div className="flex items-start gap-2 mb-2">
                <MapPin className="text-yellow-500 mt-1" size={18} />
                <p className="text-sm whitespace-pre-wrap">{addr.office}</p>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <Phone className="text-yellow-500" size={18} />
                <p className="text-sm">{addr.phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-yellow-500" size={18} />
                <p className="text-sm">info@oecl.sg</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="text-center text-white/70 mt-10 text-sm">
          &copy; {new Date().getFullYear()} OECL. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
