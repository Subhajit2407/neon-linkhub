
import React from 'react';
import { LinkedinIcon, InstagramIcon, TwitterIcon, MailIcon } from './Icons';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6 mt-10 animate-matrix-fade stagger-6">
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-full transition-all duration-300 hover:bg-matrix-green/10 hover:scale-110"
        aria-label="LinkedIn"
      >
        <LinkedinIcon className="w-5 h-5 text-matrix-green" />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-full transition-all duration-300 hover:bg-matrix-green/10 hover:scale-110"
        aria-label="Instagram"
      >
        <InstagramIcon className="w-5 h-5 text-matrix-green" />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2 rounded-full transition-all duration-300 hover:bg-matrix-green/10 hover:scale-110"
        aria-label="Twitter"
      >
        <TwitterIcon className="w-5 h-5 text-matrix-green" />
      </a>
      <a 
        href="mailto:contact@example.com" 
        className="p-2 rounded-full transition-all duration-300 hover:bg-matrix-green/10 hover:scale-110"
        aria-label="Email"
      >
        <MailIcon className="w-5 h-5 text-matrix-green" />
      </a>
    </div>
  );
};

export default SocialLinks;
