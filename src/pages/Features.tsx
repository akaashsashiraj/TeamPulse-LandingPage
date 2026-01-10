import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Clock, Briefcase, Users, FileText, Shield, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dashboardImage from '@/assets/dashboard-screenshot.png';

const FeatureHeroSection = () => {
  return (
    <section className="overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                Powering your agency,{' '}
                <span className="gradient-text">from lead to invoice.</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
                Explore the tools that help master admins boost efficiency by 40%. One unified platform to manage projects, teams, and clients all in one place.
              </p>
            </motion.div>
          </>
        }
      >
        <img
          src={dashboardImage}
          alt="TeamPulse Dashboard"
          className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
};

const ZigZagFeatures = () => {
  const features = [
    {
      id: 1,
      title: 'Real-Time Efficiency Tracking',
      description:
        'Stop guessing about productivity. See exactly how productive your team is with live Efficiency Scores and status indicators (Online/Offline). Get actionable insights to optimize resource allocation and boost team performance.',
      icon: TrendingUp,
      alignment: 'left',
      color: 'bg-teampulse-blue',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Native Time Tracking',
      description:
        'Track every second with precision. Live timers on every task ensure accurate billing and resource management. No more manual time entries—just real-time accuracy that builds trust with your clients.',
      icon: Clock,
      alignment: 'right',
      color: 'bg-teampulse-purple',
      image: 'https://images.unsplash.com/photo-1671109707550-8b27d99cd2bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'Integrated CRM & Invoicing',
      description:
        'Close the loop seamlessly. Manage Leads and generate Invoices directly from your workspace without switching apps. Automate workflows from prospect to paid invoice—no context switching required.',
      icon: Briefcase,
      alignment: 'left',
      color: 'bg-teampulse-pink',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Core <span className="gradient-text">capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your entire agency operation from a single platform.
          </p>
        </motion.div>

        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLeft = feature.alignment === 'left';

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isLeft && 'lg:direction-rtl'}`}
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`${!isLeft && 'lg:order-2'}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button className="group">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`${!isLeft && 'lg:order-1'}`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-teampulse-purple/20 to-teampulse-pink/20 blur-2xl rounded-2xl group-hover:blur-3xl transition-all duration-300"></div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="relative w-full h-96 object-cover rounded-2xl shadow-card group-hover:shadow-float transition-shadow"
                    />
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

const AdminDashboard = () => {
  const tabs = [
    {
      id: 'resource',
      title: 'Resource Plan',
      icon: TrendingUp,
      description:
        'Visualize your resource capacity with our intelligent planning tools. See team availability at a glance, forecast project timelines, and optimize utilization rates across your entire organization.',
      features: [
        'Capacity planning',
        'Timeline forecasting',
        'Utilization reports',
        'Resource allocation',
      ],
    },
    {
      id: 'team',
      title: 'Team Management',
      icon: Users,
      description:
        'Manage every team member with precision. Assign roles, set permissions, track performance metrics, and maintain detailed team profiles—all in one unified interface.',
      features: ['Role management', 'Permission control', 'Performance tracking', 'Team profiles'],
    },
    {
      id: 'project',
      title: 'Project View',
      icon: Briefcase,
      description:
        'Get a comprehensive view of all projects in progress. Monitor milestones, track deliverables, manage budgets, and maintain complete visibility across your entire project portfolio.',
      features: ['Project overview', 'Milestone tracking', 'Budget management', 'Deliverables'],
    },
  ];

  const [activeTab, setActiveTab] = useState('resource');

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
            Total Control <span className="gradient-text">for Admins</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master your organization with powerful admin tools designed for complex operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                    isActive ? 'glass-card shadow-card' : 'hover:bg-background'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-teampulse-purple' : 'bg-secondary'
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{tab.title}</h3>
                      <p className="text-muted-foreground text-sm">{tab.description}</p>
                    </div>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="h-1 bg-gradient-to-r from-teampulse-purple to-teampulse-pink mt-4 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {tabs.map((tab) => (
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="glass-card p-8"
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">{tab.title}</h3>
                    <p className="text-muted-foreground">{tab.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {tab.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teampulse-purple to-teampulse-pink"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 h-48 bg-gradient-to-br from-teampulse-purple/10 to-teampulse-pink/10 rounded-xl flex items-center justify-center border border-border">
                    <p className="text-muted-foreground">Dashboard Preview</p>
                  </div>
                </motion.div>
              )
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureGrid = () => {
  const gridFeatures = [
    {
      title: 'Projects',
      description: 'Organize tasks effectively.',
      icon: Briefcase,
      color: 'from-teampulse-blue to-blue-400',
    },
    {
      title: 'Assign Tasks',
      description: 'One-click delegation.',
      icon: Users,
      color: 'from-teampulse-purple to-purple-400',
    },
    {
      title: 'Security',
      description: 'Change Pass & Secure Login.',
      icon: Shield,
      color: 'from-teampulse-pink to-pink-400',
    },
    {
      title: 'Export Data',
      description: 'Data portability.',
      icon: Download,
      color: 'from-orange-400 to-orange-600',
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
            Everything <span className="gradient-text">else.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plus hundreds of other features to streamline your workflow.
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
          {gridFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="glass-card p-8 hover:shadow-card transition-all group cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
            Ready to boost <span className="gradient-text">efficiency?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join hundreds of agencies already transforming their operations with TeamPulse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download App
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

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <FeatureHeroSection />
      <ZigZagFeatures />
      <AdminDashboard />
      <FeatureGrid />
      <CTA />
      <Footer />
    </div>
  );
}