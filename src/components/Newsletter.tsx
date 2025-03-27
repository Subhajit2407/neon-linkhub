
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate subscription
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive your first email soon.",
      duration: 3000,
    });
    
    setEmail('');
  };

  return (
    <div className="w-full mb-8 animate-matrix-fade stagger-5">
      <h2 className="text-xs font-code mb-3 text-matrix-green/80">// FREE_AI_NEWSLETTER</h2>
      <div className="neo-blur p-4 rounded-md">
        <p className="text-sm mb-4 text-matrix-green/90">
          I send out weekly emails with AI prompts, tools, tips and news. Free and straight into your inbox.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full p-3 bg-black/50 border border-matrix-green/30 rounded text-matrix-green placeholder:text-matrix-green/50 focus:border-matrix-green focus:outline-none focus:ring-1 focus:ring-matrix-green/50 transition-colors"
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-matrix-green text-black font-medium rounded transition-all duration-300 hover:bg-matrix-accent flex items-center justify-center gap-2"
          >
            <span>→ SUBSCRIBE</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
