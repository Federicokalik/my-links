import { useRef } from "preact/hooks";
import { LinkIcon, ArrowUpRight } from "./Icons";
import type { LinkItem } from "@/data/links";

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

const LinkCard = ({ link, index }: LinkCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleClick = (e: MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <a
      ref={cardRef}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="link-card block px-5 py-4 animate-float-up cursor-pointer"
      style={{ animationDelay: `${index * 80 + 200}ms` }}
    >
      <div className="flex items-center gap-4">
        <div className="link-card-icon flex-shrink-0 w-10 h-10 rounded-xl bg-white/80 dark:bg-white/90 flex items-center justify-center">
          {link.iconUrl ? (
            <img src={link.iconUrl} alt="" className="w-5 h-5" />
          ) : link.emoji ? (
            <span className="text-lg">{link.emoji}</span>
          ) : (
            <LinkIcon className="w-5 h-5 text-primary" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-heading font-semibold text-foreground text-[15px] truncate">
            {link.title}
          </p>
          {link.description && (
            <p className="text-muted-foreground text-sm truncate mt-0.5">
              {link.description}
            </p>
          )}
        </div>

        <ArrowUpRight className="link-card-arrow w-4 h-4 text-muted-foreground flex-shrink-0" />
      </div>
    </a>
  );
};

export default LinkCard;
