import { motion } from 'framer-motion';
import { Activity, Clock, Briefcase, Users, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dashboardImage from '@/assets/dashboard-screenshot.png';
import timeTrackingImage from '@/assets/Time Traking.png';
import crmLeadsImage from '@/assets/CRM and Leads.png';
import resourcePlanImage from '@/assets/Resource Plan.png';
import leaveManagerImage from '@/assets/Leave Manager.png';

const FeaturesShowcase = () => {
  const features = [
    {
      id: 1,
      headline: "Your Team's Pulse, Live.",
      subheadline: 'Eliminate the "What are you working on?" messages.',
      description:
        "Get an instant read on your team's productivity with our signature Efficiency Score. See who is online, what tasks are active, and exactly how engaged your workforce is right now without being invasive.",
      bullets: ['Live Status Indicators (Online/Offline)', 'Dynamic Efficiency Percentages', 'Instant Task Visibility'],
      icon: Activity,
      color: 'from-teampulse-blue to-blue-400',
      alignment: 'left',
      stat: null,
      image: dashboardImage,
    },
    {
      id: 2,
      headline: 'Every Second Counted. Every Billable Saved.',
      subheadline: "Native time tracking that doesn't feel like a chore.",
      description:
        'Forget third-party timer apps. TeamPulse embeds precision timers directly into every task card. Whether it\'s a quick 12-minute update or a 3 hour deep work session, we capture the data you need for accurate client billing.',
      bullets: null,
      icon: Clock,
      color: 'from-teampulse-purple to-purple-400',
      alignment: 'right',
      stat: 'Agencies track 20% more billable hours with TeamPulse.',
      image: timeTrackingImage,
    },
    {
      id: 3,
      headline: 'From "New Lead" to "Paid" in One Tab.',
      subheadline: 'Stop switching between CRMs and accounting software.',
      description:
        'Manage your entire business lifecycle right where you manage your work. Capture leads in the CRM, convert them to projects, and generate professional Invoices the moment the work is done. One flow, zero friction.',
      bullets: null,
      icon: Briefcase,
      color: 'from-teampulse-pink to-pink-400',
      alignment: 'left',
      stat: null,
      image: crmLeadsImage,
    },
    {
      id: 4,
      headline: 'Master the Art of Delegation.',
      subheadline: 'Assign tasks without the burnout.',
      description:
        'Our visual Resource Plan lets you see who is overloaded and who has capacity. Drag, drop, and reassign tasks instantly to keep your projects moving and your team happy.',
      bullets: null,
      icon: Users,
      color: 'from-teampulse-green to-green-400',
      alignment: 'right',
      stat: null,
      image: resourcePlanImage,
    },
    {
      id: 5,
      headline: 'Leave Management Made Simple.',
      subheadline: 'Track time off without the back-and-forth emails.',
      description:
        'Empower your team to request leave with a single click. Admins can approve or reject requests instantly, view team availability calendars, and ensure no project deadlines are missed due to unexpected absences.',
      bullets: null,
      icon: Calendar,
      color: 'from-orange-400 to-orange-600',
      alignment: 'left',
      stat: null,
      image: leaveManagerImage,
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blob-gradient blur-3xl opacity-20" />
        <div className="absolute -bottom-40 left-0 w-[600px] h-[600px] rounded-full blob-gradient blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Everything you need to <span className="gradient-text">run your agency</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Five powerful features that work together to eliminate chaos and keep your team focused.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLeft = feature.alignment === 'left';

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  !isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={isLeft ? 'md:order-1' : 'md:order-2'}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-4xl font-black mb-3 leading-tight">
                    {feature.headline}
                  </h3>

                  <p className="text-lg font-semibold text-teampulse-purple mb-6">
                    {feature.subheadline}
                  </p>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  {feature.bullets && (
                    <ul className="space-y-3 mb-8">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teampulse-purple to-teampulse-pink mt-2 flex-shrink-0" />
                          <span className="text-foreground font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {feature.stat && (
                    <div className="bg-gradient-to-r from-teampulse-purple/10 to-teampulse-pink/10 border border-teampulse-purple/20 rounded-xl p-4 mb-8">
                      <p className="text-sm font-semibold text-teampulse-purple">
                        💡 {feature.stat}
                      </p>
                    </div>
                  )}

                  <Button className="group">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                {/* Visual */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={isLeft ? 'md:order-2' : 'md:order-1'}
                >
                  <div className="relative group">
                    {/* Glow background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} blur-2xl rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity`}
                    />

                    {/* Feature image */}
                    <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.headline}
                        className="w-full h-auto rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
