import ParticleBackground from "@/components/ParticleBackground";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import { profile, sections } from "@/data/links";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />

      <main className="relative z-10 flex flex-col items-center px-4 py-12 sm:py-20">
        {/* Profile Header */}
        <div className="animate-float-up text-center mb-10" style={{ animationDelay: "0ms" }}>
          <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-2xl font-heading font-bold text-primary">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            )}
          </div>

          <h1 className="text-2xl font-heading font-bold text-foreground">
            {profile.name}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">{profile.bio}</p>
        </div>

        {/* Links */}
        <div className="w-full max-w-md space-y-3">
          {sections.map((section, sIdx) => {
            const globalOffset = sections
              .slice(0, sIdx)
              .reduce((sum, s) => sum + s.links.length, 0);

            return (
              <div key={sIdx}>
                {section.heading && (
                  <h2
                    className="text-xs font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-3 px-1 animate-float-up flex items-center gap-2"
                    style={{ animationDelay: `${globalOffset * 80 + 150}ms` }}
                  >
                    {section.headingIconUrl && (
                      <img src={section.headingIconUrl} alt="" className="w-4 h-4" />
                    )}
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-2.5">
                  {section.links.map((link, lIdx) => (
                    <LinkCard
                      key={link.url}
                      link={link}
                      index={globalOffset + lIdx}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="text-center mt-16 animate-float-up space-y-3"
          style={{ animationDelay: "800ms" }}
        >
          <ThemeToggle />
          <p className="text-muted-foreground/70 text-xs">&copy; {new Date().getFullYear()} Calicchia Design &mdash; P.IVA 03160480608</p>
          <p className="text-muted-foreground/55 text-[10px] max-w-xs mx-auto leading-relaxed">
            Questo sito non utilizza cookie di tracciamento n&eacute; raccoglie dati personali. Eventuali cookie sono esclusivamente tecnici e necessari al funzionamento della pagina.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
