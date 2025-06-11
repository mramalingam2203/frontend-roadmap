import { motion } from "framer-motion";
import Services from "./components/Services";

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


  
      </main>
    
    </div>
  );
}
