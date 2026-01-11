import { motion } from 'framer-motion';
import { AlertCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BackgroundLines } from '@/components/ui/background-lines';

const DownloadSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blob-gradient blur-3xl opacity-30" />
      </div>

      {/* Animated Background Lines */}
      <BackgroundLines className="absolute inset-0" svgOptions={{ duration: 3 }} />

      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 gap-10 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Your Workspace,  <span className="gradient-text">Everywhere.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Keep your finger on the pulse, whether you're at your desk or in a meeting. Seamlessly sync tasks, timers, and invoices across all your devices.
          </p>
        </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="glass-card p-10 rounded-3xl text-center space-y-3">
            {/* Icon */}
            <div className="flex justify-center -mb-2">
              <img
                src="/src/assets/TeamPulseLogo.png"
                alt="TeamPulse logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-black gap-10 text-foreground">
              TeamPulse Agent
            </h2>

            {/* Description */}
            <p className="text-muted-foreground gap-10">
              Please dowenload the <span className="font-semibold text-teampulse-purple">TeamPulse Agent</span> on your desktop to log in automatically.
            </p>

            {/* Download Button */}
            <a 
              href="https://github.com/akaashsashiraj/TeamPulse-LandingPage/releases/download/v1.0.0/Team.Pulse.Agent.zip" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full" // Ensures the link takes up the full width like the button
              >
            <Button className="w-full h-12 rounded-xl text-base font-semibold gap-2" size="lg">
              
              <Download className="w-5 h-5" />
              Download Agent
            </Button>
            
            </a>  
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
