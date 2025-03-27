
import React from 'react';
import { LinkedinIcon, InstagramIcon, TwitterIcon, MailIcon } from './Icons';

const SocialLinks: React.FC = () => {
  const links = [
    { icon: <LinkedinIcon className="w-5 h-5 text-matrix-green" />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <InstagramIcon className="w-5 h-5 text-matrix-green" />, url: "https://instagram.com", label: "Instagram" },
    { icon: <TwitterIcon className="w-5 h-5 text-matrix-green" />, url: "https://twitter.com", label: "Twitter" },
    { icon: <MailIcon className="w-5 h-5 text-matrix-green" />, url: "mailto:contact@example.com", label: "Email" }
  ];

  return (
    <div className="flex justify-center space-x-6 mt-12 mb-6">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full transition-all duration-300 hover:bg-matrix-green/10 hover:scale-110 group relative overflow-hidden"
          aria-label={link.label}
          style={{ animationDelay: `${(index + 6) * 100}ms` }}
        >
          <div className="animate-matrix-fade absolute inset-0 bg-matrix-green/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
          <div className="relative z-10">
            {link.icon}
          </div>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[10px] text-matrix-green/70 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 font-code">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
