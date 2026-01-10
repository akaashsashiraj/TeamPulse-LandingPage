import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import dashboardImage from '@/assets/dashboard-screenshot.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blob-gradient blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-teampulse-pink/20 to-teampulse-blue/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-teampulse-green animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Now trusted by 1000+ teams worldwide
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
          >
            Stop guessing. {''}  <br />
            <span className="gradient-text">Start optimizing.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            The only workspace that gives Admins a real-time heartbeat of their agency. From active task timers to paid invoices, see it all in one view.
          </motion.p>

          {/* Email Input + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-16"
          >
            <Input
              type="email"
              placeholder="Enter your work email"
              className="h-14 px-6 rounded-full border-2 border-border bg-white text-base focus:border-primary"
            />
            <Button className="h-14 gradient-button text-white border-0 font-semibold px-8 rounded-full hover:opacity-90 transition-opacity shadow-lg whitespace-nowrap">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Dashboard Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative perspective-1000"
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-20 scale-95" />
              <img
                src={dashboardImage}
                alt="TeamPulse Dashboard"
                className="relative float-card p-2 md:p-4 rounded-3xl w-full max-w-5xl mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--secondary))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
