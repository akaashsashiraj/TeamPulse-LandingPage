

const footerLinks = {
  Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'],
  'Use Cases': ['Project Management', 'CRM', 'Resource Planning', 'Invoicing', 'Time Tracking'],
  Resources: ['Blog', 'Guides', 'Help Center', 'Community', 'API'],
  Company: ['About', 'Careers', 'Press', 'Partners', 'Contact'],
  Compare: ['vs Asana', 'vs Monday', 'vs Notion', 'vs Jira', 'vs Trello'],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-6 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-0 mb-6">
              <img
                src="/src/assets/TeamPulseLogo.png"
                alt="TeamPulse logo"
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold" style={{ color: '#5B5FC7', fontFamily: "'Poppins', sans-serif", fontWeight: '700' }}>
                TeamPulse
              </span>
            </a>
            <p className="text-background/60 text-sm">
              One app to replace them all. Manage projects, teams, and clients effortlessly.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-background mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/60 hover:text-background transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} TeamPulse. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Made with{' '}
              <span className="text-teampulse-pink">💜</span>
              {' '}by TeamPulse
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
