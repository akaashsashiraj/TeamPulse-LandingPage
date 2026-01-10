import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderKanban, Users, CalendarDays, Receipt } from 'lucide-react';

const features = [
  {
    id: 'project',
    title: 'Project Management',
    description: 'Visualize your projects with boards, lists, and timelines.',
    icon: FolderKanban,
    color: 'bg-teampulse-blue',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'crm',
    title: 'CRM',
    description: 'Track leads, deals, and customer relationships.',
    icon: Users,
    color: 'bg-teampulse-green',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'resource',
    title: 'Resource Planning',
    description: 'Manage team capacity and allocate resources effectively.',
    icon: CalendarDays,
    color: 'bg-teampulse-orange',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'invoicing',
    title: 'Invoicing',
    description: 'Create, send, and track invoices automatically.',
    icon: Receipt,
    color: 'bg-teampulse-pink',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80',
  },
];

export const TabbedFeatures = () => {
  const [activeTab, setActiveTab] = useState('project');
  const activeFeature = features.find((f) => f.id === activeTab);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Your Team’s Pulse, <span className="gradient-text">Live.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Eliminate the "What are you working on?" messages.
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
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeTab === feature.id;

              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                    isActive
                      ? 'glass-card shadow-card'
                      : 'hover:bg-secondary'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? feature.color : 'bg-secondary'
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 transition-colors ${
                          isActive ? 'text-white' : 'text-muted-foreground'
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Image Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={activeFeature?.image}
                  alt={activeFeature?.title}
                  className="w-full rounded-3xl float-card"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TabbedFeatures;
