/**
 * Definisci i tuoi link qui.
 * Puoi anche organizzarli in sezioni.
 *
 * Icone disponibili: qualsiasi icona di lucide-react
 * https://lucide.dev/icons
 */

export interface LinkItem {
  title: string;
  url: string;
  description?: string;
  emoji?: string; // emoji unicode (es. "🔗")
  iconUrl?: string; // URL di un SVG/PNG remoto
}

export interface LinkSection {
  heading?: string;
  headingIconUrl?: string; // icona accanto al titolo della sezione
  links: LinkItem[];
}

export const profile = {
  name: "Federico Calicchia",
  bio: "Web design, sviluppo, comunicazione ed automazioni AI per la tua azienda",
  avatar: "/images/avatar.jpg",
};

export const sections: LinkSection[] = [
  {
    links: [
      {
        title: "Calicchia Design",
        url: "https://calicchia.design",
        description: "Il mio studio freelance",
        iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/shell.svg",
      },
      {
        title: "Easy Web",
        url: "https://easyweb.calicchia.design",
        description: "Siti Web da €249",
        iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/opencost.svg",
      },
      {
        title: "GitHub",
        url: "https://github.com/Federicokalik",
        description: "Progetti open source ed sperimenti",
        iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/github.svg",
      },
    ],
  },
  {
    heading: "Claude Skills",
    headingIconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/claude-ai.svg",
    links: [
      {
        title: "Porsche Design System",
        url: "https://s.calicchia.design/pds",
        description: "Skill per generare UI con PDS v3/v4",
        iconUrl: "https://cdn.brandfetch.io/idOSUjsXG-/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1726555597451",
      },
      {
        title: "Bulma CSS",
        url: "https://github.com/Federicokalik/claude-skill-bulma",
        description: "Skill per generare UI con Bulma CSS",
        iconUrl: "https://bulma.io/assets/brand/Bulma%20Icon.svg",
      },
    ],
  },
  {
    heading: "Contatti",
    links: [
      {
        title: "Email",
        url: "mailto:federico@calicchia.design",
        description: "Scrivimi per un preventivo",
        iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/gmail.svg",
      },
      {
        title: "WhatsApp",
        url: "https://wa.me/393517773467",
        description: "Risposta rapida",
        iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/whatsapp.svg",
      },
    ],
  },
];
