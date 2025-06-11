export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="neonumerics logo" className="h-10" />
        <span className="text-xl font-bold text-neon">NEONUMERICS</span>
      </div>
      <nav className="space-x-6 text-gray-300 text-sm text-neon">
        <a href="#home" className=" hover:font-bold hover:-translate-y-1 transition-all duration-200">HOME</a>
        <a href="#domains" className="hover:font-bold hover:-translate-y-1 transition-all duration-200">DOMAINS</a>
        <a href="#cfdprojects" className="hover:font-bold hover:-translate-y-1 transition-all duration-200">CFD PROJECTS</a>
        <a href="#cfdservices" className="hover:font-bold hover:-translate-y-1 transition-all duration-200">CFD SERVICES</a>

        <a href="#techstack" className="hover:font-bold hover:-translate-y-1 transition-all duration-200">TECH STACK</a>
      </nav>
    </header>
  );
}
