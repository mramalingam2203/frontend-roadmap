import { motion } from "framer-motion";
import Services from "./components/Services";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import ProjectPage from "./components/ProjectPage";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-white">
      <Header />
      <main className="flex-grow px-6 pb-16">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-neon text-center mt-8"
        >
          NEONUMERICS

        </motion.h1 >

<hr className="border-t-2 border-neon my-4 w-1/3 mx-auto" />


        <AboutUs />


        <Services />
<hr className="border-t-2 border-neon my-4 w-1/2 mx-auto" />

        <ProjectPage />
<hr className="border-t-2 border-neon my-4 w-4/5 mx-auto" />
        
        <Footer /> 
      </main>
    
    </div>
  );
}
