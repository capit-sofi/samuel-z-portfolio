import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import Lumion from '../assets/Lumion.jpg'
import archicad from '../assets/archicad.jpg'
import revit from '../assets/revit.png'
import twinmotion from '../assets/twinmotion.jpg'
import house1 from '../assets/house1.jpg'
import house2 from '../assets/house2.jpg'
import house4 from '../assets/house4.png'
import house6 from '../assets/house6.png'
import house7 from '../assets/house7.png'
import house8 from '../assets/house8.jpg'
import house9 from '../assets/house9.jpg'
import house10 from '../assets/house10.jpg'
import house12 from '../assets/house12.png'
import park3 from '../assets/park3.jpg'
import park2 from '../assets/park2.jpg'
import park1 from '../assets/park1.jpg'
import { BsInfoSquare } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";
import { FiGrid } from "react-icons/fi";
import { TiHomeOutline } from "react-icons/ti";

export const navLinks = [

    {
    id: "home",
    title: "Hero",
    icon:TiHomeOutline,
   
  },
    {
    id: "about",
    title: "About",
    icon:BsInfoSquare,
    
  },
    {
    id: "skills",
    title: "Skills",
    icon:GiSkills,
   
  },
  {
    id: "work",
    title: "Works",
    icon:FiGrid,
    
  },
  {
    id: "experiance",
    title: "Experiance",
    icon:GrUserWorker,
    
  },
  {
    id: "contact",
    title: "Contact",
    icon:RiContactsFill,
    
  },
];

