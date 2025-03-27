
import React from 'react';
import { StarBorder } from './ui/star-border';
import { AiChatbotIcon, HabitTrackerIcon } from './Icons';

type IconType = 'ai-chatbot' | 'habit-tracker' | 'portfolio' | 'build-mcp';

interface LinkButtonProps {
  text: string;
  url: string;
  icon: IconType;
  delay: number;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, url, icon, delay }) => {
  // Choose the appropriate icon based on the 'icon' prop
  const renderIcon = () => {
    switch (icon) {
      case 'ai-chatbot':
        return <AiChatbotIcon className="w-5 h-5 text-matrix-green animate-float" />;
      case 'habit-tracker':
        return <HabitTrackerIcon className="w-5 h-5 text-matrix-green animate-float" />;
      case 'portfolio':
        return (
          <div className="w-5 h-5 flex items-center justify-center text-matrix-green animate-float">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
              <path d="M18 14h-8" />
              <path d="M15 18h-5" />
              <path d="M10 6h8v4h-8V6Z" />
            </svg>
          </div>
        );
      case 'build-mcp':
        return (
          <div className="w-5 h-5 flex items-center justify-center text-matrix-green animate-float">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 17c-5.1-1-12-1-12-6v6c0 5 6.9 5 12 6v-6Z" />
              <path d="M4 11V5c0-3 4-3 8-3 5 0 8 0 8 3v2" />
              <path d="M4 11c.8-2 4-2 8-2 5 0 8 0 8 2" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <StarBorder 
      as="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full matrix-button link-shine animate-matrix-fade stagger-${delay} relative group`}
      color="#00FF41"
    >
      <div className="flex items-center w-full gap-3 relative z-10">
        {renderIcon()}
        <span className="flex-1 text-left font-code text-matrix-green">{text}</span>
        <svg
          className="w-5 h-5 text-matrix-green opacity-70 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
      <div className="absolute inset-0 bg-matrix-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
    </StarBorder>
  );
};

export default LinkButton;
