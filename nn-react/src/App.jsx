import { motion } from "framer-motion";
import Services from "./components/Services";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import ProjectPage from "./components/ProjectPage";

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
       
        <AboutUs />   

        <Services />

        <ProjectPage />
        
        <footer className="text-center text-gray-400 mt-12">
          <p>&copy; {new Date().getFullYear()} NEONUMERICS. All rights reserved.</p>
          <p className="text-sm">Designed with passion and precision.</p>
        </footer>
      </main>
    
    </div>
  );
}
