
import React, { useState, useEffect } from 'react';

const ProfileSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "I help founders build their next BIG idea with AI and automation ✓";
  
  useEffect(() => {
    setLoaded(true);
    
    // Typing animation
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
    
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className={`flex flex-col items-center text-center mb-10 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative group mb-5">
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-matrix-green to-matrix-accent opacity-50 blur-sm group-hover:opacity-75 transition-opacity"></div>
        <div className="relative overflow-hidden rounded-full w-24 h-24 border-2 border-matrix-green">
          <img 
            src="/lovable-uploads/aee333d9-56f8-42ed-94a8-7e74bb7aa66f.png" 
            alt="Profile" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      
      <h1 className="text-2xl font-bold mb-1 animate-matrix-fade stagger-1">
        <span className="text-white">Subhajit</span> <span className="text-glow">Talukder</span>
        <span className="inline-block animate-cursor-blink ml-1">|</span>
      </h1>
      
      <div className="text-sm text-matrix-green/90 mb-4 animate-matrix-fade stagger-2">
        Coder, Creator, Mentor
      </div>
      
      <p className="text-sm max-w-xs leading-relaxed mb-6 min-h-[3rem] animate-matrix-fade stagger-3">
        {typedText}
      </p>
    </div>
  );
};

export default ProfileSection;
