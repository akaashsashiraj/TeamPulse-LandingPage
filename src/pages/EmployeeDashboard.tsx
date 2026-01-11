import { motion } from 'framer-motion';
import { LayoutDashboard, Calendar, Zap, CheckCircle, Clock, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import employeeDashboardImage from '@/assets/Employee Dashboard.png';
import employeeLeaveImage from '@/assets/Employee leave.png';
import employeePowercutImage from '@/assets/Employee Powercut.png';

const EmployeeHeroSection = () => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-background via-background to-secondary/40">
      <div className="container mx-auto px-6 grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teampulse-purple/15 to-teampulse-pink/15 px-4 py-2 text-sm font-semibold text-teampulse-purple">
            <Sparkles className="w-4 h-4" />
            New • Employee experience
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            A calmer, clearer dashboard for every employee.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Give teammates a modern home for their day: live tasks, time tracking, leave, and incident logging beautifully organized and distraction-free.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Live tasks', value: '12 active' },
              { label: 'On-time streak', value: '9 days' },
              { label: 'Avg. focus', value: '87%' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card border border-border/50 rounded-2xl px-4 py-3">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                <p className="text-xl font-semibold mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" className="group">
              Explore dashboard
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Watch 60s tour
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teampulse-purple/20 via-teampulse-pink/15 to-transparent blur-3xl rounded-[32px]" />
          <div className="relative rounded-[28px] border border-border bg-background/70 shadow-card overflow-hidden">
            <img
              src={employeeDashboardImage}
              alt="Employee Dashboard overview"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const EmployeeFeatures = () => {
  const features = [
    {
      id: 1,
      title: 'Personal Command Center',
      description:
        'Everything in one calm view: tasks, focus time, and progress widgets that adapt to how you work.',
      icon: LayoutDashboard,
      color: 'from-teampulse-blue to-blue-400',
      image: employeeDashboardImage,
      chips: ['Smart priorities', 'Focus mode', 'Inline timers'],
    },
    {
      id: 2,
      title: 'Leave in One Click',
      description:
        'Request, track, and plan time off with clear balances and instant status updates.',
      icon: Calendar,
      color: 'from-teampulse-purple to-purple-400',
      image: employeeLeaveImage,
      chips: ['Balances visible', 'Manager responses', 'Calendar sync'],
    },
    {
      id: 3,
      title: 'Issue & Powercut Log',
      description:
        'Flag outages or blockers in seconds so your metrics stay fair and your team stays informed.',
      icon: Zap,
      color: 'from-teampulse-pink to-pink-400',
      image: employeePowercutImage,
      chips: ['Time-safe logging', 'Notify teammates', 'History & trends'],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Built for <span className="gradient-text">every employee</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A modern workspace that feels personal action cards, live status, and effortless requests.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card rounded-3xl border border-border/70 overflow-hidden shadow-card hover:shadow-float transition-all"
              >
                <div className="relative bg-gradient-to-br from-white/8 to-white/4 p-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-teampulse-purple/10 via-transparent to-teampulse-pink/10 blur-3xl" />
                  <div className="relative rounded-2xl border border-border bg-background/70 p-3">
                    <img src={feature.image} alt={feature.title} className="w-full h-56 object-contain" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {feature.chips.map((chip) => (
                      <span
                        key={chip}
                        className="text-sm px-3 py-1 rounded-full bg-secondary text-foreground/90 border border-border"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <Button variant="link" className="px-0 text-teampulse-purple">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const EmployeeBenefits = () => {
  const benefits = [
    {
      title: 'Stay Focused',
      description: 'No distractions, just your tasks.',
      icon: TrendingUp,
      color: 'from-teampulse-blue to-blue-400',
    },
    {
      title: 'Track Your Time',
      description: 'Built-in timers for accuracy.',
      icon: Clock,
      color: 'from-teampulse-purple to-purple-400',
    },
    {
      title: 'Manage Workload',
      description: 'See priorities at a glance.',
      icon: CheckCircle,
      color: 'from-teampulse-pink to-pink-400',
    },
    {
      title: 'Request Leave',
      description: 'One-click approvals.',
      icon: Calendar,
      color: 'from-orange-400 to-orange-600',
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Everything at <span className="gradient-text">your fingertips</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that help you stay productive and in control.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="glass-card p-8 hover:shadow-card transition-all group cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to transform <span className="gradient-text">your workflow?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of team members already working smarter with TeamPulse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No credit card required. Start free for 14 days.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default function EmployeeDashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <EmployeeHeroSection />
      <EmployeeFeatures />
      <EmployeeBenefits />
      <CTA />
      <Footer />
    </div>
  );
}
