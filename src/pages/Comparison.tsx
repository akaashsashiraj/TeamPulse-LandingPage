import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, AlertTriangle, PanelsTopLeft, Workflow, Clock3, FileSpreadsheet, LayoutDashboard } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Comparison = () => {
  const navItems = useMemo(
    () => [
      { id: 'time-doctor', label: 'vs Time Doctor' },
      { id: 'hubstaff', label: 'vs Hubstaff' },
      { id: 'harvest', label: 'vs Harvest' },
      { id: 'desktime', label: 'vs DeskTime' },
      { id: 'clickup', label: 'vs ClickUp' },
    ],
    []
  );

  const sections = useMemo(
    () => [
      {
        id: 'time-doctor',
        theme: 'Optimization vs. Surveillance',
        headline: "Don't spy on your team. Empower them.",
        pain: 'Takes invasive screenshots, feels like "Big Brother," destroys trust.',
        solution: 'Uses active task timers and efficiency scores. You get verified data without invading privacy.',
        visual: 'trust',
      },
      {
        id: 'hubstaff',
        theme: 'The All-in-One Workflow',
        headline: 'Stop using Trello + Hubstaff.',
        pain: 'Great for payments, but weak for managing actual work. You still need a separate PM tool.',
        solution: 'Brings the Kanban board, Task lists, and Time Tracking into one tab. Context switching = 0.',
        visual: 'equation',
      },
      {
        id: 'harvest',
        theme: 'Verified Data vs. Guesses',
        headline: 'Bill for reality, not memory.',
        pain: 'Relies on manual entry ("I think I worked 4 hours"). Prone to human error.',
        solution: 'Native timers embedded in every task. Precision down to the second.',
        visual: 'timers',
      },
      {
        id: 'desktime',
        theme: 'Actionable Data',
        headline: "More than just 'Auto-Tracking'.",
        pain: "Tracks 'App Usage' (e.g., 2 hours on Chrome), but doesn't know which project that time belongs to.",
        solution: 'Links time directly to Client Projects and Invoices automatically.',
        visual: 'projects',
      },
      {
        id: 'clickup',
        theme: 'Agency-First Design',
        headline: 'Built for Agencies, not everyone.',
        pain: 'A generic tool that requires complex setup. No native Invoicing or Efficiency scores.',
        solution: 'Ready out of the box. Includes the specialized tools agencies need (CRM, Invoicing, Staff Monitoring).',
        visual: 'agency',
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState(navItems[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0.3, 0.6] }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const renderVisual = (type: string) => {
    switch (type) {
      case 'trust':
        return (
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 rounded-2xl border border-destructive/40 bg-gradient-to-br from-red-50/80 to-rose-100/60 shadow-sm">
              <div className="flex items-center gap-2 text-destructive font-semibold">
                <AlertTriangle className="h-5 w-5" />
                <span>Time Doctor</span>
              </div>
              <div className="mt-3 h-32 rounded-xl border border-dashed border-destructive/30 bg-white/80 flex items-center justify-center text-destructive/80 text-sm font-medium">
                Red warning over forced screenshots
              </div>
            </div>
            <div className="p-4 rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-emerald-50/80 to-teal-100/60 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <ShieldCheck className="h-5 w-5" />
                <span>TeamPulse</span>
              </div>
              <div className="mt-3 h-32 rounded-xl border border-emerald-200 bg-white/80 flex items-center justify-center text-emerald-700 text-sm font-medium">
                Green check on task timer card
              </div>
            </div>
          </div>
        );
      case 'equation':
        return (
          <div className="p-6 rounded-2xl border bg-gradient-to-br from-indigo-50 to-blue-100 shadow-sm">
            <div className="flex items-center justify-between text-lg font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <PanelsTopLeft className="h-5 w-5 text-indigo-600" />
                <span>Hubstaff</span>
              </div>
              <span className="text-2xl">+</span>
              <div className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-indigo-600" />
                <span>Trello</span>
              </div>
              <span className="text-2xl">=</span>
              <div className="flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">$$</div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3 text-xl font-bold text-emerald-700">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                <CheckCircle className="h-5 w-5" />
                <span>TeamPulse</span>
              </div>
              <span className="text-2xl">=</span>
              <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">$</div>
            </div>
          </div>
        );
      case 'timers':
        return (
          <div className="p-6 rounded-2xl border bg-gradient-to-br from-orange-50 to-amber-100 shadow-sm">
            <div className="flex items-center gap-3 text-amber-700 font-semibold">
              <Clock3 className="h-5 w-5" />
              <span>Manual entry vs native timers</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3">
              <div className="rounded-xl border border-dashed border-amber-300 p-4 bg-white/80 text-sm text-amber-800">"I think I worked 4 hours"</div>
              <div className="rounded-xl border border-emerald-200 p-4 bg-emerald-50 text-sm text-emerald-800 font-semibold">
                Live task timer · 00:42:10 · Auto-attached to invoice
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="p-6 rounded-2xl border bg-gradient-to-br from-sky-50 to-cyan-100 shadow-sm">
            <div className="flex items-center gap-2 text-sky-800 font-semibold">
              <FileSpreadsheet className="h-5 w-5" />
              <span>App usage vs project clarity</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-dashed border-sky-300 p-3 bg-white/80 text-xs text-slate-600">
                Chrome · 2h
                <div className="mt-2 text-[11px] text-slate-500">DeskTime view</div>
              </div>
              <div className="rounded-xl border border-emerald-200 p-3 bg-emerald-50 text-xs text-emerald-800 font-semibold">
                Client: Acme Retail
                <div className="mt-1 text-sm">Project: Rebrand</div>
                <div className="mt-2 text-[11px] text-emerald-700">Linked to invoice #1043</div>
              </div>
            </div>
          </div>
        );
      case 'agency':
        return (
          <div className="p-6 rounded-2xl border bg-gradient-to-br from-purple-50 to-pink-100 shadow-sm">
            <div className="flex items-center gap-2 text-purple-800 font-semibold">
              <LayoutDashboard className="h-5 w-5" />
              <span>Ready-out-of-the-box stack</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-dashed border-purple-300 p-3 bg-white/80 text-slate-700">
                <div className="font-semibold text-purple-700 mb-2">ClickUp setup</div>
                <ul className="space-y-1 list-disc list-inside text-xs text-slate-600">
                  <li>Custom statuses</li>
                  <li>Automations</li>
                  <li>Integrations for invoicing</li>
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-200 p-3 bg-emerald-50 text-emerald-800 font-semibold">
                TeamPulse
                <ul className="mt-2 space-y-1 text-xs text-emerald-700">
                  <li>CRM</li>
                  <li>Invoicing</li>
                  <li>Staff Monitoring</li>
                  <li>Efficiency Scores</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 pb-20">
        <section className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-teampulse-purple/90 via-slate-900 to-slate-900 text-white p-10 md:p-14 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(91,95,199,0.22),transparent_35%),_radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.18),transparent_35%),_radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.18),transparent_35%)]" />
            <div className="relative max-w-3xl space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white border border-white/15">
                Built for agency operators
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                The only Agency Workspace that replaces your entire stack.
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl">
                Compare TeamPulse against the tools you know. See how an agency-first platform removes surveillance, eliminates context switching, and lets you bill on verified data.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/pricing">
                  <Button size="lg" className="gap-2 bg-white text-teampulse-purple hover:bg-white/90">
                    View pricing
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a
                  href="https://github.com/akaashsashiraj/TeamPulse-LandingPage/releases/download/v1.0.0/Team.Pulse.Agent.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Download workspace
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 mt-12">
          <div className="sticky top-20 z-30">
            <div className="flex items-center gap-3 overflow-x-auto rounded-2xl glass-card border border-border bg-background/90 backdrop-blur px-4 py-3 shadow-card">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors border ${
                    activeId === item.id
                      ? 'bg-teampulse-purple/15 text-foreground border-teampulse-purple/30 shadow-inner'
                      : 'bg-muted/40 text-muted-foreground border-transparent hover:text-foreground'
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 mt-16 space-y-16">
          {sections.map((section, index) => {
            const isImageLeft = index % 2 === 0;
            return (
              <div
                key={section.id}
                id={section.id}
                className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-32"
              >
                <div className={`${isImageLeft ? 'order-1' : 'order-2'}`}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-muted/70 px-3 py-1 text-xs font-semibold text-muted-foreground mb-4 border border-muted/60">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {section.theme}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-4">{section.headline}</h2>
                  <div className="space-y-3 text-base md:text-lg text-muted-foreground">
                    <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 shadow-sm">
                      <p className="font-semibold text-destructive mb-1">Their way</p>
                      <p>{section.pain}</p>
                    </div>
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
                      <p className="font-semibold text-emerald-700 mb-1">TeamPulse way</p>
                      <p className="text-foreground">{section.solution}</p>
                    </div>
                  </div>
                </div>

                <div className={`${isImageLeft ? 'order-2' : 'order-1'}`}>
                  <div className="rounded-2xl glass-card border border-border bg-background/80 backdrop-blur text-card-foreground shadow-card p-4 md:p-6">
                    {renderVisual(section.visual)}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="container mx-auto px-6 mt-20">
          <div className="rounded-3xl border border-border bg-gradient-to-r from-teampulse-purple via-indigo-600 to-purple-700 text-white p-10 md:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Your Team's Pulse, Live.</p>
              <h3 className="text-3xl md:text-4xl font-black">Stop paying for 5 different apps.</h3>
              <p className="text-white/80 text-lg">
                Consolidate your stack, keep privacy-first tracking, and bill confidently with verified time data.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="secondary" className="bg-white text-teampulse-purple hover:bg-white/90">
                Start Migration
              </Button>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white/20">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Comparison;
