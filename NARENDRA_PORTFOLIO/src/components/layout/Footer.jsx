import React from 'react';
import { HERO_CONTENT, NAV_LINKS } from '../../constants';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">{HERO_CONTENT.name}</h3>
            <p className="text-slate-500 text-sm">Building the future of the web, one byte at a time.</p>
          </div>
          
          <div className="flex gap-8">
            {NAV_LINKS.slice(0, 4).map(link => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} {HERO_CONTENT.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
