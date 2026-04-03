import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-midnight-light py-12 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link to="/" className="text-2xl font-serif text-cream hover:text-gold transition-colors duration-300">
            Éliane <span className="italic font-light">Renard</span>
          </Link>
          <p className="text-cream/50 text-sm mt-2 font-light">
            Capturing the ephemeral beauty of existence.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-cream/50 hover:text-gold transition-colors text-sm uppercase tracking-widest">Instagram</a>
          <a href="#" className="text-cream/50 hover:text-gold transition-colors text-sm uppercase tracking-widest">Behance</a>
          <a href="#" className="text-cream/50 hover:text-gold transition-colors text-sm uppercase tracking-widest">Twitter</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 text-center md:text-left text-cream/30 text-xs">
        &copy; {new Date().getFullYear()} Éliane Renard. All rights reserved.
      </div>
    </footer>
  );
}
