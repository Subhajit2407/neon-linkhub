
import React from 'react';
import LinkButton from './LinkButton';

interface LinkSectionProps {
  title: string;
  links: Array<{
    text: string;
    url: string;
    icon: 'ai-chatbot' | 'habit-tracker' | 'portfolio' | 'build-mcp';
  }>;
  delay: number;
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, links, delay }) => {
  return (
    <div className="w-full mb-8 animate-matrix-fade" style={{ animationDelay: `${delay * 100}ms` }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="h-[1px] flex-1 bg-matrix-green/30 animate-matrix-pulse"></div>
        <h2 className="text-xs font-code text-matrix-green/80 px-2">{title}</h2>
        <div className="h-[1px] flex-1 bg-matrix-green/30 animate-matrix-pulse"></div>
      </div>
      <div className="flex flex-col space-y-3">
        {links.map((link, index) => (
          <div
            key={index}
            className="animate-slide-in-right"
            style={{ animationDelay: `${(index + 1) * 150}ms` }}
          >
            <LinkButton
              text={link.text}
              url={link.url}
              icon={link.icon}
              delay={index + 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkSection;
