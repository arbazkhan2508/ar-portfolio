export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  role: string;
  contributions: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  heroImage: string;
  keyScreens: {
    title: string;
    description: string;
    image: string;
  }[];
  challenge: string;
  architecture: {
    title: string;
    description: string;
  }[];
  outcome: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "travquest",
    number: "01",
    title: "TravQuest",
    subtitle: "Travel marketplace & booking platform",
    category: "Full-Stack Web App",
    description:
      "A production travel marketplace where users discover and book curated travel experiences while vendors manage listings, availability, and reservations via a dedicated host portal.",
    role: "Frontend & Integration Engineer",
    contributions: [
      "Designed and implemented high-performance responsive frontend architecture in Next.js",
      "Integrated Cashfree payment gateway for smooth, secure transaction processing",
      "Engineered real-time search filtering, location indexing, and instant booking confirmation state",
      "Optimized Core Web Vitals to achieve sub-second page loads across mobile networks",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Cashfree API", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.travquest.in/",
    heroImage: "/projects/travquest/image1.jpeg",
    keyScreens: [
      {
        title: "Experience Booking Interface",
        description: "Interactive package selection and instant booking checkout UI.",
        image: "/projects/travquest/image2.png",
      },
      {
        title: "Tour Package Search & Filtering",
        description: "Real-time location, activity, and price range filtering engine.",
        image: "/projects/travquest/image3.png",
      },
      {
        title: "Reservation & Payment Flow",
        description: "Multi-step payment modal integrated with Cashfree webhooks.",
        image: "/projects/travquest/image4.png",
      },
      {
        title: "Traveler Itinerary Manager",
        description: "Personal traveler dashboard for managing active and upcoming bookings.",
        image: "/projects/travquest/image5.png",
      },
    ],
    challenge:
      "The primary challenge was building a dual-sided travel ecosystem with zero-latency search queries while providing vendors with real-time inventory management at host.travquest.in.",
    architecture: [
      {
        title: "Client-Side Search & Caching",
        description: "Implemented SWR-based data fetching layer with debounced query parameters to minimize server overhead.",
      },
      {
        title: "Payment Gateway Webhooks",
        description: "Constructed resilient Cashfree payment verification pipeline with automated booking confirmation receipts.",
      },
    ],
    outcome:
      "Successfully launched live production travel marketplace supporting high concurrent booking volume.",
    featured: true,
  },
  {
    slug: "host-travquest",
    number: "02",
    title: "TravQuest Host Portal",
    subtitle: "Vendor management & inventory control platform",
    category: "Full-Stack Web App",
    description:
      "A dedicated operational dashboard hosted at host.travquest.in allowing tour operators, travel vendors, and experience hosts to manage package listings, track reservations, and view payout analytics.",
    role: "Lead Frontend Engineer",
    contributions: [
      "Built complete vendor dashboard at host.travquest.in for package inventory and pricing controls",
      "Developed interactive availability booking calendar with drag-and-drop schedule editing",
      "Created automated payout ledger calculations and revenue telemetry charts",
      "Implemented role-based operator authentication and listing status workflows",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST API", "Recharts"],
    liveUrl: "https://host.travquest.in/",
    heroImage: "/projects/host-travquest/image1.jpeg",
    keyScreens: [
      {
        title: "Host Operator Dashboard",
        description: "Executive control desk for tracking active tour bookings and earnings.",
        image: "/projects/host-travquest/image2.png",
      },
      {
        title: "Package Inventory Manager",
        description: "Interface for hosts to create, edit, and publish new travel experience listings.",
        image: "/projects/host-travquest/image3.png",
      },
      {
        title: "Booking Calendar & Availability",
        description: "Real-time calendar interface for setting date caps and seat limits.",
        image: "/projects/host-travquest/image4.png",
      },
      {
        title: "Revenue & Payout Ledger",
        description: "Automated ledger tracking vendor payouts and completed trip settlements.",
        image: "/projects/host-travquest/image5.png",
      },
    ],
    challenge:
      "Tour operators needed an effortless interface to update seat availability on mobile while out in the field.",
    architecture: [
      {
        title: "Optimized Operator Workflow",
        description: "Engineered mobile-first React component system tailored for tablet and phone viewports.",
      },
      {
        title: "Real-Time Booking Sync",
        description: "Connected host inventory state with main travquest.in marketplace via API endpoints.",
      },
    ],
    outcome:
      "Streamlined vendor package onboarding time by 40% across active tour hosts.",
    featured: true,
  },
  {
    slug: "ehresmann-engineering",
    number: "03",
    title: "Ehresmann Engineering",
    subtitle: "Industrial telecommunications & tower engineering platform",
    category: "Enterprise Web Platform",
    description:
      "A high-impact web application for an established engineering firm specializing in custom telecommunication towers, monopoles, and structural mounts.",
    role: "Full-Stack Web Developer",
    contributions: [
      "Engineered responsive product specification configurator for industrial tower equipment",
      "Built custom RFQ (Request For Quote) dynamic inquiry workflow with specification file attachment",
      "Created high-resolution interactive engineering showcase for monopole, guyed, and self-support towers",
      "Implemented server-side rendering for optimal search engine indexation and high load speeds",
      "Designed dark editorial industrial aesthetic reflecting precision engineering standards",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React", "Node.js"],
    liveUrl: "https://www.ehresmannengineering.com/",
    heroImage: "/projects/ehrishmaan/image1.jpeg",
    keyScreens: [
      {
        title: "Structural Monopole & Tower Spec Sheet",
        description: "Detailed catalog viewer displaying structural load capacities and CAD spec sheets.",
        image: "/projects/ehrishmaan/image2.png",
      },
      {
        title: "Engineering Catalog & CAD Viewer",
        description: "High-density technical showcase of monopoles and antenna mounts.",
        image: "/projects/ehrishmaan/image3.png",
      },
      {
        title: "Wind Load Quote Inquiry Builder",
        description: "Multi-step engineering quote request builder taking structural wind load inputs.",
        image: "/projects/ehrishmaan/image4.png",
      },
      {
        title: "Telecommunication Mounts Showcase",
        description: "Interactive visual catalog for custom industrial mounting solutions.",
        image: "/projects/ehrishmaan/image5.png",
      },
    ],
    challenge:
      "Industrial B2B clients require rapid access to technical engineering specifications. The platform delivered high-speed navigation, mobile-responsive engineering diagrams, and an efficient lead inquiry pipeline.",
    architecture: [
      {
        title: "Next.js App Router Architecture",
        description: "Leveraged server components for static site pre-rendering to deliver 98+ Lighthouse performance scores.",
      },
      {
        title: "Dynamic Asset Pipeline",
        description: "Constructed lazy-loading visual asset gallery with responsive image breakpoints for high-density tower renders.",
      },
    ],
    outcome:
      "Delivered production industrial portal driving qualified B2B engineering quote requests.",
    featured: true,
  },
  {
    slug: "ocular-iot",
    number: "04",
    title: "Ocular IoT",
    subtitle: "Industrial IoT telemetry dashboard & device monitor",
    category: "SaaS Application",
    description:
      "A real-time IoT device telemetry dashboard displaying live sensor data, automated hardware alerts, device diagnostic analytics, and interactive visual particle monitors.",
    role: "Lead Frontend Engineer",
    contributions: [
      "Architected interactive real-time telemetry dashboard for hardware sensor monitoring",
      "Built responsive unit asset analytics overview with device status alerts",
      "Integrated Nodemailer notifications for critical threshold hardware events",
      "Implemented high-performance particle animations and dark-themed telemetry graphs",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Nodemailer", "tsParticles"],
    liveUrl: "https://ocular-iot.com/",
    heroImage: "/projects/ocular/image1.jpeg",
    keyScreens: [
      {
        title: "Real-Time Telemetry Dashboard",
        description: "Live sensor data stream displaying voltage, temperature, and signal metrics.",
        image: "/projects/ocular/image2.png",
      },
      {
        title: "Hardware Unit Asset Monitoring",
        description: "Grid monitor tracking connected hardware nodes across industrial sites.",
        image: "/projects/ocular/image3.png",
      },
      {
        title: "Device Diagnostic Analytics & Alerts",
        description: "Automated alert trigger log displaying active hardware anomalies.",
        image: "/projects/ocular/image4.png",
      },
      {
        title: "Sensor Signal Telemetry Graph",
        description: "Historical line charts for plotting long-term hardware sensor performance.",
        image: "/projects/ocular/image5.png",
      },
    ],
    challenge:
      "Handling continuous high-frequency telemetry streams required zero-lag React state management and hardware status rendering.",
    architecture: [
      {
        title: "Optimized Telemetry Render Loop",
        description: "Engineered memoized dashboard components reducing unneeded DOM recalculations.",
      },
      {
        title: "Automated Email Alert System",
        description: "Configured Nodemailer alert triggers for instant critical device failure dispatch.",
      },
    ],
    outcome:
      "Shipped live industrial IoT monitoring web dashboard operating with high data throughput.",
    featured: true,
  },
  {
    slug: "pyram",
    number: "05",
    title: "Pyram",
    subtitle: "Modern enterprise digital platform & web application",
    category: "Full-Stack Web App",
    description:
      "A feature-rich digital web application featuring dynamic form validation, multi-step onboarding, REST API integrations, and responsive UI layouts.",
    role: "Full-Stack Engineer",
    contributions: [
      "Developed responsive frontend interfaces with Formik & Yup validation schemas",
      "Integrated Axios REST API data fetching pipeline with error handling & toast feedback",
      "Built localized country/state/city selection inputs and dynamic data rendering",
      "Designed dark-mode component architecture utilizing Material UI & Tailwind CSS",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Axios", "Material UI", "Tailwind CSS"],
    liveUrl: "https://pyram.online/",
    heroImage: "/projects/pyram/image1.png",
    keyScreens: [
      {
        title: "Enterprise Digital Dashboard",
        description: "Centralized user desk for tracking active digital platform services.",
        image: "/projects/pyram/image2.png",
      },
      {
        title: "Onboarding Workflow & User Settings",
        description: "Multi-step user profile setup with dynamic form validation.",
        image: "/projects/pyram/image3.png",
      },
      {
        title: "Dynamic Form Validation Engine",
        description: "Formik and Yup schema implementation with real-time field validation.",
        image: "/projects/pyram/image4.png",
      },
      {
        title: "REST API Integration Telemetry",
        description: "Live connection feedback layer with automated toast notifications.",
        image: "/projects/pyram/image5.png",
      },
    ],
    challenge:
      "Delivering a multi-step user onboarding flow with dynamic location selection while maintaining high UI speed.",
    architecture: [
      {
        title: "Schema Form Architecture",
        description: "Combined Formik and Yup for client-side validation and responsive field state.",
      },
    ],
    outcome:
      "Successfully launched live web platform supporting dynamic user workflows.",
    featured: true,
  },
  {
    slug: "keosha-designs",
    number: "06",
    title: "Keosha Designs",
    subtitle: "Luxury interior design & custom furniture e-commerce showcase",
    category: "E-Commerce & Digital Studio",
    description:
      "An immersive e-commerce and portfolio web application for a boutique luxury interior design studio featuring custom furniture customization and architectural project showcases.",
    role: "Frontend Developer & UI Designer",
    contributions: [
      "Engineered smooth touch-responsive product slider carousels using Swiper.js and CSS Grid",
      "Built interactive custom furniture material and finish selector preview component",
      "Designed editorial visual grid layouts highlighting high-resolution architectural interior projects",
      "Implemented mobile-first navigation menu with smooth spring animations",
      "Optimized visual asset delivery through Next.js Image component lazy loading",
    ],
    technologies: ["Next.js", "React", "Swiper.js", "TypeScript", "Tailwind CSS", "Lucide React"],
    liveUrl: "https://keosha-designs.vercel.app/",
    heroImage: "/projects/keosha/image1.jpeg",
    keyScreens: [
      {
        title: "Boutique Luxury Interior Showcase",
        description: "Editorial gallery displaying residential and commercial interior design transformations.",
        image: "/projects/keosha/image2.png",
      },
      {
        title: "Custom Furniture Configurator",
        description: "Interactive furniture configurator allowing clients to switch fabric textures in real time.",
        image: "/projects/keosha/image3.png",
      },
      {
        title: "Architectural Design Collection",
        description: "High-resolution project gallery with smooth lazy loading image transitions.",
        image: "/projects/keosha/image4.png",
      },
      {
        title: "E-Commerce Cart & Checkout UX",
        description: "Touch-optimized shopping bag modal and smooth checkout interface.",
        image: "/projects/keosha/image5.png",
      },
    ],
    challenge:
      "High-end luxury brands require an ultra-polished presentation where imagery, motion, and typography feel seamless.",
    architecture: [
      {
        title: "Custom Swiper Integration",
        description: "Built hardware-accelerated touch sliders with custom pagination indicators.",
      },
    ],
    outcome:
      "Delivered luxury digital studio platform doubling online client inquiry conversion.",
    featured: true,
  },
  {
    slug: "snp-platform",
    number: "07",
    title: "SNP Platform",
    subtitle: "Digital platform & modern web application",
    category: "Full-Stack Web App",
    description:
      "A modern digital platform application featuring responsive component architecture, optimized asset pipeline, and client interaction workflows.",
    role: "Full-Stack Web Developer",
    contributions: [
      "Built responsive user interface using Next.js, React, and modern CSS styling",
      "Optimized visual asset rendering and client-side page load times",
      "Implemented responsive cross-device layout structures and clean typography",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://snp-platform.app/",
    heroImage: "/projects/snp-landing/image1.jpeg",
    keyScreens: [
      {
        title: "SNP Platform Main Overview",
        description: "Interactive landing page showcase.",
        image: "/projects/snp-landing/image2.png",
      },
      {
        title: "Feature Showcase & Layout",
        description: "Grid section detailing core platform capabilities.",
        image: "/projects/snp-landing/image3.png",
      },
      {
        title: "Client Onboarding Interface",
        description: "Streamlined signup and service selection workflow.",
        image: "/projects/snp-landing/image4.png",
      },
      {
        title: "Responsive Mobile Viewport",
        description: "Mobile-optimized presentation ensuring zero broken layouts on phones.",
        image: "/projects/snp-landing/image5.png",
      },
    ],
    challenge:
      "Building a high-converting, clean landing page architecture for digital platform clients.",
    architecture: [
      {
        title: "Modular Layout Components",
        description: "Structured React components built for scalability and performance.",
      },
    ],
    outcome:
      "Engineered clean production web build with sub-second page performance.",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}
