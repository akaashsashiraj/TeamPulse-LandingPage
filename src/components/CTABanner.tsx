import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import teamPulseLogo from '@/assets/TeamPulseLogo.png';

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
  cta?: string;
  badge?: string;
}

const CTABanner = ({
  headline = "Your team's efficiency. Visualized live.",
  subheadline = "Know exactly what's happening, every second.",
  cta = "Start free trial",
  badge = "14 days • No credit card",
}: CTABannerProps) => {
  return (
    <section className="py-20 px-6 overflow-hidden relative">
      <style>{`
        @keyframes animate-first {
          0% { transform: translate(0, 0); }
          50% { transform: translate(30px, -50px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes animate-second {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 50px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes animate-third {
          0% { transform: translate(0, 0); }
          50% { transform: translate(60px, -30px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes animate-fourth {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-50px, -40px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes animate-fifth {
          0% { transform: translate(0, 0); }
          50% { transform: translate(40px, 60px); }
          100% { transform: translate(0, 0); }
        }
        .gradient-blob-1 { animation: animate-first 8s ease-in-out infinite; }
        .gradient-blob-2 { animation: animate-second 10s ease-in-out infinite; }
        .gradient-blob-3 { animation: animate-third 12s ease-in-out infinite; }
        .gradient-blob-4 { animation: animate-fourth 14s ease-in-out infinite; }
        .gradient-blob-5 { animation: animate-fifth 16s ease-in-out infinite; }
      `}</style>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden group"
      >
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-600" />
        
        {/* Animated Radial Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 -left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[rgb(139,92,246)] via-transparent to-transparent rounded-full blur-3xl opacity-60 mix-blend-mode-hard-light gradient-blob-1" 
          />
          <div 
            className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[rgb(236,72,153)] via-transparent to-transparent rounded-full blur-3xl opacity-50 mix-blend-mode-hard-light gradient-blob-2" 
          />
          <div 
            className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-gradient-to-br from-[rgb(249,115,22)] via-transparent to-transparent rounded-full blur-3xl opacity-40 mix-blend-mode-hard-light gradient-blob-3" 
          />
          <div 
            className="absolute -bottom-1/3 left-1/4 w-[550px] h-[550px] bg-gradient-to-br from-[rgb(168,85,247)] via-transparent to-transparent rounded-full blur-3xl opacity-45 mix-blend-mode-hard-light gradient-blob-4" 
          />
          <div 
            className="absolute top-1/2 right-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[rgb(236,72,153)] via-transparent to-transparent rounded-full blur-3xl opacity-35 mix-blend-mode-hard-light gradient-blob-5" 
          />
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center py-20 px-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-white shadow-2xl flex items-center justify-center p-2">
              <img 
                src={teamPulseLogo} 
                alt="TeamPulse Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
          >
            {headline}
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            {subheadline}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="bg-white text-teampulse-purple hover:bg-white/90 shadow-lg">
              {cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <div className="flex items-center gap-2 text-white text-sm font-semibold">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <span>{badge}</span>
            </div>
          </motion.div>
        </div>

        {/* Product screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="relative z-10 px-8 pb-8"
        >
          <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
            <img
              src="/src/assets/dashboard-screenshot.png"
              alt="TeamPulse Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
