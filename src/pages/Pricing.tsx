import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    tagline: "For freelancers or very small teams getting organized",
    price: { monthly: 0, yearly: 0 },
    billedNote: "Free forever for up to 3 users. No card needed.",
    features: [
      "Task management (assign & track)",
      "Native time tracking (green timers)",
      "Basic dashboard (active tasks)",
      "Unlimited projects",
      "Team status (online/offline)",
      "Email support",
      "No Efficiency Scores",
      "No Invoicing or CRM",
    ],
    cta: "Get started",
    highlight: false,
    badge: null,
  },
  {
    name: "Agency",
    tagline: "For growing teams that need to track efficiency and get paid",
    price: { monthly: 15, yearly: 12 },
    billedNote: "Most popular — save with annual billing",
    features: [
      "Everything in Starter",
      "Real-time Efficiency Scores",
      "Visual Resource Planning",
      "Integrated CRM & Leads",
      "One-click invoicing",
      "Productivity reports (weekly)",
      "Slack/Email notifications",
    ],
    cta: "Start 14-day free trial",
    highlight: true,
    badge: "Recommended",
  },
  {
    name: "Business Scale",
    tagline: "For established agencies needing control and security",
    price: { monthly: 35, yearly: 29 },
    billedNote: "Best value for larger teams with advanced needs",
    features: [
      "Everything in Agency",
      "Master admin controls (RBAC)",
      "Client portal access",
      "Automated invoice reminders",
      "Unlimited history retention",
      "Priority support (24/7)",
      "Audit logs",
    ],
    cta: "Contact sales",
    highlight: false,
    badge: null,
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const pricingNote = useMemo(() => {
    return billingCycle === "yearly" ? "Save 15% with yearly billing" : "Flexibility with monthly billing";
  }, [billingCycle]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-24">
        <section className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold text-teampulse-purple uppercase tracking-[0.2em] mb-3">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              Compare plans and find your best fit
            </h1>
            <p className="text-lg text-muted-foreground">
              Transparent pricing for every stage of your team. Switch between monthly and yearly to see what works best.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
              <div className="inline-flex items-center rounded-full bg-muted p-1 shadow-inner">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === "monthly" ? "bg-white shadow text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === "yearly" ? "bg-white shadow text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Yearly
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-teampulse-purple font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{pricingNote}</span>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {plans.map((plan, idx) => {
              const priceValue = billingCycle === "yearly" ? plan.price.yearly : plan.price.monthly;
              const isCustom = priceValue === null;

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`relative rounded-3xl border backdrop-blur bg-white/70 dark:bg-white/5 p-8 flex flex-col h-full shadow-sm transition-all duration-300 ${
                    plan.highlight
                      ? "border-teampulse-purple/50 shadow-[0_20px_80px_-40px_rgba(91,95,199,0.6)]"
                      : "border-border"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-8 inline-flex items-center gap-2 bg-gradient-to-r from-teampulse-purple to-teampulse-pink text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      <span>{plan.badge}</span>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-teampulse-purple mb-1">{plan.name}</p>
                    <h3 className="text-3xl font-black mb-2">{plan.tagline}</h3>
                    <p className="text-sm text-muted-foreground">{plan.billedNote}</p>
                  </div>

                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-5xl font-black">
                      {isCustom ? "Custom" : `$${priceValue}`}
                    </span>
                    {!isCustom && (
                      <span className="text-muted-foreground">
                        /user/mo
                      </span>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-teampulse-purple" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button
                      variant={plan.highlight ? "default" : "outline"}
                      className={`w-full ${
                        plan.highlight ? "bg-teampulse-purple hover:bg-teampulse-purple/90" : ""
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      {isCustom ? "Talk with our team for a custom quote." : billingCycle === "yearly" ? "Billed annually" : "Billed monthly"}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 rounded-2xl border border-dashed border-teampulse-purple/30 bg-teampulse-purple/5 p-8 text-center">
            <p className="text-sm font-semibold text-teampulse-purple mb-2">Need help deciding?</p>
            <p className="text-lg text-foreground mb-4">
              We can tailor a rollout plan for your team size, security requirements, and migration needs.
            </p>
            <Button variant="outline" className="border-teampulse-purple/40 text-teampulse-purple">
              Talk to sales
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <CTABanner
            headline="Ready to transform your team's efficiency?"
            subheadline="Join hundreds of agencies already running on TeamPulse."
            cta="Get started free"
            badge="14 days • No credit card"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