const services = [
  {
    title: "Archicad",
    icon: archicad,
  },
  {
    title: "Revit",
    icon: revit,
  },
  {
    title: "Lumion",
    icon: Lumion,
  },
  {
    title: "Twinmotion",
    icon: twinmotion,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Architect & Site Supervisor ",
    company_name: "Melantra Consulting Architects and Engineers PLC ",
    icon: tesla,
    iconBg: "#383E56",
    date: "2015E.C - Present",
    points: [
      "Prepare and develop architectural drawings, designs, and presentations for various projects.",
      "Supervise on-site construction activities to ensure design accuracy and quality implementation.",
      "Coordinate between design teams, contractors, and clients to resolve technical and site-related issues.",
      "Conduct site inspections and prepare progress and quality control reports.",
    ],
  },
  {
    title: " Architect ",
    company_name: "Haramaya University ",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2013E.C - May 2014E.C",
    points: [
      "Design and prepare architectural plans for university buildings and facilities.",
      "Develop detailed working drawings and specifications for construction projects.",
      "Conduct site assessments and prepare feasibility studies for proposed projects.",
      "Participate in renovation and maintenance planning for existing university structures."
    ],
  },
  {
    title: " CEO / General-Manager ",
    company_name: "Abyssinia Building Design & Consulting PLC ",
    icon: tesla,
    iconBg: "#383E56",
    date: "2013E.C - present",
    points: [
      "Provide strategic leadership and overall management of the company’s operations and projects.",
      "Develop business plans, budgets, and growth strategies aligned with company objectives.",
      "Oversee design, engineering, and construction departments to ensure high-quality project delivery.",
      "Lead client relations, contract negotiations, and partnership development."
    ],
  },
  {
    title: "Architect / Manager",
    company_name: "Abyssinia Building Design & Consulting PLC",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2013E.C - Present",
    points: [
      "Lead and manage architectural design projects from concept to completion.",
      "Prepare detailed drawings, 3D models, and presentation materials for clients.",
      "Coordinate with structural, electrical, and mechanical teams to ensure design integration.",
      "Supervise design staff and oversee project schedules, budgets, and quality standards."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "G + 2",
    description:
      "A G+2 mixed-use building combining commercial spaces on the ground floor with residential units above. Designed for efficiency, aesthetics, and sustainability using Revit and Lumion.",
    tags: [
      {
        name: "revit",
        color: "blue-text-gradient",
      },
      {
        name: "lumion",
        color: "green-text-gradient",
      },
      {
        name: "Enscap",
        color: "pink-text-gradient",
      },
    ],
    image: house4,
    source_code_link: "",
  },
  {
    name: "Interior Design",
    description:
      "A modern interior design focused on comfort, functionality, and aesthetics. The design features harmonious color schemes, natural lighting and visualized using Revit and Lumion/Twinmotion.",
    tags: [
      {
        name: "revit",
        color: "blue-text-gradient",
      },
      {
        name: "lumion",
        color: "green-text-gradient",
      },
      {
        name: "Twinmotion",
        color: "pink-text-gradient",
      },
    ],
    image: house7,
    source_code_link: "",
  },
  {
    name: "G + 2",
    description:
      "A G+2 mixed-use building combining commercial spaces on the ground floor with residential units above. Designed for efficiency, aesthetics, and sustainability using Revit and Lumion.",
    tags: [
      {
        name: "revit",
        color: "blue-text-gradient",
      },
      {
        name: "lumion",
        color: "green-text-gradient",
      },
      {
        name: "twinmotion",
        color: "pink-text-gradient",
      },
    ],
    image: house2,
    source_code_link: "",
  },
  {
    name: "G + 2",
    description:
      "A G+2 mixed-use building combining commercial spaces on the ground floor with residential units above. Designed for efficiency, aesthetics, and sustainability using Revit and Lumion.",
    tags: [
      {
        name: "revit",
        color: "blue-text-gradient",
      },
      {
        name: "lumion",
        color: "green-text-gradient",
      },
      {
        name: "twinmotion",
        color: "pink-text-gradient",
      },
    ],
    image: house1,
    source_code_link: "",
  },
  {
    name: "Basket-Ball Court",
    description:
      "A professionally designed basketball court featuring regulation dimensions, smooth playing surface, clear markings, proper lighting, and seating arrangements to ensure safety, functionality, and an optimal playing experience.",
    tags: [
      {
        name: "revit",
        color: "blue-text-gradient",
      },
      {
        name: "lumion",
        color: "green-text-gradient",
      },
      {
        name: "twinmotion",
        color: "pink-text-gradient",
      },
    ],
    image: park1,
    source_code_link: "",
  },
  {
    name: "Interior Design",
    description:
      "A modern interior design focused on comfort, functionality, and aesthetics. The design features harmonious color schemes, natural lighting and visualized using Revit and Lumion/Twinmotion.",
    tags: [
      {
        name: "revit",
        color: "blue-text-gradient",
      },
      {
        name: "lumion",
        color: "green-text-gradient",
      },
      {
        name: "twinmotion",
        color: "pink-text-gradient",
      },
    ],
    image: house6,
    source_code_link: "",
  },
    {
    name: "Ethiopian Navey Force Landscape",
    description:
      "The Ethiopian Navy Force Landscape Architectural Design integrates functionality, security, and aesthetics to create a disciplined yet inviting environment.",
    tags: [
      {
        name: "revit",
        color: "blue-text-gradient",
      },
      {
        name: "lumion",
        color: "green-text-gradient",
      },
      {
        name: "twinmotion",
        color: "pink-text-gradient",
      },
    ],
    image: park2,
    source_code_link: "",
  },
    {
    name: "G + 2",
    description:
      "A modern interior design focused on comfort, functionality, and aesthetics. The design features harmonious color schemes, natural lighting and visualized using Revit and Lumion/Twinmotion.",
    tags: [
      {
        name: "revit",
        color: "blue-text-gradient",
      },
      {
        name: "lumion",
        color: "green-text-gradient",
      },
      {
        name: "twinmotion",
        color: "pink-text-gradient",
      },
    ],
    image: house8,
    source_code_link: "",
  },
    {
    name: "G + 7 commercial",
    description:
      "The G+7 Commercial Building Design combines modern architecture with efficient spatial organization, featuring retail spaces on lower floors and flexible office areas above. The design emphasizes natural lighting, vertical circulation efficiency.",
    tags: [
      {
        name: "revit",
        color: "blue-text-gradient",
      },
      {
        name: "lumion",
        color: "green-text-gradient",
      },
      {
        name: "twinmotion",
        color: "pink-text-gradient",
      },
    ],
    image: house9,
    source_code_link: "",
  },
      {
    name: "G + 4 Residential",
    description:
      " The G+4 Residential Building Design offers modern, comfortable living spaces with efficient layouts, natural lighting, and ventilation, emphasizing functionality, aesthetics, and community-friendly design.",
    tags: [
      {
        name: "revit",
        color: "blue-text-gradient",
      },
      {
        name: "lumion",
        color: "green-text-gradient",
      },
      {
        name: "twinmotion",
        color: "pink-text-gradient",
      },
    ],
    image: house12,
    source_code_link: "",
  },
      {
    name: "G + 3 Residential",
    description:
      "The G+3 Residential Building Design features functional and comfortable living units with modern aesthetics, good ventilation, and efficient space use for urban family living.",
    tags: [
      {
        name: "revit",
        color: "blue-text-gradient",
      },
      {
        name: "lumion",
        color: "green-text-gradient",
      },
      {
        name: "twinmotion",
        color: "pink-text-gradient",
      },
    ],
    image: house10,
    source_code_link: "",
  },
      {
    name: "Ethiopian Navey Force Landscape",
    description:
      "The Ethiopian Navy Force Landscape Architectural Design integrates functionality, security, and aesthetics to create a disciplined yet inviting environment.",
    tags: [
      {
        name: "revit",
        color: "blue-text-gradient",
      },
      {
        name: "lumion",
        color: "green-text-gradient",
      },
      {
        name: "twinmotion",
        color: "pink-text-gradient",
      },
    ],
    image: park3,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "ETABS",
      "SAFE",
      "SAP2000",
      "CSIBRIDGE,CIVIL3D",
      "REVIT,ARCHICAD,AUTOCAD",
      "RHINO-3D",
      "ENSCAP,D5,LUMION,UNREALENGINE",
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      "Bachelor's Degree in CIVIL ENGINEERING",
      "STRUCTURAL AND ARCHITECTURALDESIGHN",
      "Quantity Surveyor (QS) "
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    content: [
      "STRUCTURAL-DESIGHN",
      "CIVIL-ENGINEERING",
      "ARCHITECTURAL-DESIGHN",
    ],
  },
];