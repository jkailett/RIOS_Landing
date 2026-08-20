import { FOOTER, SITE, NAV_LINKS } from "@/app/data";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface py-16">
      <div className="container-page">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="gradient-text-animated">R</span>
                <span className="text-white">IOS</span>
              </span>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                {FOOTER.tagline}
              </p>
              <p className="mt-2 text-xs font-semibold tracking-wider text-cyan-400">
                {FOOTER.motto}
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/30">
                Navigasi
              </p>
              <nav className="mt-4 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              {/* Legal Links */}
              <div className="mt-6 flex gap-4 border-t border-white/5 pt-4">
                <a
                  href="/toc"
                  className="text-xs text-muted/70 transition-colors duration-200 hover:text-accent"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/privacy"
                  className="text-xs text-muted/70 transition-colors duration-200 hover:text-accent"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/30">
                Hubungi Kami
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href={SITE.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  WhatsApp: {SITE.waDisplay}
                </a>
                <a
                  href={SITE.url}
                  className="block text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  {SITE.url}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-muted/50">
            {FOOTER.copyright}
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
