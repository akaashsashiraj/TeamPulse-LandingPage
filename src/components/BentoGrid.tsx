import { motion } from 'framer-motion';
import { TrendingUp, Clock, FileText, BarChart3 } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const BentoGrid = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Features that <span className="gradient-text">work for you.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Large Card - Efficiency Tracking */}
          <motion.div
            variants={item}
            className="md:col-span-2 glass-card p-8 hover:shadow-card transition-shadow"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teampulse-purple/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Real-time Efficiency Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor your team's productivity with live dashboards and insights.
                </p>
              </div>
            </div>
            
            <div className="flex items-end justify-center h-40">
              <div className="relative">
                <svg className="w-48 h-48" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="16"
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray="502"
                    initial={{ strokeDashoffset: 502 }}
                    whileInView={{ strokeDashoffset: 70 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    transform="rotate(-90 100 100)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--teampulse-purple))" />
                      <stop offset="100%" stopColor="hsl(var(--teampulse-pink))" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-black gradient-text">90%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small Card - Time Tracking */}
          <motion.div
            variants={item}
            className="glass-card p-8 hover:shadow-card transition-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-teampulse-green/10 flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-teampulse-green" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Native Time Tracking</h3>
            <p className="text-muted-foreground mb-6">
              Built-in timer for accurate project tracking.
            </p>
            
            <div className="glass rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Current task</span>
                <div className="w-3 h-3 rounded-full bg-teampulse-green animate-pulse" />
              </div>
              <div className="text-3xl font-mono font-bold text-teampulse-green">
                01:05:39
              </div>
            </div>
          </motion.div>

          {/* Small Card - Invoicing */}
          <motion.div
            variants={item}
            className="glass-card p-8 hover:shadow-card transition-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-teampulse-pink/10 flex items-center justify-center mb-4">
              <FileText className="w-7 h-7 text-teampulse-pink" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Automated Invoicing</h3>
            <p className="text-muted-foreground mb-4">
              Generate and send invoices with one click.
            </p>
            
            <div className="space-y-2">
              {['Invoice #001 - Sent', 'Invoice #002 - Paid', 'Invoice #003 - Draft'].map((inv, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className={`w-2 h-2 rounded-full ${
                    i === 0 ? 'bg-teampulse-blue' :
                    i === 1 ? 'bg-teampulse-green' : 'bg-muted-foreground'
                  }`} />
                  <span className="text-muted-foreground">{inv}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Wide Card - Resource Planning */}
          <motion.div
            variants={item}
            className="md:col-span-2 glass-card p-8 hover:shadow-card transition-shadow"
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-teampulse-orange/10 flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-teampulse-orange" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Visual Resource Planning</h3>
                <p className="text-muted-foreground">
                  See your team's capacity and workload at a glance.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { name: 'Alexander', progress: 75, color: 'bg-teampulse-purple' },
                { name: 'Isabelle', progress: 60, color: 'bg-teampulse-blue' },
                { name: 'Thomas', progress: 90, color: 'bg-teampulse-pink' },
              ].map((person, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                    {person.name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{person.name}</span>
                      <span className="text-muted-foreground">{person.progress}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${person.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${person.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
