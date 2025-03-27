
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
    <div className="w-full mb-6 animate-matrix-fade" style={{ animationDelay: `${delay * 100}ms` }}>
      <h2 className="text-xs font-code mb-3 text-matrix-green/80">{title}</h2>
      <div className="flex flex-col space-y-3">
        {links.map((link, index) => (
          <LinkButton
            key={index}
            text={link.text}
            url={link.url}
            icon={link.icon}
            delay={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkSection;
