import React, { useState } from 'react';

export default function RolldownNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle button */}
      <div className="md:hidden flex justify-end pr-4 pt-2">
        <button
          onClick={() => setOpen(!open)}
          className="text-neon hover:text-white focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu */}
      <nav
        className={`${
          open ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 px-4 py-4 text-sm text-neon`}
      >
        <a
          href="#home"
          className="hover:font-bold hover:-translate-y-1 transition-all duration-200"
        >
          HOME
        </a>
        <a
          href="#domains"
          className="hover:font-bold hover:-translate-y-1 transition-all duration-200"
        >
          DOMAINS
        </a>
        <a
          href="#cfdprojects"
          className="hover:font-bold hover:-translate-y-1 transition-all duration-200"
        >
          CFD PROJECTS
        </a>
        <a
          href="#cfdservices"
          className="hover:font-bold hover:-translate-y-1 transition-all duration-200"
        >
          CFD SERVICES
        </a>
        <a
          href="#hpcservices"
          className="hover:font-bold hover:-translate-y-1 transition-all duration-200"
        >
          HPC SERVICES
        </a>
        <a
          href="#data"
          className="hover:font-bold hover:-translate-y-1 transition-all duration-200"
        >
          DATA-DRIVEN SIMULATIONS
        </a>
        <a
          href="#techstack"
          className="hover:font-bold hover:-translate-y-1 transition-all duration-200"
        >
          TECH STACK
        </a>
      </nav>
    </div>
  );
}
