
import React, { useEffect, useState } from 'react';
import ProfileSection from '@/components/ProfileSection';
import LinkSection from '@/components/LinkSection';
import Newsletter from '@/components/Newsletter';
import SocialLinks from '@/components/SocialLinks';
import GridBackground from '@/components/GridBackground';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Add a class to the body for background styling
    document.body.classList.add('bg-matrix-dark');
    
    return () => {
      document.body.classList.remove('bg-matrix-dark');
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <GridBackground />
      <div className="matrix-container">
        <ProfileSection />
        
        <LinkSection
          title="// FREE_AI_PROJECTS"
          links={[
            {
              text: "Build Your Own MCP Server",
              url: "https://example.com/mcp-server",
              icon: "build-mcp",
            },
          ]}
          delay={4}
        />
        
        <LinkSection
          title="// MY_APPS"
          links={[
            {
              text: "AI Chatbot",
              url: "https://example.com/chatbot",
              icon: "ai-chatbot",
            },
            {
              text: "Habit Tracker",
              url: "https://example.com/habit-tracker",
              icon: "habit-tracker",
            },
          ]}
          delay={5}
        />
        
        <LinkSection
          title="// LEARN_FROM_ME"
          links={[
            {
              text: "Welcome to my portfolio",
              url: "https://example.com/portfolio",
              icon: "portfolio",
            },
          ]}
          delay={6}
        />
        
        <Newsletter />
        
        <SocialLinks />
      </div>
    </>
  );
};

export default Index;
