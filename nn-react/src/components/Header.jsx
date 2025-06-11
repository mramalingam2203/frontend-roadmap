export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="neonumerics logo" className="h-10" />
        <span className="text-xl font-bold text-neon">NEONUMERICS</span>
      </div>
      <nav className="space-x-6 text-gray-300 text-sm">
        <a href="#home" className="hover:text-neon">HOME</a>
        <a href="#pricing" className="hover:text-neon">PRICING</a>
        <a href="#about" className="hover:text-neon">ABOUT US</a>
        <a href="#contact" className="hover:text-neon">CONTACT US</a>
        <a href="#techstack" className="hover:text-neon">TECH STACK</a>
      </nav>
    </header>
  );
}
