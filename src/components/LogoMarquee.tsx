import { motion } from 'framer-motion';

const logos = [
  'AIT Services', 'AIT SL', 'StateFinance', 'Cognitix', 'IFS',
  'Virtusa', 'Caltech', 'FutraTech', 'Prime1', 'TechSolutions',
];

const LogoMarquee = () => {
  return (
    <section className="bg-secondary py-12 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-medium"
        >
          Trusted by <span className="text-foreground font-semibold">1000+</span> teams at innovative companies
        </motion.p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <div className="w-32 h-12 flex items-center justify-center">
                <span className="text-2xl font-bold text-muted-foreground/40 tracking-tight">
                  {logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
