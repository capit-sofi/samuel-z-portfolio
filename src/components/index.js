import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Experiance from './Experiance';
import Skills from "./Skills";
import Works from "./Works";
import Feedbacks from "./Feedbacks";
import Contact from "./Contact";
import CanvasLoader from "./Loader";


export {
  Hero,
  Navbar,
  About,
  Skills,
  Experiance,
  Works,
  Feedbacks,
  Contact,
  CanvasLoader,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas
};



export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "ARCHICAD",
      "AUTOCAD",
      "REVIT",
      "RHINO-3D",
      "ENSCAP,D5,LUMION,UNREALENGINE",
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      "Bachelor's Degree in ARCHITECTURAL ENGINEERING",
      "INTERIOR DESIGN",
      
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    content: [
      "ARCHITECTURAL-DESIGHN",
      "INTERIOR-DESIGN",
    ],
  },
];