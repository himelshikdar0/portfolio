import { Heart } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold gradient-text">
              {personalInfo.name}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <span>Developed with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>by <span className="text-primary font-medium">Himel</span></span>
          </div>
          <div className="text-sm text-slate-500">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
