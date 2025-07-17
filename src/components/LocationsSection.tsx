import React, { useState } from "react";

type CountryKey = "India" | "Singapore" | "Malaysia" | "Thailand" | "Indonesia";
type LocationKey = string;

interface LocationInfo {
  address: string;
  phone: string;
  map: string;
}

const allLocations: Record<CountryKey, Record<LocationKey, LocationInfo>> = {
  India: {
    Chennai: {
      address: "Address for Chennai",
      phone: "+91 xxxxx xxxxx",
      map: "https://www.google.com/maps/d/embed?mid=1xTmhWpagroJz2YqtOTxHBEAZP8Xw_cA&ehbc=2E312F&noprof=1"
    },
    Chennai2: {
      address: "Address for Chennai 2",
      phone: "+91 xxxxx xxxxx",
      map: "https://www.google.com/maps/d/embed?mid=1prpWPmOJpIfxQg4LmwnRIyNE8pXue20&ehbc=2E312F&noprof=1"
    },
    Delhi: {
      address: "Address for Delhi",
      phone: "+91 xxxxx xxxxx",
      map: "https://www.google.com/maps/d/embed?mid=1prpWPmOJpIfxQg4LmwnRIyNE8pXue20&ehbc=2E312F&noprof=1"
    },
    Kolkata: {
      address: "Address for Kolkata",
      phone: "+91 xxxxx xxxxx",
      map: "https://www.google.com/maps/d/embed?mid=1rM6AXz8EHQ7xg4aldjPH2AJuY5NtapY&ehbc=2E312F&noprof=1"
    },
    Bengaluru: {
      address: "Address for Bengaluru",
      phone: "+91 xxxxx xxxxx",
      map: "https://www.google.com/maps/d/embed?mid=1VfZTXJHg3ekHgdcyt3lf9cbsEnf11oA&ehbc=2E312F&noprof=1"
    },
    Cochin: {
      address: "Address for Cochin",
      phone: "+91 xxxxx xxxxx",
      map: "https://www.google.com/maps/d/embed?mid=1wFWiRd2ewEGxxGv2NBKTwJX7eClgjv0&ehbc=2E312F&noprof=1"
    },
    Hyderabad: {
      address: "Address for Hyderabad",
      phone: "+91 xxxxx xxxxx",
      map: "https://www.google.com/maps/d/embed?mid=1nfVu0PP4O3WJ9ZUqbJjpnKCblkY9rJI&ehbc=2E312F&noprof=1"
    },
    Mumbai: {
      address: "Address for Mumbai",
      phone: "+91 xxxxx xxxxx",
      map: "https://www.google.com/maps/d/embed?mid=1ndB2LDzMO0nBfUDdGe2o7-_BpQxQRUQ&ehbc=2E312F&noprof=1"
    },
  },
  Singapore: {
    Singapore: {
      address: "Address for Singapore",
      phone: "+65 xxxxx xxxx",
      map: "https://www.google.com/maps/d/embed?mid=1dMWuQ-5-EQL2a1gOFRIYFxVLUdfERNw&ehbc=2E312F&noprof=1"
    }
  },
  Malaysia: {
    PortKlang: {
      address: "Address for Port Klang",
      phone: "+60 xxxxx xxxx",
      map: "https://www.google.com/maps/d/embed?mid=1wY9IR1V-C3m6rqDjbDVuARcHIn5DaX0&ehbc=2E312F&noprof=1"
    },
    PasirGudang: {
      address: "Address for Pasir Gudang",
      phone: "+60 xxxxx xxxx",
      map: "https://www.google.com/maps/d/embed?mid=1Ef2sco0B8ZB3fShOADFD17mX6eEn22g&ehbc=2E312F&noprof=1"
    }
  },
  Thailand: {
    Bangkok: {
      address: "Address for Bangkok",
      phone: "+66 xxxxx xxxx",
      map: "https://www.google.com/maps/d/embed?mid=1-KDMSa2eOSnchrGfGbRCMws3wdHa4tc&ehbc=2E312F&noprof=1"
    }
  },
  Indonesia: {
    Jakarta: {
      address: "Address for Jakarta",
      phone: "+62 xxxxx xxxx",
      map: "https://www.google.com/maps/d/embed?mid=1wNAxoHYpLj-a8ekPGklU6BpnaBaz0Co&ehbc=2E312F&noprof=1"
    },
    Surabaya: {
      address: "Address for Surabaya",
      phone: "+62 xxxxx xxxx",
      map: "https://www.google.com/maps/d/embed?mid=1ecTq28A-CHVdwkhZB9M1HpLKe-xPKo0&ehbc=2E312F&noprof=1"
    }
  }
};

export default allLocations;
